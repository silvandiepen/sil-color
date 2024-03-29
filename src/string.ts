import { getType } from "./manipulate";
import {
  HSL,
  HSLA,
  RGB,
  RGBA,
  instanceOfRGBA,
  instanceOfHSLA,
  instanceOfHSVA,
  ColorType,
  COLOR,
  HEX,
  HSVA,
  HSV,
} from "./types";

export const toHslString = (value: HSL | HSLA): string => {
  const v: HSLA = value as HSLA;
  return instanceOfHSLA(v)
    ? `hsla(${v.h}deg, ${v.s}%, ${v.l}%, ${v.a})`
    : `hsl(${v["h"]}deg, ${v["s"]}%, ${v["l"]}%)`;
};
export const toHsvString = (value: HSV | HSVA): string => {
  const v: HSVA = value as HSVA;
  return instanceOfHSVA(v)
    ? `hsva(${v.h}deg, ${v.s}%, ${v.v}%, ${v.a})`
    : `hsv(${v["h"]}deg, ${v["s"]}%, ${v["l"]}%)`;
};


export const toRgbString = (value: RGB | RGBA): string => {
  const v: RGBA = value as RGBA;
  return instanceOfRGBA(v)
    ? `rgba(${v.r}, ${v.g}, ${v.b}, ${v.a})`
    : `rgb(${v["r"]}, ${v["g"]}, ${v["b"]})`;
};

export const toHexString = (value: HEX): string => {
  return `${value}`;
};

export const toString = (value: COLOR): string => {
  const type = getType(value);
  switch (type) {
    case ColorType.RGB:
    case ColorType.RGBA:
      return toRgbString(value as RGBA);
    case ColorType.HSL:
    case ColorType.HSLA:
      return toHslString(value as HSLA);
    case ColorType.HSV:
    case ColorType.HSVA:
      return toHsvString(value as HSVA);
    case ColorType.HEX:
      return toHexString(value as HEX);
    default:
      return value.toString();
  }
};
