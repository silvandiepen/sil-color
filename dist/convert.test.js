"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = require("./convert");
const valuesHexToRgb = [
    { input: "#000000", output: { r: 0, g: 0, b: 0 } },
    { input: "#ffffff", output: { r: 255, g: 255, b: 255 } },
    { input: "#ff0000", output: { r: 255, g: 0, b: 0 } },
];
const valuesHexToHsl = [
    { input: "#000000", output: { h: 0, s: 0, l: 0 } },
    { input: "#ffffff", output: { h: 0, s: 0, l: 100 } },
    { input: "#ff0000", output: { h: 0, s: 100, l: 50 } },
];
describe("convert Hex to RGB", () => {
    valuesHexToRgb.forEach((value) => {
        it(`Should convert a hex value to RGB - ${value.input} -> ${JSON.stringify(value.output)}`, () => {
            expect((0, convert_1.hexToRgb)(value.input)).toEqual(value.output);
        });
    });
});
describe("convert Hex to HSL", () => {
    valuesHexToHsl.forEach((value) => {
        it(`Should convert a hex value to HSL - ${value.input} -> ${JSON.stringify(value.output)}`, () => {
            expect((0, convert_1.hexToHsl)(value.input)).toEqual(value.output);
        });
    });
});
//# sourceMappingURL=convert.test.js.map