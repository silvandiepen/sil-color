import { toType } from "../to/to";
import { rgbToY } from "../brightness/brightness";
import { COLOR, RGB, ColorType } from "../types";

const WHITE: RGB = { r: 255, g: 255, b: 255 };
const BLACK: RGB = { r: 0, g: 0, b: 0 };

/**
 * @param a First color
 * @param b Second color
 * @returns WCAG contrast ratio between the two colors, from 1 (no contrast) to 21 (max contrast)
 */
export const contrastRatio = (a: COLOR, b: COLOR): number => {
  const rgbA = toType(a, ColorType.RGB) as RGB;
  const rgbB = toType(b, ColorType.RGB) as RGB;

  const yA = rgbToY(rgbA);
  const yB = rgbToY(rgbB);

  const lighter = Math.max(yA, yB);
  const darker = Math.min(yA, yB);

  return Math.round(((lighter + 0.05) / (darker + 0.05)) * 100) / 100;
};

/**
 * Picks whichever of black or white has the higher WCAG contrast ratio against
 * the given color. Unlike a flat perceived-lightness cutoff (see `getBrightness`),
 * this holds up across hues — a single lightness threshold misjudges saturated
 * blues/purples as "light" even when they read as dark, since blue contributes
 * very little to perceived luminance.
 *
 * @param input Background color to find readable ink for
 * @returns `#ffffff` or `#000000`, whichever contrasts more against `input`
 */
export const getContrastColor = (input: COLOR): string => {
  const rgb = toType(input, ColorType.RGB) as RGB;

  return contrastRatio(rgb, WHITE) >= contrastRatio(rgb, BLACK) ? "#ffffff" : "#000000";
};
