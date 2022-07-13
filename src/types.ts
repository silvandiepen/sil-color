type NumberRange<T extends number> = number extends T ? number : _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R["length"] extends T
  ? R[number]
  : _Range<T, [R["length"], ...R]>;

type Base16Number = NumberRange<256>;
type BinaryNumber = number; // TODO: Make this a FLOAT number between 0 and 1. 
type PercentageNumber = NumberRange<101>;
type GradientNumber = NumberRange<361>;

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

export enum ColorType {
  RGB = "rgb",
  RGBA = "rgba",
  HSL = "hsl",
  HSLA = "hsla",
  HEX = "hex",
  UNKNOWN = "unknown",
}

export type COLOR = RGB | RGBA | HSL | HSLA | HEX;

export interface MinMax {
  r: BinaryNumber,
  g: BinaryNumber,
  b: BinaryNumber,
  min: BinaryNumber,
  max: BinaryNumber
}