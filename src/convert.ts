import { getHue, getLightness, getSaturation, componentToHex } from "./get";
import { HSL, RGB, HEX } from "./types";

export const hexToRgb = (hex: HEX): RGB => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || [
    "0",
    "0",
    "0",
  ];
  return {
    r: parseInt(result[1], 16) as RGB["r"],
    g: parseInt(result[2], 16) as RGB["g"],
    b: parseInt(result[3], 16) as RGB["b"],
  };
};

export const hexToHsl = (hex: HEX): HSL => {
  const rgb: RGB = hexToRgb(hex);
  return {
    h: getHue(rgb) as HSL["h"],
    s: getSaturation(rgb) as HSL["s"],
    l: getLightness(rgb) as HSL["l"],
  };
};

export const hslToRgb = (hsl: HSL): RGB => {
  let { h, s, l } = hsl;
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  return {
    r: Math.round(255 * f(0)) as RGB["r"],
    g: Math.round(255 * f(8)) as RGB["g"],
    b: Math.round(255 * f(4)) as RGB["b"],
  };
};

export const rgbToHsl = (rgb: RGB): HSL => ({
  h: getHue(rgb) as HSL["h"],
  s: getSaturation(rgb) as HSL["s"],
  l: getLightness(rgb) as HSL["l"],
});

export const rgbToHex = (rgb: RGB): HEX => {
  const { r, g, b } = rgb;
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export const hslToHex = (hsl: HSL): HEX => rgbToHex(hslToRgb(hsl));
