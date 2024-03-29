import { defaultValues } from "./convert";
import { isCMYK, isHSL, isHSLA, isRGB, isRGBA } from "./is";
import {
  CMYK,
  RGB,
  RGBA,
  HSL,
  HSLA,
  HSV,
  HSVA,
  COLOR,
} from "./types";
import { getNumbers } from "./helpers";
import { toCMYK, toHSL, toHSV, toRGB } from "./to";

export const toHslObject = (input: string | COLOR): HSL | HSLA => {



  if (typeof input !== "string") return toHSL(input);


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
export const toHsvObject = (input: string | COLOR): HSV | HSVA => {

  if (typeof input !== "string") return toHSV(input);

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

export const toRgbObject = (input: string | COLOR): RGB | RGBA => {
  if (typeof input !== "string") return toRGB(input);

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

export const toCmykObject = (input: string | COLOR): CMYK => {
  if (typeof input !== "string") return toCMYK(input);

  if (!isCMYK(input)) return defaultValues.cmyk;

  const values = getNumbers(input);

  return {
    c: values[0],
    m: values[1],
    y: values[2],
    k: values[3],
  } as CMYK;
};
