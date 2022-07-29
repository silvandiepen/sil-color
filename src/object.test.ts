import { RGB, RGBA, HSL, HSLA, CMYK } from "./types";

import { toRgbObject, toHslObject, toCmykObject } from "./object";

const valuesRGBToRGB: { input: string | RGB | RGBA; output: RGB }[] = [
  { input: "rgb(255, 0, 0)", output: { r: 255, g: 0, b: 0 } },
  { input: { r: 255, g: 0, b: 0 }, output: { r: 255, g: 0, b: 0 } },
  { input: { r: 255, g: 0, b: 0, a: 0 }, output: { r: 255, g: 0, b: 0 } },
];

const valuesHSLToHSL: { input: string | HSL | HSLA; output: HSL }[] = [
  { input: "hsl(0, 100, 0)", output: { h: 0, s: 100, l: 0 } },
  { input: { h: 0, s: 100, l: 0 }, output: { h: 0, s: 100, l: 0 } },
  { input: { h: 0, s: 100, l: 0, a: 0 }, output: { h: 0, s: 100, l: 0 } },
];

const valuesCMYKToCMYK: { input: string | CMYK; output: CMYK }[] = [
  { input: "cmyk(100, 0, 0, 0)", output: { c: 100, m: 0, y: 0, k: 0 } },
  { input: { c: 100, m: 0, y: 0, k: 0 }, output: { c: 100, m: 0, y: 0, k: 0 } },
];

describe("convert RGB to RGB Object", () => {
  valuesRGBToRGB.forEach((value) => {
    it(`Should convert a RGB value to RGB - ${JSON.stringify(
      value.input
    )} → ${JSON.stringify(value.output)}`, () => {
      expect(toRgbObject(value.input)).toEqual(value.output);
    });
  });
});

describe("convert HSL to HSL Object", () => {
  valuesHSLToHSL.forEach((value) => {
    it(`Should convert a RGB value to RGB - ${JSON.stringify(
      value.input
    )} → ${JSON.stringify(value.output)}`, () => {
      expect(toHslObject(value.input)).toEqual(value.output);
    });
  });
});

describe("convert CMYK to CMYK Object", () => {
  valuesCMYKToCMYK.forEach((value) => {
    it(`Should convert a CMYK value to CMYK - ${JSON.stringify(
      value.input
    )} → ${JSON.stringify(value.output)}`, () => {
      expect(toCmykObject(value.input)).toEqual(value.output);
    });
  });
});
