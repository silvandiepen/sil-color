import { getRandomBright, getRandomColor, getRandomPastel, RandomOptions } from './random';
import { ColorType, RGB } from './types';

describe('getRandomColor', () => {
    it('should return a string', () => {
        expect(typeof getRandomColor()).toBe('string');
    });

    it('should return a valid hex color', () => {
        const color = getRandomColor();
        expect(/^#[0-9A-F]{6}$/i.test(color)).toBe(true);
    });

    it('should not return the same color twice in a row (unlikely but possible)', () => {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        expect(color1).not.toBe(color2);
    });
});


describe('getRandomColor with options', () => {
    it('should respect RGB limits', () => {
        const options: RandomOptions = {
            limit: {
                r: [100, 150],
                g: [100, 150],
                b: [100, 150]
            },
            type: ColorType.RGB,
            returnType: 'string'
        };
        const color = getRandomColor(options);
        const regex = /^rgb\((1[0-4][0-9]|150), (1[0-4][0-9]|150), (1[0-4][0-9]|150)\)$/;
        expect(regex.test(color)).toBe(true);
    });

    it('should return a valid RGBA color when type is RGBA', () => {
        const options: Partial<RandomOptions> = {
            type: ColorType.RGBA,
            returnType: 'string'
        };
        const color = getRandomColor(options);
        expect(/^rgba\(\d{1,3}, \d{1,3}, \d{1,3}, [01](?:\.\d+)?\)$/i.test(color)).toBe(true);
    });

    it('should return a valid HSL color when type is HSL', () => {
        const options:Partial<RandomOptions> = {
            type: ColorType.HSL,
            returnType: 'string'
        };
        const color = getRandomColor(options);
        expect(/^hsl\(\d{1,3}deg, \d{1,3}%, \d{1,3}%\)$/i.test(color)).toBe(true);
    });

    it('should respect min and max limits for random generation', () => {
        const options: RandomOptions = {
            limit: { min: 200, max: 255 },
            type: ColorType.RGB,
            returnType: 'string'
        };
        const color = getRandomColor(options);
        const match = color.match(/^rgb\((\d+), (\d+), (\d+)\)$/);
        expect(match).not.toBeNull();
        if(!match) return;
        const [r, g, b] = match.slice(1).map(Number);
        expect(r).toBeGreaterThanOrEqual(200);
        expect(g).toBeGreaterThanOrEqual(200);
        expect(b).toBeGreaterThanOrEqual(200);
        expect(r).toBeLessThanOrEqual(255);
        expect(g).toBeLessThanOrEqual(255);
        expect(b).toBeLessThanOrEqual(255);
    });

    it('should allow specifying returnType as a ColorType', () => {
        const options:Partial<RandomOptions> = {
            type: 'rgb',
            returnType: 'color'
        };
        const color = getRandomColor(options) as unknown as RGB;
        
        expect(color.r).toBeGreaterThanOrEqual(0);
        expect(color.r).toBeLessThanOrEqual(255);
        expect(color.g).toBeGreaterThanOrEqual(0);  
        expect(color.g).toBeLessThanOrEqual(255);
        expect(color.b).toBeGreaterThanOrEqual(0);
        expect(color.b).toBeLessThanOrEqual(255);

    });
});


describe('getRandomPastel', () => {
    it('should return RGB when returnType is color and type is rgb', () => {
      const options = { returnType: 'color', type: 'rgb' };
      const result = getRandomPastel(options);
      // Assuming RGB is an object with r, g, b properties
      expect(typeof result).toBe('object');
      expect(result).toHaveProperty('r');
      expect(result).toHaveProperty('g');
      expect(result).toHaveProperty('b');
    });
  
    it('should return a string when returnType is string', () => {
      const options = { returnType: 'string', type: 'rgb' };
      const result = getRandomPastel(options);
      expect(typeof result).toBe('string');
    });
  
    it('should return HSL when returnType is color and type is hsl', () => {
      const options = { returnType: 'color', type: 'hsl' };
      const result = getRandomPastel(options);
      // Assuming HSL is an object with h, s, l properties
      expect(typeof result).toBe('object');
      expect(result).toHaveProperty('h');
      expect(result).toHaveProperty('s');
      expect(result).toHaveProperty('l');
    });
  });


describe('getRandomBright', () => {
    it('should return RGB when returnType is color and type is rgb', () => {
      const options = { returnType: 'color', type: 'rgb' };
      const result = getRandomBright(options);
      // Assuming RGB is an object with r, g, b properties
      expect(typeof result).toBe('object');
      expect(result).toHaveProperty('r');
      expect(result).toHaveProperty('g');
      expect(result).toHaveProperty('b');
    });
  
    it('should return a string when returnType is string', () => {
      const options = { returnType: 'string', type: 'rgb' };
      const result = getRandomBright(options);
      expect(typeof result).toBe('string');
    });
  
    it('should return HSL when returnType is color and type is hsl', () => {
      const options = { returnType: 'color', type: 'hsl' };
      const result = getRandomBright(options);
      // Assuming HSL is an object with h, s, l properties
      expect(typeof result).toBe('object');
      expect(result).toHaveProperty('h');
      expect(result).toHaveProperty('s');
      expect(result).toHaveProperty('l');
    });
  });