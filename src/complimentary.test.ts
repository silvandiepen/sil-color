import { getComplimentary, ComplimentaryType } from './complimentary';
import { toHSL, toHex, toRGB } from './to';
import { ColorType } from './types';

describe('getComplimentary', () => {
    it('should return shades when type is shade', () => {
        const options = { total: 3, type: ComplimentaryType.SHADE };
        const result = getComplimentary('#ff0000', options);
        expect(result.length).toBe(3);
        result.forEach(color => {
            expect(color).toHaveProperty('r');
            expect(color).toHaveProperty('g');
            expect(color).toHaveProperty('b');
        });
    });

    it('should return tints when type is tint', () => {
        const options = { total: 3, type: ComplimentaryType.TINT };
        const result = getComplimentary('#ff0000', options);
        expect(result.length).toBe(3);
        result.forEach(color => {
            expect(color).toHaveProperty('r');
            expect(color).toHaveProperty('g');
            expect(color).toHaveProperty('b');
        });
    });

    it('should return tones when type is tone', () => {
        const options = { total: 3, type: ComplimentaryType.TONE };
        const result = getComplimentary('#ff0000', options);
        expect(result.length).toBe(3);
        result.forEach(color => {
            expect(color).toHaveProperty('r');
            expect(color).toHaveProperty('g');
            expect(color).toHaveProperty('b');
        });
    });

    it('should return hues when type is hue', () => {
        const options = { total: 3, type: ComplimentaryType.HUE };
        const result = getComplimentary('#ff0000', options);
        expect(result.length).toBe(3);
        result.forEach(color => {
            expect(color).toHaveProperty('r');
            expect(color).toHaveProperty('g');
            expect(color).toHaveProperty('b');
        });
    });
    it('should return correct number of shades when type is shade', () => {
        const options = { total: 5, type: ComplimentaryType.SHADE };
        const result = getComplimentary('#ff0000', options);
        expect(result.length).toBe(5);
    });

    it('should return correct number of tints when type is tint', () => {
        const options = { total: 4, type: ComplimentaryType.TINT };
        const result = getComplimentary('#ff0000', options);
        expect(result.length).toBe(4);
    });

    it('should return correct number of tones when type is tone', () => {
        const options = { total: 3, type: ComplimentaryType.TONE };
        const result = getComplimentary('#ff0000', options);
        expect(result.length).toBe(3);
    });

    it('should return correct number of hues when type is hue', () => {
        const options = { total: 6, type: ComplimentaryType.HUE };
        const result = getComplimentary('#ff0000', options);
        expect(result.length).toBe(6);
    });

    it('should return complimentary colors when type is hue', () => {
        const options = { total: 2, type: ComplimentaryType.HUE };
        const color = '#ff0000';
        const result = getComplimentary(color, options);

        const originalHue = toHSL(color).h;
        const complimentaryHue = toHSL(result[1]).h;
        const hueDifference = Math.abs(originalHue - complimentaryHue);
        expect(hueDifference).toBeCloseTo(180, -1);
    });

    it('should return colors in RGB format when output is RGB', () => {
        const options = { total: 2, type: ComplimentaryType.HUE, output: ColorType.RGB };
        const color = '#ff0000';
        const result = getComplimentary(color, options);
        const rgbColor = toRGB(result[1]);
        expect(result[1]).toEqual(rgbColor);
      });
    
      it('should return colors in HSL format when output is HSL', () => {
        const options = { total: 2, type: ComplimentaryType.HUE, output: ColorType.HSL };
        const color = '#ff0000';
        const result = getComplimentary(color, options);
        const hslColor = toHSL(result[1]);
        expect(result[1]).toEqual(hslColor);
      });
    
      it('should return colors in HEX format when output is HEX', () => {
        const options = { total: 2, type: ComplimentaryType.HUE, output: ColorType.HEX };
        const color = '#ff0000';
        const result = getComplimentary(color, options);
        const hexColor = toHex(result[1]);
        expect(result[1]).toEqual(hexColor);
      });


});