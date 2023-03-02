import { areBetween, getNumbers, isBetween, shift } from "./helpers";
import { toHslString, toRgbString } from "./string";
import {
  instanceOfHSL,
  instanceOfHSLA,
  instanceOfRGB,
  instanceOfRGBA,
  instanceOfCMYK,
  RGB,
} from "./types";

export const isHex = (value: string): boolean => {
  if (typeof value !== "string") return false;

  const reg = /^#([0-9a-f]{3}){1,2}$/i;
  return reg.test(value);
};

export const isRGB = (value: string | any | RGB): boolean => {
  if (typeof value !== "string" && instanceOfRGB(value)) return true;
  if (typeof value !== "string") return false;

  const rgbNumbers: number[] = [];
  value
    .replace(/[^\d,]/g, "")
    .split(",")
    .forEach((v) => rgbNumbers.push(parseInt(v)));

  return (
    value.startsWith("rgb(") &&
    value.endsWith(")") &&
    rgbNumbers.length == 3 &&
    !rgbNumbers.some((n) => n > 255 || n < 0) &&
    !rgbNumbers.some((n) => Math.round(n) !== n)
  );
};
export const isRGBA = (value: string | any): boolean => {
  if (typeof value !== "string" && instanceOfRGBA(value)) return true;
  if (typeof value !== "string") return false;

  const rgbNumbers = getNumbers(value);

  return (
    value.startsWith("rgba(") &&
    value.endsWith(")") &&
    rgbNumbers.length == 4 &&
    !rgbNumbers.some((n) => n > 255 || n < 0) &&
    !rgbNumbers.some((n) => Math.round(n) !== n)
  );
};

export const isHSL = (value: string): boolean => {
  if (typeof value !== "string" && instanceOfHSL(value)) return true;
  if (typeof value !== "string") return false;

  const hslNumbers = getNumbers(value);

  return (
    value.startsWith("hsl(") &&
    value.endsWith(")") &&
    hslNumbers.length == 3 &&
    isBetween(hslNumbers[1], 0, 360) &&
    areBetween(shift(hslNumbers), 0, 100) &&
    !hslNumbers.some((n) => Math.round(n) !== n)
  );
};

export const isHSLA = (value: string): boolean => {
  if (typeof value !== "string" && instanceOfHSLA(value)) return true;
  if (typeof value !== "string") return false;

  const hslNumbers = getNumbers(value);

  return (
    value.startsWith("hsla(") &&
    value.endsWith(")") &&
    hslNumbers.length == 4 &&
    isBetween(hslNumbers[1], 0, 360) &&
    areBetween(shift(hslNumbers), 0, 100) &&
    !hslNumbers.some((n) => Math.round(n) !== n)
  );
};
export const isHSV = (value: string): boolean => {
  if (typeof value !== "string" && instanceOfHSL(value)) return true;
  if (typeof value !== "string") return false;

  const hslNumbers = getNumbers(value);

  return (
    value.startsWith("hsv(") &&
    value.endsWith(")") &&
    hslNumbers.length == 3 &&
    isBetween(hslNumbers[1], 0, 360) &&
    areBetween(shift(hslNumbers), 0, 100) &&
    !hslNumbers.some((n) => Math.round(n) !== n)
  );
};

export const isHSVA = (value: string): boolean => {
  if (typeof value !== "string" && instanceOfHSLA(value)) return true;
  if (typeof value !== "string") return false;

  const hslNumbers = getNumbers(value);

  return (
    value.startsWith("hsva(") &&
    value.endsWith(")") &&
    hslNumbers.length == 4 &&
    isBetween(hslNumbers[1], 0, 360) &&
    areBetween(shift(hslNumbers), 0, 100) &&
    !hslNumbers.some((n) => Math.round(n) !== n)
  );
};

export const isCMYK = (value: string): boolean => {
  if (typeof value !== "string" && instanceOfCMYK(value)) return true;
  if (typeof value !== "string") return false;

  const cmykNumbers = getNumbers(value);

  return (
    value.startsWith("cmyk(") &&
    value.endsWith(")") &&
    cmykNumbers.length == 4 &&
    !cmykNumbers.some((n) => n > 100 || n < 0) &&
    !cmykNumbers.some((n) => Math.round(n) !== n)
  );
};

export const isCOLOR = (value: any): boolean => {
  return (
    isHex(value) ||
    isHSL(value) ||
    isHSLA(value) ||
    isRGB(value) ||
    isRGBA(value) ||
    isHSV(value) ||
    isHSVA(value)
  );
};
