import type { HSL, HSLA, RGB, RGBA, COLOR, CMYK, HSV, HSVA } from "./types";
import { ColorType } from "./types";
import { toHSL, toRGB, toType, toCMYK, toHSV } from "./to";

const convertToCMYK: { input: COLOR; output: CMYK }[] = [
  {
    input: { h: 0, s: 0, l: 100 },
    output: { c: 0, m: 0, y: 0, k: 0 },
  },
  {
    input: { r: 127, g: 127, b: 127, a: 0.5 },
    output: { c: 0, m: 0, y: 0, k: 50 },
  },
  {
    input: "#ffffff",
    output: { c: 0, m: 0, y: 0, k: 0 },
  },
  {
    input: "#ff0000",
    output: { c: 0, m: 100, y: 100, k: 0 },
  },
];

const convertToRGB: { input: COLOR; output: RGB | RGBA }[] = [
  {
    input: { h: 0, s: 0, l: 0 },
    output: { r: 0, g: 0, b: 0 },
  },
  {
    input: { h: 0, s: 0, l: 0, a: 0.5 },
    output: { r: 0, g: 0, b: 0, a: 0.5 },
  },
  {
    input: "#ffffff",
    output: { r: 255, g: 255, b: 255 },
  },
];
const convertToHSV: { input: COLOR; output: HSV | HSVA }[] = [
  {
    input: { h: 50, s: 50, l: 50 },
    output: { h: 50, s: 66, v: 75 },
  },
  {
    input: { h: 0, s: 0, l: 0, a: 0.5 },
    output: { h: 0, s: 0, v: 0, a: 0.5 },
  },
  {
    input: "#ffffff",
    output: { h: 0, s: 0, v: 100 },
  },
];

const convertToHSL: { input: COLOR; output: HSL | HSLA }[] = [
  {
    input: { r: 0, g: 0, b: 0 },
    output: { h: 0, s: 0, l: 0 },
  },
  {
    input: { r: 0, g: 0, b: 0, a: 0.5 },
    output: { h: 0, s: 0, l: 0, a: 0.5 },
  },
  {
    input: "#ffffff",
    output: { h: 0, s: 0, l: 100 },
  },
];

const convertToType: { input: COLOR; type: ColorType; output: COLOR }[] = [
  {
    input: { r: 0, g: 0, b: 0 },
    type: ColorType.RGB,
    output: { r: 0, g: 0, b: 0 },
  },
  {
    input: { r: 0, g: 0, b: 0, a: 0 },
    type: ColorType.HSL,
    output: { h: 0, s: 0, l: 0, a: 0 },
  },
];

describe("to CMYK", () => {
  convertToCMYK.forEach((value) => {
    it(`should convert to CMYK value - ${JSON.stringify(value.input)}`, () => {
      expect(toCMYK(value.input)).toEqual(value.output);
    });
  });
});

describe("to RGB", () => {
  convertToRGB.forEach((value) => {
    it(`should convert to RGB value - ${JSON.stringify(value.input)}`, () => {
      expect(toRGB(value.input)).toEqual(value.output);
    });
  });
});

describe("to HSV", () => {
  convertToHSV.forEach((value) => {
    it(`should convert to HSV value - ${JSON.stringify(value.input)}`, () => {
      expect(toHSV(value.input)).toEqual(value.output);
    });
  });
});

describe("to HSL", () => {
  convertToHSL.forEach((value) => {
    it(`should convert to HSL value - ${JSON.stringify(value.input)}`, () => {
      expect(toHSL(value.input)).toEqual(value.output);
    });
  });
});

describe("to Requested type", () => {
  convertToType.forEach((value) => {
    it(`should convert to Requested value - ${JSON.stringify(
      value.input
    )}`, () => {
      expect(toType(value.input, value.type)).toEqual(value.output);
    });
  });
});
