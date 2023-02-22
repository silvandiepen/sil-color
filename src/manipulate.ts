import { getBrightness } from "./brightness";
import { minmax } from "./helpers";
import { isRGB, isHex, isHSL, isRGBA, isHSLA } from "./is";
import { toHSL, toRGB, toType } from "./to";
import type { HEX, HSL, HSV, RGB, COLOR, HSLA, RGBA } from "./types";
import { ColorType } from "./types";

export const getType = (value: any): ColorType => {
  if (isRGB(value)) return ColorType.RGB;
  if (isHex(value)) return ColorType.HEX;
  if (isHSL(value)) return ColorType.HSL;
  if (isRGBA(value)) return ColorType.RGBA;
  if (isHSLA(value)) return ColorType.HSLA;
  return ColorType.UNKNOWN;
};

export const setLightness = (value: COLOR, lightness: HSL["l"]): COLOR => {
  const { h, s } = toHSL(value);
  const type = getType(value);

  const hsl: HSL = {
    h: h,
    s: s,
    l: minmax(lightness, 0, 100) as HSL["l"],
  };

  return toType(hsl, type);
};

export const setSaturation = (value: COLOR, saturation: HSL["s"]): COLOR => {
  const { h, l } = toHSL(value);
  const type = getType(value);

  const hsl: HSL = {
    h: h,
    s: minmax(saturation, 0, 100) as HSL["s"],
    l: l,
  };

  return toType(hsl, type);
};

export const setOpacity = (value: COLOR, alpha: HSLA["a"]): COLOR => {
  let type = getType(value);
  let color: COLOR = { ...toRGB(value), a: alpha };

  switch (type) {
    case ColorType.CMYK:
    case ColorType.HEX:
    case ColorType.RGB:
      type = ColorType.RGBA;
      break;
    case ColorType.HSL:
      color = { ...(value as HSL), a: alpha };
      type = ColorType.HSLA;
      break;
    case ColorType.HSV:
      color = { ...(value as HSV), a: alpha };
      type = ColorType.HSVA;
      break;
  }

  return toType(color, type);
};

export const lighten = (value: COLOR, amount: number): COLOR => {
  const { l } = toHSL(value);
  const type = getType(value);

  const color = setLightness(value, (l * amount) as HSL["l"]);
  return toType(color, type);
};

export const darken = (value: RGB | HSL | HEX, amount: number): COLOR => {
  const { l } = toHSL(value);
  const type = getType(value);

  const color = setLightness(value, (l / amount) as HSL["l"]);
  return toType(color, type);
};

export const mix = (from: RGB, to: RGB, amount: number): COLOR => {
  const type = getType(from);

  const fromRgb = toRGB(from);
  const endRgb = toRGB(to);

  const delta = {
    r: ((endRgb.r - fromRgb.r) / 100) * amount,
    g: ((endRgb.g - fromRgb.g) / 100) * amount,
    b: ((endRgb.b - fromRgb.b) / 100) * amount,
  };

  const result: RGB = {
    r: Math.round(fromRgb.r + delta.r) as RGB["r"],
    g: Math.round(fromRgb.g + delta.g) as RGB["g"],
    b: Math.round(fromRgb.b + delta.b) as RGB["b"],
  };

  return toType(result, type);
};

export const altDarken = (value: RGB | HSL | HEX, amount: number): COLOR => {
  const { l, s } = toHSL(value);
  const type = getType(value);

  const color = setSaturation(
    setLightness(value, (l / amount) as HSL["l"]),
    (s / amount) as HSL["s"]
  );
  return toType(color, type);
};

export const textColor = (
  value: COLOR,
  args: { dark: COLOR; light: COLOR; offset: number } = {
    dark: "#000000",
    light: "#ffffff",
    offset: 50,
  }
) => {
  return getBrightness(value) > args.offset ? args.dark : args.light;
};
