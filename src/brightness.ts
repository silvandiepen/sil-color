import { toType } from "./to";
import { RGB, RGBA, COLOR, ColorType } from "./types";

const sRGBtoLin = (colorChannel: number) => {
  // Send this function a decimal sRGB gamma encoded color value
  // between 0.0 and 1.0, and it returns a linearized value.

  if (colorChannel <= 0.04045) {
    return colorChannel / 12.92;
  }

  return Math.pow((colorChannel + 0.055) / 1.055, 2.4);
};

/**
 * @param input RGB
 * @returns Luminance, [0-1]
 */
export const rgbToY = (input: RGB | RGBA) => {
  const { r, g, b } = input;

  return (
    0.2126 * sRGBtoLin(r / 255) +
    0.7152 * sRGBtoLin(g / 255) +
    0.0722 * sRGBtoLin(b / 255)
  );
};

/**
 * Luminance to perceived lightness.
 *
 * @param Y Luminance, [0-1]
 */
const YtoLstar = (Y: number) => {
  // Send this function a luminance value between 0.0 and 1.0,
  // and it returns L* which is "perceptual lightness"

  if (Y <= 216 / 24389) {
    // The CIE standard states 0.008856 but 216/24389 is the intent for 0.008856451679036
    return Y * (24389 / 27); // The CIE standard states 903.3, but 24389/27 is the intent, making 903.296296296296296
  }

  return Math.pow(Y, 1 / 3) * 116 - 16;
};

export const getBrightness = (input: COLOR): number => {
  const rgb = toType(input, ColorType.RGB) as RGB;

  const brightness = YtoLstar(rgbToY(rgb));

  return Math.round(brightness * 100) / 100;
};
