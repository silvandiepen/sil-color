import { hexToHsl, hexToRgb, hslToRgb } from "./convert";
import { toRGB } from "./to";
import { getType } from "./manipulate";
import { COLOR, ColorType, HSL, HSLA, RGB, RGBA, HEX, MinMax } from "./types";

export const getMinMaxRgb = (rgb: RGB): MinMax => {
  let { r, g, b } = rgb;
  (r /= 255), (g /= 255), (b /= 255);

  return {
    min: Math.round(Math.min(...[r, g, b]) * 100) / 100,
    max: Math.round(Math.max(...[r, g, b]) * 100) / 100,
    r: Math.round(r * 100) / 100,
    g: Math.round(g * 100) / 100,
    b: Math.round(b * 100) / 100,
  };
};

export const getSaturationFromRgb = (rgb: RGB): number => {
  //   const { s } = toHSL(rgb);
  const { min, max } = getMinMaxRgb(rgb);

  if (min == max) return 0;
  const d = max - min;
  const l = getLightnessFromRgb(rgb);
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

  return Math.round(s * 100);
};

export const getLightnessFromRgb = (rgb: RGB): number => {
  const { min, max } = getMinMaxRgb(rgb);
  const l = (max + min) / 2;

  return Math.round(l * 100);
};

export const getHueFromRgb = (rgb: RGB): number => {
  const { min, max, r, g, b } = getMinMaxRgb(rgb);

  if (min == max) return 0;

  let h = 0;
  const d = max - min;

  switch (max) {
    case r:
      h = (g - b) / d + (g < b ? 6 : 0);
      break;
    case g:
      h = (b - r) / d + 2;
      break;
    case b:
      h = (r - g) / d + 4;
      break;
  }

  h /= 6;

  // const { h } = toHSL(rgb);
  return Math.round(360 * h);
};

export const componentToHex = (c: number) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};
export const hueToRgb = (p: number, q: number, t: number): number => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
};

/*
  Get
*/

export const getLightness = (value: COLOR): number => {
  switch (getType(value)) {
    case ColorType.RGB:
      return getLightnessFromRgb(value as RGB);
    case ColorType.RGBA:
      const rgba = value as RGBA;
      return getLightnessFromRgb({ r: rgba.r, g: rgba.g, b: rgba.b } as RGB);
    case ColorType.HSL:
      return (value as HSL).l;
    case ColorType.HSLA:
      return (value as HSLA).l;
    case ColorType.HEX:
      return hexToHsl(value as HEX).l;
    default:
      console.warn(`${getType(value)} is not supported yet by getLightness`);
      return 0;
  }
};
export const getHue = (value: COLOR): number => {
  switch (getType(value)) {
    case ColorType.RGB:
      return getHueFromRgb(value as RGB);
    case ColorType.RGBA:
      const rgba = value as RGBA;
      return getHueFromRgb({ r: rgba.r, g: rgba.g, b: rgba.b } as RGB);
    case ColorType.HSL:
      return (value as HSL).h;
    case ColorType.HSLA:
      return (value as HSLA).h;
    case ColorType.HEX:
      return hexToHsl(value as HEX).h;
    default:
      console.warn(`${getType(value)} is not supported yet by getHue`);
      return 0;
  }
};
export const getSaturation = (value: COLOR): number => {
  switch (getType(value)) {
    case ColorType.RGB:
      return getSaturationFromRgb(value as RGB);
    case ColorType.RGBA:
      const rgba = value as RGBA;
      return getSaturationFromRgb({ r: rgba.r, g: rgba.g, b: rgba.b } as RGB);
    case ColorType.HSL:
      return (value as HSL).s;
    case ColorType.HSLA:
      return (value as HSLA).s;
    case ColorType.HEX:
      return hexToHsl(value as HEX).s;
    default:
      console.warn(`${getType(value)} is not supported yet by getSaturation`);
      return 0;
  }
};
export const getOpacity = (value: COLOR): number => {
  switch (getType(value)) {
    case ColorType.RGB:
    case ColorType.HSL:
    case ColorType.HEX:
      return 1;
    case ColorType.RGBA:
      return (value as RGBA).a;
    case ColorType.HSLA:
      return (value as HSLA).a;
    default:
      console.warn(`${getType(value)} is not supported yet by getOpacity`);
      return 0;
  }
};

export const getRed = (value: COLOR): number => {
  switch (getType(value)) {
    case ColorType.RGB:
    case ColorType.RGBA:
      return (value as RGB).r;
    case ColorType.HSL:
    case ColorType.HSLA:
      return hslToRgb(value as HSL).r;
    case ColorType.HEX:
      return hexToRgb(value as HEX).r;
    default:
      console.warn(`${getType(value)} is not supported yet by getRed`);
      return 0;
  }
};
export const getGreen = (value: COLOR): number => {
  switch (getType(value)) {
    case ColorType.RGB:
    case ColorType.RGBA:
      return (value as RGB).g;
    case ColorType.HSL:
    case ColorType.HSLA:
      return hslToRgb(value as HSL).g;
    case ColorType.HEX:
      return hexToRgb(value as HEX).g;
    default:
      console.warn(`${getType(value)} is not supported yet by getRed`);
      return 0;
  }
};
export const getBlue = (value: COLOR): number => {
  switch (getType(value)) {
    case ColorType.RGB:
    case ColorType.RGBA:
      return (value as RGB).b;
    case ColorType.HSL:
    case ColorType.HSLA:
      return hslToRgb(value as HSL).b;
    case ColorType.HEX:
      return hexToRgb(value as HEX).b;
    default:
      console.warn(`${getType(value)} is not supported yet by getRed`);
      return 0;
  }
};

// // http://alienryderflex.com/hsp.html
// export const getBrightness = (value: COLOR, round = 100): number => {
//   const { r, g, b } = toRGB(value);

//   const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

//   return Math.round(((hsp / 255) * 100) * round) / round;
// };



export const getTrueLightnessFromRgb = (rgb: RGB): number => {
  let { r, g, b } = rgb;

  // Normalize to range 0-1
  r /= 255;
  g /= 255;
  b /= 255;

  // Apply luminance weights
  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  return Math.round(L * 100); // Scale to 0-100%
};

export const getTrueLightness = (value: COLOR): number => {
  switch (getType(value)) {
    case ColorType.RGB:
      return getTrueLightnessFromRgb(value as RGB);
    case ColorType.RGBA:
      return getTrueLightnessFromRgb({ r: (value as RGBA).r, g: (value as RGBA).g, b: (value as RGBA).b });
    case ColorType.HSL:
    case ColorType.HSLA:
      return getTrueLightnessFromRgb(hslToRgb(value as HSL));
    case ColorType.HEX:
      return getTrueLightnessFromRgb(hexToRgb(value as HEX));
    default:
      console.warn(`${getType(value)} is not supported yet by getTrueLightness`);
      return 0;
  }
};
