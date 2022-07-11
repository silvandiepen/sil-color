/*
 * HEX
 */

export type HEX = string;

/*
 * RGB
 */

export interface RGB {
  r: number;
  g: number;
  b: number;
}
export interface RGBA extends RGB {
  a: number;
}

export function instanceOfRGBA(object: any): object is RGBA {
  return "a" in object;
}

/*
 * HSL
 */

export interface HSL {
  h: number;
  s: number;
  l: number;
}
export interface HSLA extends HSL {
  a: number;
}
export function instanceOfHSLA(object: any): object is HSLA {
  return "a" in object;
}
