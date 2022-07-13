import { lighten, darken, setLightness } from "./manipulate";
import { HEX, HSL, RGB } from "./types";

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
const setLightnessTest: {
  input: RGB | HSL | HEX;
  amount: HSL["l"];
  output: RGB | HSL | HEX;
}[] = [
  {
    input: { r: 0, g: 0, b: 0 } as RGB,
    amount: 25,
    output: { r: 64, g: 64, b: 64 } as RGB,
  },
  {
    input: { r: 127, g: 127, b: 127 } as RGB,
    amount: 50,
    output: { r: 128, g: 128, b: 128 } as RGB,
  },
  {
    input: { h: 0, s: 0, l: 0 } as HSL,
    amount: 75,
    output: { h: 0, s: 0, l: 75 } as HSL,
  },
  {
    input: { h: 0, s: 0, l: 10 } as HSL,
    amount: 100,
    output: { h: 0, s: 0, l: 100 } as HSL,
  },
  {
    input: "#000000" as HEX,
    amount: 50,
    output: "#808080" as HEX,
  },
  {
    input: "#FF0000" as HEX,
    amount: 25,
    output: "#800000" as HEX,
  },
];

describe("Set Lightened color", () => {
  setLightnessTest.forEach((value) => {
    it(`should convert any color to a lighter version`, () => {
      expect(setLightness(value.input, value.amount)).toEqual(value.output);
    });
  });
});
