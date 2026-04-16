import colorSpectrumData from './color-spectrum.json';
import type { HSL, HEX } from '../types/types';

export interface ColorSpectrum {
  spectral: boolean;
  wavelength_nm: [number, number] | null;
  hue_deg: [number, number][];
  saturation: [number, number];
  lightness: [number, number];
  notes: string;
}

export interface ColorSpectrumData {
  schema: {
    spectral: string;
    wavelength_nm: string;
    hue_deg: string;
    saturation: string;
    lightness: string;
    notes: string;
  };
  colorsets: Record<string, ColorSpectrum>;
}

export interface GeneratedColor {
  h: number;
  s: number;
  l: number;
  r: number;
  g: number;
  b: number;
  hex: string;
}

const colorsets = colorSpectrumData as ColorSpectrumData;

function pickInRange([min, max]: [number, number]): number {
  return min + Math.random() * (max - min);
}

function pickHue(hueRanges: [number, number][]): number {
  const range = hueRanges[Math.floor(Math.random() * hueRanges.length)];
  return pickInRange(range);
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number; hex: string } {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = h / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let [r1, g1, b1] = hp < 1 ? [c, x, 0] : 
                     hp < 2 ? [x, c, 0] : 
                     hp < 3 ? [0, c, x] : 
                     hp < 4 ? [0, x, c] : 
                     hp < 5 ? [x, 0, c] : 
                     [c, 0, x];
  const m = l - c / 2;
  const [r, g, b] = [r1 + m, g1 + m, b1 + m].map(v => Math.round(Math.max(0, Math.min(255, v * 255))));
  return { 
    r, 
    g, 
    b, 
    hex: `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}` 
  };
}

/**
 * Generate a color from the spectrum definition for a given color name
 * @param name - The color name from the colorsets
 * @param opts - Optional overrides for h, s, l values (0-1 range)
 * @returns Generated color with HSL, RGB, and hex values
 */
export function generateColor(name: string, opts: { h?: number; s?: number; l?: number } = {}): GeneratedColor {
  const cs = colorsets.colorsets[name];
  if (!cs) {
    throw new Error(`Unknown colorset: ${name}`);
  }
  
  const h = 'h' in opts ? opts.h! : pickHue(cs.hue_deg);
  const s = 's' in opts ? opts.s! : pickInRange(cs.saturation);
  const l = 'l' in opts ? opts.l! : pickInRange(cs.lightness);
  
  return { h, s, l, ...hslToRgb(h, s, l) };
}

/**
 * Generate a canonical color (deterministic) from the spectrum definition
 * Uses the middle of each range for consistent results
 * @param name - The color name from the colorsets
 * @returns Generated canonical color with HSL, RGB, and hex values
 */
export function generateCanonicalColor(name: string): GeneratedColor {
  const cs = colorsets.colorsets[name];
  if (!cs) {
    throw new Error(`Unknown colorset: ${name}`);
  }
  
  // Use middle values for deterministic results
  const hueRange = cs.hue_deg[0]; // Use first hue range
  const h = (hueRange[0] + hueRange[1]) / 2;
  const s = (cs.saturation[0] + cs.saturation[1]) / 2;
  const l = (cs.lightness[0] + cs.lightness[1]) / 2;
  
  return { h, s, l, ...hslToRgb(h, s, l) };
}

/**
 * Get the spectrum definition for a color name
 * @param name - The color name
 * @returns The color spectrum definition or null if not found
 */
export function getColorSpectrum(name: string): ColorSpectrum | null {
  return colorsets.colorsets[name] || null;
}

/**
 * Check if a color is spectral (definable by a single wavelength)
 * @param name - The color name
 * @returns True if the color is spectral
 */
export function isSpectralColor(name: string): boolean {
  const cs = getColorSpectrum(name);
  return cs ? cs.spectral : false;
}

/**
 * Get all available color names from the spectrum definitions
 * @returns Array of color names
 */
export function getAllColorNames(): string[] {
  return Object.keys(colorsets.colorsets);
}

/**
 * Generate a set of spectrum-accurate colors for all defined colors
 * @returns Record mapping color names to their hex values
 */
export function generateSpectrumRegistry(): Record<string, HEX> {
  const registry: Record<string, HEX> = {};
  
  for (const colorName of getAllColorNames()) {
    const canonical = generateCanonicalColor(colorName);
    registry[colorName.toUpperCase()] = canonical.hex as HEX;
  }
  
  return registry;
}