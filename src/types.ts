type NumberRange<T extends number> = number extends T ? number : _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R["length"] extends T
  ? R[number]
  : _Range<T, [R["length"], ...R]>;

export type Base16Number = NumberRange<256>;
export type BinaryNumber = number; // TODO: Make this a FLOAT number between 0 and 1.
export type PercentageNumber = NumberRange<101>;
export type GradientNumber = NumberRange<361>;

/*
 * HEX
 */

export type HEX = string;

/*
 * RGB
 */

export interface RGB {
  r: Base16Number;
  g: Base16Number;
  b: Base16Number;
}
export interface RGBA extends RGB {
  a: BinaryNumber;
}

export function instanceOfRGB(obj: any): obj is RGB {
  return (
    "r" in obj &&
    "g" in obj &&
    "b" in obj &&
    !("a" in obj) &&
    Object.keys(obj).length == 3
  );
}
export function instanceOfRGBA(obj: any): obj is RGB {
  return (
    "r" in obj &&
    "g" in obj &&
    "b" in obj &&
    "a" in obj &&
    Object.keys(obj).length == 4
  );
}

/*
 * HSL
 */

export interface HSL {
  h: GradientNumber;
  s: PercentageNumber;
  l: PercentageNumber;
}
export interface HSLA extends HSL {
  a: BinaryNumber;
}

export function instanceOfHSL(obj: any): obj is HSL {
  return (
    "h" in obj &&
    "s" in obj &&
    "l" in obj &&
    !("a" in obj) &&
    Object.keys(obj).length == 3
  );
}
export function instanceOfHSLA(obj: any): obj is HSLA {
  return (
    "h" in obj &&
    "s" in obj &&
    "l" in obj &&
    "a" in obj &&
    Object.keys(obj).length == 4
  );
}

/*
 * HSV
 */

export interface HSV {
  h: GradientNumber;
  s: PercentageNumber;
  v: PercentageNumber;
}
export interface HSVA extends HSV {
  a: BinaryNumber;
}

export function instanceOfHSV(obj: any): obj is HSV {
  return (
    "h" in obj &&
    "s" in obj &&
    "v" in obj &&
    !("a" in obj) &&
    Object.keys(obj).length == 3
  );
}
export function instanceOfHSVA(obj: any): obj is HSVA {
  return (
    "h" in obj &&
    "s" in obj &&
    "v" in obj &&
    "a" in obj &&
    Object.keys(obj).length == 4
  );
}

/*
 * CMYK
 */

export interface CMYK {
  c: PercentageNumber;
  m: PercentageNumber;
  y: PercentageNumber;
  k: PercentageNumber;
}

export function instanceOfCMYK(obj: any): obj is CMYK {
  return (
    "c" in obj &&
    "m" in obj &&
    "y" in obj &&
    "k" in obj &&
    Object.keys(obj).length == 4
  );
}

/*
 * MISC
 */

export const ColorType = {
  RGB: "rgb",
  RGBA: "rgba",
  HSL: "hsl",
  HSLA: "hsla",
  HEX: "hex",
  HSV: "hsv",
  HSVA: "hsva",
  CMYK: "cmyk",
  UNKNOWN: "unknown",
}
export type ColorType = typeof ColorType[keyof typeof ColorType];

export type COLOR = RGB | RGBA | HSL | HSLA | HEX | HSV | HSVA | CMYK;

export interface MinMax {
  r: BinaryNumber;
  g: BinaryNumber;
  b: BinaryNumber;
  min: BinaryNumber;
  max: BinaryNumber;
}
