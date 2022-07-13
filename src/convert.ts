import { getHue, getLightness, getSaturation, componentToHex } from "./get";
import { HSL, RGB, HEX, CMYK } from "./types";

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

  // let c = 255 - rgb.r;
  // let m = 255 - rgb.g;
  // let y = 255 - rgb.b;
  // let k = Math.min(c, m, y);
  // c = (c - k) / 255 - k;
  // m = (m - k) / 255 - k;
  // y = (y - k) / 255 - k;

  return {
    c: c as CMYK["c"],
    m: m as CMYK["m"],
    y: y as CMYK["y"],
    k: k as CMYK["k"],
  };
};

export const CmykToRgb = (cmyk: CMYK): RGB => {


const  k = cmyk.k / 100;

const c = (cmyk.c / 100)* (1 - k) + k;
const m = (cmyk.m / 100)* (1 - k) + k;
const y = (cmyk.y / 100)* (1 - k) + k;



  const r = Math.round(255 * (1 - c));
  const g = Math.round(255 * (1 - m));
  const b = Math.round(255 * (1 - y));

  return { r: r as RGB["r"], g: g as RGB["g"], b: b as RGB["b"] };
};

// export const hslToCmyk =
