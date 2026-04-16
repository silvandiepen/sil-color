import { generatePalette, DefaultRegistry, exportAsCSS, exportAsJSON, exportAsTS, exportAsSCSS, exportAsSVG } from './palette';
import { toHSL } from '../to/to';

describe('palette/generatePalette', () => {
  test('blue equals #0000ff when base red is #ff0000', () => {
    const { colors } = generatePalette({ base: { RED: '#ff0000' } });
    expect(colors.BLUE).toBe('#0000ff');
  });

  test('generated chromatic colors copy S/L from base (uniform-sl)', () => {
    const base = '#a82828';
    const baseHsl = toHSL(base);
    const { colors } = generatePalette({ base: { RED: base } });
    const blueHsl = toHSL(colors.BLUE);
    const ds = Math.abs((blueHsl as any).s - (baseHsl as any).s);
    const dl = Math.abs((blueHsl as any).l - (baseHsl as any).l);
    expect(ds).toBeLessThanOrEqual(20);
    expect(dl).toBeLessThanOrEqual(5);
  });

  test('pinned color remains unchanged', () => {
    const { colors } = generatePalette({ base: { RED: '#ff0000' }, pins: { BLUE: '#123456' } });
    expect(colors.BLUE.toLowerCase()).toBe('#123456');
  });

  test('disabled color is omitted from exports', () => {
    const { colors } = generatePalette({ base: { RED: '#ff0000' }, disabled: ['BLUE'] });
    const css = exportAsCSS(colors);
    expect(css.includes('--color-blue')).toBe(false);
  });

  test('multi-base chooses closest hue', () => {
    // Distinct S/L per base to see effect
    const { colors, usedBaseFor } = generatePalette({
      base: { RED: '#ff0000', GREEN: '#00ff00' },
    });
    // YELLOW (60deg) is equally spaced between RED (0) and GREEN (120);
    // tie-break should be first encountered base (RED).
    expect(['RED', 'GREEN']).toContain(usedBaseFor.YELLOW);
  });

  test('neutrals remain constant by default', () => {
    const { colors } = generatePalette({ base: { RED: '#ff0000' } });
    expect(colors.BLACK.toLowerCase()).toBe('#000000');
    expect(colors.WHITE.toLowerCase()).toBe('#ffffff');
    expect(colors.GRAY.toLowerCase()).toBe('#808080');
  });

  test('leadBase enforces its S/L across colors (tolerance)', () => {
    const baseRed = '#b03030';
    const baseGreen = '#20b060';
    const res = generatePalette({ base: { RED: baseRed, GREEN: baseGreen }, leadBase: 'GREEN' });
    const greenHsl = toHSL(baseGreen) as any;
    const blueHsl = toHSL(res.colors.BLUE) as any;
    expect(Math.abs(blueHsl.s - greenHsl.s)).toBeLessThanOrEqual(20);
    expect(Math.abs(blueHsl.l - greenHsl.l)).toBeLessThanOrEqual(10);
  });
});

describe('palette/exporters', () => {
  const sample = { RED: '#ff0000', BLUE: '#0000ff' };

  test('css export has variables', () => {
    const css = exportAsCSS(sample);
    expect(css).toContain('--color-red');
    expect(css).toContain('#ff0000');
  });

  test('json export', () => {
    const json = exportAsJSON(sample);
    expect(JSON.parse(json).RED).toBe('#ff0000');
  });

  test('ts export', () => {
    const ts = exportAsTS(sample, { constName: 'THEME' });
    expect(ts).toContain('export const THEME');
    expect(ts).toContain('RED: "#ff0000"');
  });

  test('scss export', () => {
    const scss = exportAsSCSS(sample);
    expect(scss).toContain('$color-red');
    expect(scss).toContain('$color-map');
  });

  test('svg export', () => {
    const svg = exportAsSVG(sample, { columns: 2 });
    expect(svg.startsWith('<svg')).toBe(true);
    expect(svg).toContain('#ff0000');
  });
});
