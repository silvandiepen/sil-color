import { getHue, getLightness, getSaturation, componentToHex } from "./get";
import { isCMYK, isHex, isHSL, isRGB } from "./is";
import { toCmykObject, toHslObject, toRgbObject } from "./object";
import {
  HSL,
  RGB,
  HEX,
  CMYK,
  COLOR,
  instanceOfRGB,
  instanceOfCMYK,
  instanceOfHSL,
  instanceOfHSLA,
  HSLA,
  instanceOfRGBA,
  RGBA,
} from "./types";

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

export const hslToRgb = (hsl: HSL | HSLA): RGB | RGBA => {
  let { h, s, l } = hsl;
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  const rgb = {
    r: Math.round(255 * f(0)) as RGB["r"],
    g: Math.round(255 * f(8)) as RGB["g"],
    b: Math.round(255 * f(4)) as RGB["b"],
  };

  if (instanceOfHSL(hsl)) {
    return rgb;
  } else {
    return { ...rgb, a: (hsl as HSLA).a };
  }
};

export const rgbToHsl = (rgb: RGB | RGBA): HSL | HSLA => {
  const hsl = {
    h: getHue(rgb) as HSL["h"],
    s: getSaturation(rgb) as HSL["s"],
    l: getLightness(rgb) as HSL["l"],
  };

  if (instanceOfRGB(rgb)) {
    return hsl;
  } else {
    return { ...hsl, a: (rgb as RGBA).a };
  }
};

export const rgbToHex = (rgb: RGB | RGBA): HEX => {
  const { r, g, b } = rgb;
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export const rgbToCmyk = (rgb: RGB): CMYK => {
  let { r, g, b } = rgb;
  let c = 1 - r / 255;
  let m = 1 - g / 255;
  let y = 1 - b / 255;
  let k = Math.min(c, Math.min(m, y));

  c = (c - k) / (1 - k);
  m = (m - k) / (1 - k);
  y = (y - k) / (1 - k);

  // if(!normalized){
  c = Math.round(c * 100);
  m = Math.round(m * 100);
  y = Math.round(y * 100);
  k = Math.round(k * 100);
  // }

  c = isNaN(c) ? 0 : c;
  m = isNaN(m) ? 0 : m;
  y = isNaN(y) ? 0 : y;
  k = isNaN(k) ? 0 : k;

  const cmyk = {
    c: c as CMYK["c"],
    m: m as CMYK["m"],
    y: y as CMYK["y"],
    k: k as CMYK["k"],
  };
  return cmyk;
};

export const cmykToRgb = (cmyk: CMYK): RGB => {
  const k = cmyk.k / 100;

  const c = (cmyk.c / 100) * (1 - k) + k;
  const m = (cmyk.m / 100) * (1 - k) + k;
  const y = (cmyk.y / 100) * (1 - k) + k;

  const r = Math.round(255 * (1 - c));
  const g = Math.round(255 * (1 - m));
  const b = Math.round(255 * (1 - y));

  const rgb = { r: r as RGB["r"], g: g as RGB["g"], b: b as RGB["b"] };

  return rgb;
};

export const hslToHex = (color: HSL | HSLA): HEX => rgbToHex(hslToRgb(color));
export const hslToCmyk = (color: HSL | HSLA): CMYK =>
  rgbToCmyk(hslToRgb(color));
export const cmykToHex = (color: CMYK): HEX => rgbToHex(cmykToRgb(color));
export const cmykToHsl = (color: CMYK): HSL => rgbToHsl(cmykToRgb(color));
export const hexToCmyk = (color: HEX): CMYK => rgbToCmyk(hexToRgb(color));

export const toHex = (color: COLOR): HEX => {
  if (typeof color == "string") {
    if (isHex(color as string)) return color as HEX;
    if (isRGB(color as string)) return rgbToHex(toRgbObject(color));
    if (isHSL(color as string)) return hslToHex(toHslObject(color));
    if (isCMYK(color as string)) return cmykToHex(toCmykObject(color));
  } else if (instanceOfRGB(color) || instanceOfRGBA(color)) {
    return rgbToHex(color);
  } else if (instanceOfHSL(color) || instanceOfHSLA(color)) {
    return hslToHex(color);
  } else if (instanceOfCMYK(color)) {
    return cmykToHex(color);
  }
  return "#000000";
};

export const toRGB = (color: COLOR): RGB | RGBA => {
  if (typeof color == "string") {
    if (isHex(color as string)) return hexToRgb(color);
    if (isRGB(color as string)) return toRgbObject(color);
    if (isHSL(color as string)) return hslToRgb(toHslObject(color));
    if (isCMYK(color as string)) return cmykToRgb(toCmykObject(color));
  } else if (instanceOfRGB(color) || instanceOfRGBA(color)) {
    return (color as RGBA).a && (color as RGBA).a > -1
      ? (color as RGBA)
      : (color as RGB);
  } else if (instanceOfHSL(color) || instanceOfHSLA(color)) {
    return hslToRgb(color);
  } else if (instanceOfCMYK(color)) {
    return cmykToRgb(color);
  }
  return { r: 0, g: 0, b: 0 };
};

export const toHSL = (color: COLOR): HSL | HSLA => {
  if (typeof color == "string") {
    if (isHex(color as string)) return hexToHsl(color);
    if (isRGB(color as string)) return rgbToHsl(toRgbObject(color));
    if (isHSL(color as string)) return toHslObject(color);
    if (isCMYK(color as string)) return cmykToHsl(toCmykObject(color));
  } else if (instanceOfHSL(color) || instanceOfRGBA(color)) {
    return (color as HSLA).a && (color as HSLA).a > -1
      ? (color as HSLA)
      : (color as HSL);
  } else if (instanceOfRGBA(color) || instanceOfRGBA(color)) {
    return rgbToHsl(color);
  } else if (instanceOfCMYK(color)) {
    return cmykToHsl(color);
  }
  return { h: 0, s: 0, l: 0 };
};

export const toCMYK = (color: COLOR): CMYK => {
  if (typeof color == "string") {
    if (isHex(color as string)) return hexToCmyk(color);
    if (isRGB(color as string)) return rgbToCmyk(toRgbObject(color));
    if (isHSL(color as string)) return hslToCmyk(toHslObject(color));
    if (isCMYK(color as string)) return toCmykObject(color);
  } else if (instanceOfHSL(color)) {
    return hslToCmyk(color as HSL);
  } else if (instanceOfHSLA(color)) {
    return hslToCmyk(color as HSLA);
  } else if (instanceOfRGB(color)) {
    return rgbToCmyk(color as RGB);
  } else if (instanceOfRGBA(color)) {
    return rgbToCmyk(color as RGBA);
  } else if (instanceOfCMYK(color)) {
    return color;
  }
  return { c: 0, m: 0, y: 0, k: 0 };
};
