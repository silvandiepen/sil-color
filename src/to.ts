import {
  COLOR,
  HSL,
  HSLA,
  RGB,
  RGBA,
  HEX,
  CMYK,
  HSV,
  HSVA,
  ColorType,
} from "./types";
import { isHex, isRGB, isHSL, isCMYK, isHSV } from "./is";
import {
  instanceOfCMYK,
  instanceOfRGB,
  instanceOfRGBA,
  instanceOfHSL,
  instanceOfHSLA,
  instanceOfHSV,
  instanceOfHSVA,
} from "./types";
import {
  hexToCmyk,
  hexToHsl,
  hexToHsv,
  hexToRgb,
  rgbToCmyk,
  rgbToHex,
  rgbToHsl,
  rgbToHsv,
  cmykToRgb,
  cmykToHex,
  cmykToHsl,
  cmykToHsv,
  hslToHex,
  hslToRgb,
  hslToCmyk,
  hslToHsv,
  hsvToHex,
  hsvToRgb,
  hsvToCmyk,
  hsvToHsl,
} from "./convert";
import { toRgbObject, toCmykObject, toHslObject, toHsvObject } from "./object";
import { defaultValues } from "./convert";

export const toHex = (color: COLOR): HEX => {
  if (typeof color == "string") {
    if (isHex(color as string)) return color as HEX;
    if (isRGB(color as string)) return rgbToHex(toRgbObject(color));
    if (isHSL(color as string)) return hslToHex(toHslObject(color));
    if (isHSV(color as string)) return hsvToHex(toHsvObject(color));
    if (isCMYK(color as string)) return cmykToHex(toCmykObject(color));
  } else if (instanceOfRGB(color) || instanceOfRGBA(color)) {
    return rgbToHex(color);
  } else if (instanceOfHSL(color) || instanceOfHSLA(color)) {
    return hslToHex(color);
  } else if (instanceOfHSV(color) || instanceOfHSVA(color)) {
    return hsvToHex(color);
  } else if (instanceOfCMYK(color)) {
    return cmykToHex(color);
  }
  return defaultValues.hex;
};

export const toHSL = (color: COLOR): HSL | HSLA => {
  if (typeof color == "string") {
    if (isHex(color as string)) return hexToHsl(color);
    if (isRGB(color as string)) return rgbToHsl(toRgbObject(color));
    if (isHSL(color as string)) return toHslObject(color);
    if (isHSV(color as string)) return hsvToHsl(toHsvObject(color));
    if (isCMYK(color as string)) return cmykToHsl(toCmykObject(color));
  } else if (instanceOfRGB(color) || instanceOfRGBA(color)) {
    return rgbToHsl(color);
  } else if (instanceOfHSL(color) || instanceOfHSLA(color)) {
    return color;
  } else if (instanceOfHSV(color) || instanceOfHSVA(color)) {
    return hsvToHsl(color);
  } else if (instanceOfCMYK(color)) {
    return cmykToHsl(color);
  }
  return defaultValues.hsl;
};

export const toHSV = (color: COLOR): HSV | HSVA => {
  if (typeof color == "string") {
    if (isHex(color as string)) return hexToHsv(color);
    if (isRGB(color as string)) return rgbToHsv(toRgbObject(color));
    if (isHSL(color as string)) return hslToHsv(toHslObject(color));
    if (isHSV(color as string)) return toHsvObject(color);
    if (isCMYK(color as string)) return cmykToHsv(toCmykObject(color));
  } else if (instanceOfRGB(color) || instanceOfRGBA(color)) {
    return rgbToHsv(color);
  } else if (instanceOfHSL(color) || instanceOfHSLA(color)) {
    return hslToHsv(color);
  } else if (instanceOfCMYK(color)) {
    return cmykToHsv(color);
  }
  return defaultValues.hsv;
};

export const toRGB = (color: COLOR): RGB | RGBA => {
  if (typeof color == "string") {
    if (isHex(color as string)) return hexToRgb(color);
    if (isRGB(color as string)) return toRgbObject(color);
    if (isHSL(color as string)) return hslToRgb(toHslObject(color));
    if (isCMYK(color as string)) return cmykToRgb(toCmykObject(color));
  } else if (instanceOfRGB(color) || instanceOfRGBA(color)) {
    return color;
  } else if (instanceOfHSL(color) || instanceOfHSLA(color)) {
    return hslToRgb(color);
  } else if (instanceOfHSV(color) || instanceOfHSVA(color)) {
    return hsvToRgb(color);
  } else if (instanceOfCMYK(color)) {
    return cmykToRgb(color);
  }
  return defaultValues.rgb;
};

export const toCMYK = (color: COLOR): CMYK => {
  if (typeof color == "string") {
    if (isHex(color as string)) return hexToCmyk(color);
    if (isRGB(color as string)) return rgbToCmyk(toRgbObject(color));
    if (isHSL(color as string)) return hslToCmyk(toHslObject(color));
    if (isHSV(color as string)) return hsvToCmyk(toHsvObject(color));
    if (isCMYK(color as string)) return toCmykObject(color);
  } else if (instanceOfRGB(color) || instanceOfRGBA(color)) {
    return rgbToCmyk(color);
  } else if (instanceOfHSL(color) || instanceOfHSLA(color)) {
    return hslToCmyk(color);
  } else if (instanceOfHSV(color) || instanceOfHSVA(color)) {
    return hsvToCmyk(color);
  } else if (instanceOfCMYK(color)) {
    return color;
  }
  return defaultValues.cmyk;
};

export const toType = (color: COLOR, type: ColorType) => {
  switch (type) {
    case ColorType.HEX:
      return toHex(color);
    case ColorType.RGB:
    case ColorType.RGBA:
      return toHSL(color);

    case ColorType.HSL:
    case ColorType.HSLA:
      return toHSL(color);
    case ColorType.HSV:
    case ColorType.HSVA:
      return toHSV(color);
    case ColorType.CMYK:
      return toCMYK(color);
    default:
      return toHex(color);
  }
};
