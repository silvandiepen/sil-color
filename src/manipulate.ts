import { hexToHsl, hexToRgb, hslToHex, hslToRgb, rgbToHsl } from "./convert";
import { isRGB, isHex, isHSL, isRGBA, isHSLA } from "./is";
import { HEX, HSL, RGB, ColorType, COLOR, HSLA, RGBA } from "./types";

export const getType = (value: any): ColorType => {
  if (isRGB(value)) return ColorType.RGB;
  if (isHex(value)) return ColorType.HEX;
  if (isHSL(value)) return ColorType.HSL;
  if (isRGBA(value)) return ColorType.RGBA;
  if (isHSLA(value)) return ColorType.HSLA;
  return ColorType.UNKNOWN;
};

export const makeItHsl = (value: COLOR): HSL => {
  switch (getType(value)) {
    case ColorType.RGB:
      return rgbToHsl(value as RGB);
    case ColorType.HSL:
      return value as HSL;
    case ColorType.HEX:
      return hexToHsl(value as HEX);
    default:
      return { h: 0, s: 0, l: 0 };
  }
};

export const setLightness = (value: RGB | HSL | HEX, lightness: HSL["l"]) => {
  const { h, s } = makeItHsl(value);

  const type = getType(value);

  const hsl: HSL = {
    h: h,
    s: s,
    l: lightness,
  };

  switch (type) {
    case ColorType.RGB:
      return hslToRgb(hsl);
    case ColorType.HSL:
      return hsl;
    case ColorType.HEX:
      return hslToHex(hsl);
    default:
      return hsl;
  }
};

export const setOpacity = (value: COLOR, opacity: HSLA["a"]): COLOR => {
  const type = getType(value);

  switch (type) {
    case ColorType.RGB:
    case ColorType.RGBA:
      const rgb = value as RGBA;
      return { r: rgb.r, g: rgb.g, b: rgb.b, a: opacity };

    case ColorType.HSL:
    case ColorType.HSLA:
      const hsl = value as HSLA;
      return { h: hsl.h, s: hsl.s, l: hsl.l, a: opacity };

    case ColorType.HEX:
      const hexRgba = hexToRgb(value as HEX);
      return { r: hexRgba.r, g: hexRgba.g, b: hexRgba.b, a: opacity };

    default:
      console.warn(`${getType(value)} is not supported yet by setOpacity`);
      return { h: 0, s: 0, l: 0 };
  }
};

export const lighten = (value: RGB | HSL | HEX, amount: number): COLOR => {
  const { l } = makeItHsl(value);
  return setLightness(value, (l * amount) as HSL["l"]);
};
export const darken = (value: RGB | HSL | HEX, amount: number): COLOR => {
  const { l } = makeItHsl(value);
  return setLightness(value, (l / amount) as HSL["l"]);
};
