// Helper type to create a range of numbers from `From` to `To`
type _RangeFromTo<From extends number, To extends number, R extends unknown[]> =
  R["length"] extends To
    ? From | R[number]
    : _RangeFromTo<From, To, [R["length"], ...R]>;

// Type for creating a range from `From` to `To`
type NumberRange<From extends number, To extends number> =
  From extends To
    ? From
    : _RangeFromTo<From, To, []>;



export type Base16Number = NumberRange<0,256>;
export type BinaryNumber = number; // TODO: Make this a FLOAT number between 0 and 1.
export type PercentageNumber = NumberRange<0,101>;
export type GradientNumber = NumberRange<0,361>;
export type SignedByte = NumberRange<-128, 127>; // -128 to 127




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
export interface LAB {
  l: PercentageNumber;
  a: SignedByte;
  b: SignedByte
}

export function instanceOfLAB(obj: any): obj is LAB {
  return (
    "l" in obj &&
    "a" in obj &&
    "b" in obj &&
    Object.keys(obj).length == 3
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

