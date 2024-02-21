import { getComplimentary, ComplimentaryType } from './complimentary';
import { toHSL } from './to';

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

});