"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./string");
const toRgbStrings = [
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
            expect((0, string_1.toRgbString)(value.input)).toBe(value.output);
        });
    });
});
const toHslStrings = [
    {
        input: { h: 0, s: 0, l: 0 },
        output: "hsl(0, 0, 0)",
    },
    {
        input: { h: 0, s: 0, l: 0, a: 0 },
        output: "hsla(0, 0, 0, 0)",
    },
];
describe("to HSL string", () => {
    toHslStrings.forEach((value) => {
        it(`should convert to RGB string - ${JSON.stringify(value.input)}`, () => {
            expect((0, string_1.toHslString)(value.input)).toBe(value.output);
        });
    });
});
//# sourceMappingURL=string.test.js.map