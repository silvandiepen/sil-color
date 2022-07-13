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
//# sourceMappingURL=manipulate.test.js.map