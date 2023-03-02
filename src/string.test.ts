import { toRgbString, toHslString } from "./string";
import { HSL, HSLA, RGB, RGBA } from "./types";

const toRgbStrings: { input: RGB | RGBA; output: string }[] = [
  {
    input: { r: 0, g: 0, b: 0 },
    output: "rgb(0, 0, 0)",
  },
  {
    input: { r: 0, g: 0, b: 0, a: 0 },
    output: "rgba(0, 0, 0, 0)",
  },
];

describe("to RGB string", () => {
  toRgbStrings.forEach((value) => {
    it(`should convert to RGB string - ${JSON.stringify(value.input)}`, () => {
      expect(toRgbString(value.input)).toBe(value.output);
    });
  });
});

const toHslStrings: { input: HSL | HSLA; output: string }[] = [
  {
    input: { h: 0, s: 0, l: 0 },
    output: "hsl(0deg, 0%, 0%)",
  },
  {
    input: { h: 0, s: 0, l: 0, a: 0 },
    output: "hsla(0deg, 0%, 0%, 0)",
  },
];

describe("to HSL string", () => {
  toHslStrings.forEach((value) => {
    it(`should convert to RGB string - ${JSON.stringify(value.input)}`, () => {
      expect(toHslString(value.input)).toBe(value.output);
    });
  });
});
