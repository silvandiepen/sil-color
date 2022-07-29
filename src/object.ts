import {
  RGB,
  HSL,
  HSLA,
  RGBA,
  CMYK,
  instanceOfCMYK,
  instanceOfRGB,
  instanceOfRGBA,
  instanceOfHSL,
  instanceOfHSLA,
} from "./types";
// export const hslToCmyk =

export const toRgbObject = (value: string | RGB | RGBA): RGB => {
  if (typeof value !== "string" && instanceOfRGB(value)) return value;
  if (typeof value !== "string" && instanceOfRGBA(value)) {
    const rgb = value as RGB;
    return { r: rgb.r, g: rgb.b, b: rgb.b };
  } else {
    const rgb = value.replace(/[^\d,]/g, "").split(",");
    return {
      r: parseInt(rgb[0]) as RGB["r"],
      g: parseInt(rgb[1]) as RGB["g"],
      b: parseInt(rgb[2]) as RGB["b"],
    };
  }
};
export const toHslObject = (value: string | HSL | HSLA): HSL => {
  if (typeof value !== "string" && instanceOfHSL(value)) return value;
  if (typeof value !== "string" && instanceOfHSLA(value)) {
    const hsl = value as HSLA;
    return { h: hsl.h, s: hsl.s, l: hsl.l };
  } else {
    const hsl = value.replace(/[^\d,]/g, "").split(",");
    return {
      h: parseInt(hsl[0]) as HSL["h"],
      s: parseInt(hsl[1]) as HSL["s"],
      l: parseInt(hsl[2]) as HSL["l"],
    };
  }
};
export const toCmykObject = (value: string | CMYK): CMYK => {
  if (typeof value !== "string" && instanceOfCMYK(value)) return value;
  else {
    const cmyk = value.replace(/[^\d,]/g, "").split(",");
    return {
      c: parseInt(cmyk[0]) as CMYK["c"],
      m: parseInt(cmyk[1]) as CMYK["m"],
      y: parseInt(cmyk[2]) as CMYK["y"],
      k: parseInt(cmyk[3]) as CMYK["k"],
    };
  }
};

