"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = require("./convert");
const valuesHexToRgb = [
    { input: "#000000", output: { r: 0, g: 0, b: 0 } },
    { input: "#ffffff", output: { r: 255, g: 255, b: 255 } },
    { input: "#ff0000", output: { r: 255, g: 0, b: 0 } },
    { input: "#ff00ff", output: { r: 255, g: 0, b: 255 } },
    { input: "#7f7f7f", output: { r: 127, g: 127, b: 127 } },
    { input: "#cccccc", output: { r: 204, g: 204, b: 204 } },
];
const valuesHexToHsl = [
    { input: "#000000", output: { h: 0, s: 0, l: 0 } },
    { input: "#ffffff", output: { h: 0, s: 0, l: 100 } },
    { input: "#ff0000", output: { h: 0, s: 100, l: 50 } },
    { input: "#7f7f7f", output: { h: 0, s: 0, l: 50 } },
    { input: "#cccccc", output: { h: 0, s: 0, l: 80 } },
    { input: "#ff0094", output: { h: 325, s: 100, l: 50 } },
    { input: "#aabced", output: { h: 224, s: 65, l: 80 } },
];
const valuesHslToRgb = [
    { input: { h: 0, s: 0, l: 0 }, output: { r: 0, g: 0, b: 0 } },
    { input: { h: 0, s: 0, l: 100 }, output: { r: 255, g: 255, b: 255 } },
    { input: { h: 0, s: 100, l: 50 }, output: { r: 255, g: 0, b: 0 } },
    { input: { h: 0, s: 0, l: 50 }, output: { r: 128, g: 128, b: 128 } },
    { input: { h: 0, s: 0, l: 80 }, output: { r: 204, g: 204, b: 204 } },
    { input: { h: 325, s: 100, l: 50 }, output: { r: 255, g: 0, b: 149 } },
    { input: { h: 224, s: 65, l: 80 }, output: { r: 171, g: 189, b: 237 } },
];
const valuesHslToHex = [
    { input: { h: 0, s: 0, l: 0 }, output: "#000000" },
    { input: { h: 0, s: 0, l: 100 }, output: "#ffffff" },
    { input: { h: 0, s: 100, l: 50 }, output: "#ff0000" },
    { input: { h: 0, s: 0, l: 50 }, output: "#808080" },
    { input: { h: 0, s: 0, l: 80 }, output: "#cccccc" },
    { input: { h: 325, s: 100, l: 50 }, output: "#ff0095" },
    { input: { h: 224, s: 65, l: 80 }, output: "#abbded" },
];
const valuesRgbToCMYK = [
    { input: { r: 0, g: 0, b: 0 }, output: { c: 0, m: 0, y: 0, k: 100 } },
    { input: { r: 255, g: 255, b: 255 }, output: { c: 0, m: 0, y: 0, k: 0 } },
    { input: { r: 255, g: 0, b: 0 }, output: { c: 0, m: 100, y: 100, k: 0 } },
    { input: { r: 255, g: 0, b: 255 }, output: { c: 0, m: 100, y: 0, k: 0 } },
    { input: { r: 127, g: 127, b: 127 }, output: { c: 0, m: 0, y: 0, k: 50 } },
    { input: { r: 204, g: 204, b: 204 }, output: { c: 0, m: 0, y: 0, k: 20 } },
    { input: { r: 123, g: 242, b: 34 }, output: { c: 49, m: 0, y: 86, k: 5 } },
];
const valuesCMYKToRGB = [
    { output: { r: 0, g: 0, b: 0 }, input: { c: 0, m: 0, y: 0, k: 100 } },
    { output: { r: 255, g: 255, b: 255 }, input: { c: 0, m: 0, y: 0, k: 0 } },
    { output: { r: 255, g: 0, b: 0 }, input: { c: 0, m: 100, y: 100, k: 0 } },
    { output: { r: 255, g: 0, b: 255 }, input: { c: 0, m: 100, y: 0, k: 0 } },
    { output: { r: 128, g: 128, b: 128 }, input: { c: 0, m: 0, y: 0, k: 50 } },
    { output: { r: 204, g: 204, b: 204 }, input: { c: 0, m: 0, y: 0, k: 20 } },
    { output: { r: 124, g: 242, b: 34 }, input: { c: 49, m: 0, y: 86, k: 5 } },
];
describe("convert Hex to RGB", () => {
    valuesHexToRgb.forEach((value) => {
        it(`Should convert a hex value to RGB - ${value.input} → ${JSON.stringify(value.output)}`, () => {
            expect((0, convert_1.hexToRgb)(value.input)).toEqual(value.output);
        });
    });
});
describe("convert Hex to HSL", () => {
    valuesHexToHsl.forEach((value) => {
        it(`Should convert a hex value to HSL - ${value.input} → ${JSON.stringify(value.output)}`, () => {
            expect((0, convert_1.hexToHsl)(value.input)).toEqual(value.output);
        });
    });
});
describe("convert HSL to RGB", () => {
    valuesHslToRgb.forEach((value) => {
        it(`Should convert a hex value to HSL - ${JSON.stringify(value.input)} → ${JSON.stringify(value.output)}`, () => {
            expect((0, convert_1.hslToRgb)(value.input)).toEqual(value.output);
        });
    });
});
describe("convert HSL to Hex", () => {
    valuesHslToHex.forEach((value) => {
        it(`Should convert a hex value to Hex - ${value.input} → ${JSON.stringify(value.output)}`, () => {
            expect((0, convert_1.hslToHex)(value.input)).toEqual(value.output);
        });
    });
});
describe("convert RGB to CMYK", () => {
    valuesRgbToCMYK.forEach((value) => {
        it(`Should convert a RGB value to CMYK - ${JSON.stringify(value.input)} → ${JSON.stringify(value.output)}`, () => {
            expect((0, convert_1.rgbToCmyk)(value.input)).toEqual(value.output);
        });
    });
});
describe("convert CMYK to RGB", () => {
    valuesCMYKToRGB.forEach((value) => {
        it(`Should convert a RGB value to CMYK - ${JSON.stringify(value.input)} → ${JSON.stringify(value.output)}`, () => {
            expect((0, convert_1.CmykToRgb)(value.input)).toEqual(value.output);
        });
    });
});
//# sourceMappingURL=convert.test.js.map