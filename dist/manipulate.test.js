"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manipulate_1 = require("./manipulate");
const lightenColors = [
    {
        input: { r: 0, g: 0, b: 0 },
        amount: 2,
        output: { r: 0, g: 0, b: 0 },
    },
    {
        input: { r: 127, g: 127, b: 127 },
        amount: 1.5,
        output: { r: 191, g: 191, b: 191 },
    },
    {
        input: { h: 0, s: 0, l: 0 },
        amount: 2,
        output: { h: 0, s: 0, l: 0 },
    },
    {
        input: { h: 0, s: 0, l: 10 },
        amount: 2,
        output: { h: 0, s: 0, l: 20 },
    },
];
describe("to Lightened color", () => {
    lightenColors.forEach((value) => {
        it(`should convert any color to a lighter version`, () => {
            expect((0, manipulate_1.lighten)(value.input, value.amount)).toEqual(value.output);
        });
    });
});
const darkenColors = [
    {
        input: { r: 0, g: 0, b: 0 },
        amount: 2,
        output: { r: 0, g: 0, b: 0 },
    },
    {
        input: { r: 127, g: 127, b: 127 },
        amount: 1.5,
        output: { r: 85, g: 85, b: 85 },
    },
    {
        input: { h: 0, s: 0, l: 0 },
        amount: 2,
        output: { h: 0, s: 0, l: 0 },
    },
    {
        input: { h: 0, s: 0, l: 10 },
        amount: 2,
        output: { h: 0, s: 0, l: 5 },
    },
];
describe("to Darkened color", () => {
    darkenColors.forEach((value) => {
        it(`should convert to RGB string - ${JSON.stringify(value.input)}`, () => {
            expect((0, manipulate_1.darken)(value.input, value.amount)).toEqual(value.output);
        });
    });
});
const setLightnessTest = [
    {
        input: { r: 0, g: 0, b: 0 },
        amount: 25,
        output: { r: 64, g: 64, b: 64 },
    },
    {
        input: { r: 127, g: 127, b: 127 },
        amount: 50,
        output: { r: 128, g: 128, b: 128 },
    },
    {
        input: { h: 0, s: 0, l: 0 },
        amount: 75,
        output: { h: 0, s: 0, l: 75 },
    },
    {
        input: { h: 0, s: 0, l: 10 },
        amount: 100,
        output: { h: 0, s: 0, l: 100 },
    },
    {
        input: "#000000",
        amount: 50,
        output: "#808080",
    },
    {
        input: "#FF0000",
        amount: 25,
        output: "#800000",
    },
];
describe("Set Lightened color", () => {
    setLightnessTest.forEach((value) => {
        it(`should convert any color to a lighter version`, () => {
            expect((0, manipulate_1.setLightness)(value.input, value.amount)).toEqual(value.output);
        });
    });
});
const mixTest = [
    {
        input1: { r: 0, g: 0, b: 0 },
        input2: { r: 255, g: 255, b: 255 },
        amount: 50,
        output: { r: 127, g: 127, b: 127 },
    },
    {
        input1: { r: 0, g: 0, b: 0 },
        input2: { r: 255, g: 255, b: 255 },
        amount: 25,
        output: { r: 64, g: 64, b: 64 },
    },
    {
        input1: { r: 0, g: 0, b: 0 },
        input2: { r: 255, g: 255, b: 255 },
        amount: 75,
        output: { r: 191, g: 191, b: 191 },
    },
    {
        input1: { r: 255, g: 255, b: 255 },
        input2: { r: 0, g: 0, b: 0 },
        amount: 25,
        output: { r: 191, g: 191, b: 191 },
    },
    {
        input1: { r: 255, g: 255, b: 255 },
        input2: { r: 0, g: 0, b: 0 },
        amount: 75,
        output: { r: 64, g: 64, b: 64 },
    },
];
describe("Mix color", () => {
    mixTest.forEach((value) => {
        it(`should mix the two colors the set amount`, () => {
            expect((0, manipulate_1.mix)(value.input1, value.input2, value.amount)).toEqual(value.output);
        });
    });
});
//# sourceMappingURL=manipulate.test.js.map