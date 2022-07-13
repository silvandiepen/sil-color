"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = require("./get");
const MinMaxTests = [
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
            expect((0, get_1.getMinMaxRgb)(value.input)).toEqual(Object.assign({}, value.output));
        });
    });
});
const getSaturationFromRgbTests = [
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
            expect((0, get_1.getSaturationFromRgb)(value.input)).toEqual(value.output);
        });
    });
});
const getLightnessFromRgbTests = [
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
            expect((0, get_1.getLightnessFromRgb)(value.input)).toEqual(value.output);
        });
    });
});
const getHueFromRgbTest = [
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
            expect((0, get_1.getHueFromRgb)(value.input)).toEqual(value.output);
        });
    });
});
//# sourceMappingURL=get.test.js.map