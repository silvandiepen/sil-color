import { getHue, getLightness, getSaturation, componentToHex } from "./get";
import type { HSL, RGB, HEX, CMYK, HSLA, RGBA, HSV, HSVA } from "./types";
import { instanceOfRGB, instanceOfHSL } from "./types";

export const defaultValues: {
  hex: HEX;
  rgb: RGB;
  hsl: HSL;
  hsv: HSV;
  cmyk: CMYK;
} = {
  hex: "#000000",
  rgb: { r: 0, g: 0, b: 0 },
  hsl: { h: 0, s: 0, l: 0 },
  hsv: { h: 0, s: 0, v: 0 },
  cmyk: { c: 0, m: 0, y: 0, k: 100 },
};

export const hexToRgb = (hex: HEX): RGB => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || Object.values(defaultValues.rgb);
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

export const rgbToCmyk = (rgb: RGB | RGBA): CMYK => {
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
export const rgbToHsv = (rgb: RGB | RGBA): HSV | HSVA => {
  const { r, g, b } = rgb;

  let h = 0,
    s = 0,
    v = 0;

  const rAbs = r / 255;
  const gAbs = g / 255;
  const bAbs = b / 255;

  v = Math.max(rAbs, gAbs, bAbs);
  const diff = v - Math.min(rAbs, gAbs, bAbs);

  const diffc = (c: number) => (v - c) / 6 / diff + 1 / 2;
  const percentRoundFn = (num: number) => (Math.round(num * 100) / 100) * 100;

  if (diff == 0) {
    h = s = 0;
  } else {
    s = diff / v;
    const rr = diffc(rAbs);
    const gg = diffc(gAbs);
    const bb = diffc(bAbs);

    if (rAbs === v) {
      h = bb - gg;
    } else if (gAbs === v) {
      h = 1 / 3 + rr - bb;
    } else if (bAbs === v) {
      h = 2 / 3 + gg - rr;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  const hsv = {
    h: Math.round(h * 360) as HSV["h"],
    s: percentRoundFn(s) as HSV["s"],
    v: percentRoundFn(v) as HSV["v"],
  };

  if ((rgb as RGBA).a !== undefined) {
    return {
      ...hsv,
      a: (rgb as RGBA).a,
    };
  }
  return hsv;
};

export const hsvToRgb = (hsv: HSV | HSVA): RGB | RGBA => {
  const { h, s, v } = hsv;

  let f,
    p,
    q,
    t,
    r = 0,
    g = 0,
    b = 0;

  const i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      (r = v), (g = t), (b = p);
      break;
    case 1:
      (r = q), (g = v), (b = p);
      break;
    case 2:
      (r = p), (g = v), (b = t);
      break;
    case 3:
      (r = p), (g = q), (b = v);
      break;
    case 4:
      (r = t), (g = p), (b = v);
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
  }
  const rgb = {
    r: Math.round(r * 255) as RGB["r"],
    g: Math.round(g * 255) as RGB["g"],
    b: Math.round(b * 255) as RGB["b"],
  };

  if ((hsv as HSVA).a !== undefined) {
    return {
      ...rgb,
      a: (hsv as HSVA).a,
    };
  }
  return rgb;
};

export const hsvToHsl = (hsv: HSV | HSVA): HSL | HSLA => {
  const { h, s, v } = hsv;

  let sat = s as number;

  const l = ((2 - s) * v) / 2;

  if (l != 0) {
    if (l == 1) {
      sat = 0;
    } else if (l < 0.5) {
      sat = (s * v) / (l * 2);
    } else {
      sat = (s * v) / (2 - l * 2);
    }
  }
  const hsl = {
    h: h as HSL["h"],
    s: sat as HSL["s"],
    l: l as HSL["l"],
  };

  if ((hsv as HSVA).a !== undefined) {
    return {
      ...hsl,
      a: (hsv as HSVA).a,
    };
  }

  return hsl;
};

export const hexToHsv = (src: HEX): HSV | HSVA => rgbToHsv(hexToRgb(src));
export const hslToHsv = (src: HSL): HSV | HSVA => rgbToHsv(hslToRgb(src));
export const cmykToHsv = (src: CMYK): HSV | HSVA => rgbToHsv(cmykToRgb(src));

export const hsvToCmyk = (src: HSV | HSVA): CMYK => rgbToCmyk(hsvToRgb(src));
export const hexToCmyk = (src: HEX): CMYK => rgbToCmyk(hexToRgb(src));
export const hslToCmyk = (src: HSL | HSLA): CMYK => rgbToCmyk(hslToRgb(src));

export const hsvToHex = (src: HSV | HSVA): HEX => rgbToHex(hsvToRgb(src));
export const hslToHex = (src: HSL | HSLA): HEX => rgbToHex(hslToRgb(src));
export const cmykToHex = (src: CMYK): HEX => rgbToHex(cmykToRgb(src));

export const cmykToHsl = (src: CMYK): HSL => rgbToHsl(cmykToRgb(src));
