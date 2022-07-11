import { HSL, HSLA, RGB, RGBA, instanceOfRGBA, instanceOfHSLA } from "./types";

export const toRgbString = (rgb: RGB | RGBA): string => {
  return instanceOfRGBA(rgb)
    ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`
    : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
};

export const toHslString = (hsl: HSL | HSLA): string => {
  return instanceOfHSLA(hsl)
    ? `hsla(${hsl.h}, ${hsl.s}, ${hsl.l}, ${hsl.a})`
    : `hsl(${hsl.h}, ${hsl.s}, ${hsl.l})`;
};
