import {
  getBrightness,
  getHueFromRgb,
  getLightnessFromRgb,
  getMinMaxRgb,
  getSaturation,
  getSaturationFromRgb,
} from "./get";
import { HSL, RGB, MinMax, COLOR } from "./types";

const MinMaxTests: { input: RGB; output: MinMax }[] = [
  { input: { r: 0, g: 0, b: 0 }, output: { r: 0, g: 0, b: 0, min: 0, max: 0 } },
  {
    input: { r: 255, g: 0, b: 0 },
    output: { r: 1, g: 0, b: 0, min: 0, max: 1 },
  },
  {
    input: { r: 255, g: 255, b: 255 },
    output: { r: 1, g: 1, b: 1, min: 1, max: 1 },
  },
  {
    input: { r: 127, g: 127, b: 127 },
    output: { r: 0.5, g: 0.5, b: 0.5, min: 0.5, max: 0.5 },
  },
  {
    input: { r: 33, g: 127, b: 127 },
    output: { r: 0.13, g: 0.5, b: 0.5, min: 0.13, max: 0.5 },
  },
];

describe("Get the minimal and max value of RGB", () => {
  MinMaxTests.forEach((value) => {
    it("Should give the min and max values", () => {
      expect(getMinMaxRgb(value.input)).toEqual({
        ...value.output,
      });
    });
  });
});

const getSaturationFromRgbTests: { input: RGB; output: HSL["s"] }[] = [
  { input: { r: 0, g: 0, b: 0 }, output: 0 },
  {
    input: { r: 255, g: 0, b: 0 },
    output: 100,
  },
  {
    input: { r: 255, g: 255, b: 255 },
    output: 0,
  },
  {
    input: { r: 127, g: 127, b: 127 },
    output: 0,
  },
  {
    input: { r: 33, g: 127, b: 127 },
    output: 27,
  },
];

describe("Get the saturation of an RGB value", () => {
  getSaturationFromRgbTests.forEach((value) => {
    it("Should give the value", () => {
      expect(getSaturationFromRgb(value.input)).toEqual(value.output);
    });
  });
});

const getLightnessFromRgbTests: { input: RGB; output: HSL["l"] }[] = [
  { input: { r: 0, g: 0, b: 0 }, output: 0 },
  {
    input: { r: 255, g: 0, b: 0 },
    output: 50,
  },
  {
    input: { r: 255, g: 255, b: 255 },
    output: 100,
  },
  {
    input: { r: 127, g: 127, b: 127 },
    output: 50,
  },
  {
    input: { r: 33, g: 127, b: 127 },
    output: 32,
  },
];

describe("Get the lightness of an RGB value", () => {
  getLightnessFromRgbTests.forEach((value) => {
    it("Should give the value", () => {
      expect(getLightnessFromRgb(value.input)).toEqual(value.output);
    });
  });
});

const getHueFromRgbTest: { input: RGB; output: HSL["h"] }[] = [
  { input: { r: 0, g: 0, b: 0 }, output: 0 },
  {
    input: { r: 255, g: 0, b: 0 },
    output: 0,
  },
  {
    input: { r: 255, g: 255, b: 255 },
    output: 0,
  },
  {
    input: { r: 127, g: 127, b: 127 },
    output: 0,
  },
  {
    input: { r: 33, g: 127, b: 127 },
    output: 180,
  },
  {
    input: { r: 33, g: 72, b: 200 },
    output: 226,
  },
];

describe("Get the hue of an RGB value", () => {
  getHueFromRgbTest.forEach((value) => {
    it("Should give the value", () => {
      expect(getHueFromRgb(value.input)).toEqual(value.output);
    });
  });
});

// const getSaturationTest = [
// //   { input: { r: 0, g: 0, b: 0 }, output: 0 },
// //   {
// //     input: { r: 255, g: 0, b: 0 },
// //     output: 50,
// //   },
//   {
//     input: { h: 255, s: 255, l: 255 },
//     output: 100,
//   },
// //   {
// //     input: { r: 127, g: 127, b: 127 },
// //     output: 50,
// //   },
// //   {
// //     input: { r: 33, g: 127, b: 127 },
// //     output: 32,
// //   },
// ];

// describe("Get the saturation of a value", () => {
//   getSaturationTest.forEach((value) => {
//     it("Should give the value", () => {
//       expect(getSaturation(value.input)).toEqual(value.output);
//     });
//   });
// });
const getBrightnessTests: {
  input: COLOR;
  roundness?: number;
  output: number;
}[] = [
  { input: { r: 0, g: 0, b: 0 }, output: 0 },
  {
    input: { r: 255, g: 255, b: 255 },
    output: 100,
  },
  {
    input: { r: 255, g: 0, b: 0 },
    output: 54.68,
  },
  {
    input: { r: 0, g: 255, b: 0 },
    output: 76.62,
  },
  {
    input: { r: 0, g: 0, b: 255 },
    output: 33.76,
  },
  {
    input: { r: 0, g: 255, b: 255 },
    roundness: 1000,
    output: 83.726,
  },
  {
    input: { r: 255, g: 255, b: 0 },
    roundness: 1,
    output: 94,
  },
  {
    input: '#111111',
    roundness: 1,
    output: 7,
  },
];

describe("Get the Brightness of a color", () => {
  getBrightnessTests.forEach((value) => {
    it("Should give the value", () => {
      if (value.roundness) {
        expect(getBrightness(value.input, value.roundness)).toEqual(
          value.output
        );
      } else {
        expect(getBrightness(value.input)).toEqual(value.output);
      }
    });
  });
});
