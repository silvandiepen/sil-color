import type { RGB, RGBA } from "./types";
export const getNumbers = (input: string): number[] => {
  const values: number[] = [];
  input
    .replace(/[^\d,]/g, "")
    .split(",")
    .forEach((v) => values.push(parseInt(v)));
  return values;
};

const sRGBtoLin = (colorChannel: number) => {
  // Send this function a decimal sRGB gamma encoded color value
  // between 0.0 and 1.0, and it returns a linearized value.

  if (colorChannel <= 0.04045) {
    return colorChannel / 12.92;
  }

  return Math.pow((colorChannel + 0.055) / 1.055, 2.4);
};

/**
 * @param r Red, [0-1]
 * @param g Green, [0-1]
 * @param b Blue, [0-1]
 * @returns Luminance, [0-1]
 */
export const rgbToY = (input: RGB | RGBA) => {
  const { r, g, b } = input;
  return 0.2126 * sRGBtoLin(r) + 0.7152 * sRGBtoLin(g) + 0.0722 * sRGBtoLin(b);
};

/**
 * Luminance to perceived lightness.
 *
 * @param Y Luminance, [0-1]
 */
function YtoLstar(Y: number) {
  // Send this function a luminance value between 0.0 and 1.0,
  // and it returns L* which is "perceptual lightness"

  if (Y <= 216 / 24389) {
    // The CIE standard states 0.008856 but 216/24389 is the intent for 0.008856451679036
    return Y * (24389 / 27); // The CIE standard states 903.3, but 24389/27 is the intent, making 903.296296296296296
  }

  return Math.pow(Y, 1 / 3) * 116 - 16;
}

const isDefined = (value: any): boolean => typeof value !== undefined;

export const minmax = (num: number, min = 0, max = 100) =>
  Math.min(Math.max(num, min), max);

export const isBetween = (val: number, min: number, max: number): boolean =>
  val >= min && val <= max;

export const areBetween = (vals: number[], min: number, max: number): boolean =>
  !vals.find((v: number) => !isBetween(v, min, max));

export const shift = (value: any[]): any[] => {
  value.shift();
  return isDefined(value) ? value : [];
};

export const randomBetween = (min: number, max: number): number => {
  if (min == max) return min;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
