import { hexToRgb, hexToHsl, hslToHex, hslToRgb } from "./convert";
import { HEX, HSL, RGB } from "./types";

const valuesHexToRgb: { input: HEX, output: RGB}[] = [
  { input: "#000000", output: { r: 0, g: 0, b: 0 } },
  { input: "#ffffff", output: { r: 255, g: 255, b: 255 } },
  { input: "#ff0000", output: { r: 255, g: 0, b: 0 } },
  { input: "#ff00ff", output: { r: 255, g: 0, b: 255 } },
  { input: "#7f7f7f", output: { r: 127, g: 127, b: 127 } },
  { input: "#cccccc", output: { r: 204, g: 204, b: 204 } },
];

const valuesHexToHsl: { input: HEX, output: HSL}[] = [
  { input: "#000000", output: { h: 0, s: 0, l: 0 } },
  { input: "#ffffff", output: { h: 0, s: 0, l: 100 } },
  { input: "#ff0000", output: { h: 0, s: 100, l: 50 } },
  { input: "#7f7f7f", output: { h: 0, s: 0, l: 50 } },
  { input: "#cccccc", output: { h: 0, s: 0, l: 80 } },
  { input: "#ff0094", output: { h: 325, s: 100, l: 50 } },
  { input: "#aabced", output: { h: 224, s: 65, l: 80 } },
];


const valuesHslToRgb: { input: HSL, output: RGB}[]  = [
  { input: { h: 0, s: 0, l: 0 }, output: { r: 0, g: 0, b: 0 } },
  { input: { h: 0, s: 0, l: 100 }, output: { r: 255, g: 255, b: 255 } },
  { input: { h: 0, s: 100, l: 50 }, output: { r: 255, g: 0, b: 0 } },
  { input: { h: 0, s: 0, l: 50 }, output: { r: 128, g: 128, b: 128 } },
  { input: { h: 0, s: 0, l: 80 }, output: { r: 204, g: 204, b: 204 } },
  { input: { h: 325, s: 100, l: 50 }, output: { r: 255, g: 0, b: 149 } },
  { input: { h: 224, s: 65, l: 80 }, output: { r: 171, g: 189, b: 237 } },
];


const valuesHslToHex: { input: HSL, output: HEX}[]  = [
  { input: { h: 0, s: 0, l: 0 }, output: "#000000" },
  { input: { h: 0, s: 0, l: 100 }, output: "#ffffff" },
  { input: { h: 0, s: 100, l: 50 }, output: "#ff0000" },
  { input: { h: 0, s: 0, l: 50 }, output: "#808080" }, // <- Should be: 7f7f7f
  { input: { h: 0, s: 0, l: 80 }, output: "#cccccc" },
  { input: { h: 325, s: 100, l: 50 }, output: "#ff0095" }, // <- Should be: ff0094
  { input: { h: 224, s: 65, l: 80 }, output: "#abbded" }, // <- Should be: aabced
];

describe("convert Hex to RGB", () => {
  valuesHexToRgb.forEach((value) => {
    it(`Should convert a hex value to RGB - ${value.input} → ${JSON.stringify(
      value.output
    )}`, () => {
      expect(hexToRgb(value.input)).toEqual(value.output);
    });
  });
});

describe("convert Hex to HSL", () => {
  valuesHexToHsl.forEach((value) => {
    it(`Should convert a hex value to HSL - ${value.input} → ${JSON.stringify(
      value.output
    )}`, () => {
      expect(hexToHsl(value.input)).toEqual(value.output);
    });
  });
});

describe("convert HSL to RGB", () => {
  valuesHslToRgb.forEach((value) => {
    it(`Should convert a hex value to HSL - ${JSON.stringify(
      value.input
    )} → ${JSON.stringify(value.output)}`, () => {
      expect(hslToRgb(value.input)).toEqual(value.output);
    });
  });
});

describe("convert HSL to Hex", () => {
  valuesHslToHex.forEach((value) => {
    it(`Should convert a hex value to Hex - ${value.output} → ${JSON.stringify(
      value.input
    )}`, () => {
      expect(hslToHex(value.input)).toEqual(value.output);
    });
  });
});
