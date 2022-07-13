import { lighten, darken, setLightness } from "./manipulate";
import { HSL, RGB } from "./types";

const lightenColors = [
  {
    input: { r: 0, g: 0, b: 0 } as RGB,
    amount: 2,
    output: { r: 0, g: 0, b: 0 } as RGB,
  },
  {
    input: { r: 127, g: 127, b: 127 } as RGB,
    amount: 1.5,
    output: { r: 191, g: 191, b: 191 } as RGB,
  },
  {
    input: { h: 0, s: 0, l: 0 } as HSL,
    amount: 2,
    output: { h: 0, s: 0, l: 0 } as HSL,
  },
  {
    input: { h: 0, s: 0, l: 10 } as HSL,
    amount: 2,
    output: { h: 0, s: 0, l: 20 } as HSL,
  },
];

describe("to Lightened color", () => {
  lightenColors.forEach((value) => {
    it(`should convert any color to a lighter version`, () => {
      expect(lighten(value.input, value.amount)).toEqual(value.output);
    });
  });
});
const darkenColors = [
  {
    input: { r: 0, g: 0, b: 0 } as RGB,
    amount: 2,
    output: { r: 0, g: 0, b: 0 } as RGB,
  },
  {
    input: { r: 127, g: 127, b: 127 } as RGB,
    amount: 1.5,
    output: { r: 85, g: 85, b: 85 } as RGB,
  },
  {
    input: { h: 0, s: 0, l: 0 } as HSL,
    amount: 2,
    output: { h: 0, s: 0, l: 0 } as HSL,
  },
  {
    input: { h: 0, s: 0, l: 10 } as HSL,
    amount: 2,
    output: { h: 0, s: 0, l: 5 } as HSL,
  },
];

describe("to Darkened color", () => {
  darkenColors.forEach((value) => {
    it(`should convert to RGB string - ${JSON.stringify(value.input)}`, () => {
      expect(darken(value.input, value.amount)).toEqual(value.output);
    });
  });
});
