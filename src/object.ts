<<<<<<< HEAD
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

=======
import { defaultValues } from "./convert";
import { isCMYK, isHSL, isHSLA, isRGB, isRGBA } from "./is";
import type { CMYK, RGB, RGBA, HSL, HSLA, HSV, HSVA } from "./types";
import { getNumbers } from "./helpers";

export const toHslObject = (input: string): HSL | HSLA => {
  if (!isHSL(input) && !isHSLA(input)) return defaultValues.hsl;

  const values = getNumbers(input);

  let alpha = values[3] || null;
  return alpha
    ? ({
        h: values[0],
        s: values[1],
        l: values[2],
        a: alpha,
      } as HSLA)
    : ({
        h: values[0],
        s: values[1],
        l: values[2],
      } as HSL);
};
export const toHsvObject = (input: string): HSV | HSVA => {
  if (!isHSL(input) && !isHSLA(input)) return defaultValues.hsv;

  const values = getNumbers(input);

  let alpha = values[3] || null;
  return alpha
    ? ({
        h: values[0],
        s: values[1],
        v: values[2],
        a: alpha,
      } as HSVA)
    : ({
        h: values[0],
        s: values[1],
        v: values[2],
      } as HSV);
};

export const toRgbObject = (input: string): RGB | RGBA => {
  if (!isRGB(input) && !isRGBA(input)) return defaultValues.rgb;

  const values = getNumbers(input);

  let alpha = values[3] || null;
  return alpha
    ? ({
        r: values[0],
        g: values[1],
        b: values[2],
        a: alpha,
      } as RGBA)
    : ({
        r: values[0],
        g: values[1],
        b: values[2],
      } as RGB);
};

export const toCmykObject = (input: string): CMYK => {
  if (!isCMYK(input)) return defaultValues.cmyk;

  const values = getNumbers(input);

  return {
    c: values[0],
    m: values[1],
    y: values[2],
    k: values[3],
  } as CMYK;
};
>>>>>>> b7e2ac2a307f6f3d0a99208b903ed918ddada947
