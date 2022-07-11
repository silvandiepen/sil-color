"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./string");
const toRgbStrings = [
    {
        input: { r: 0, g: 0, b: 0 },
        result: "rgb(0, 0, 0)",
    },
    {
        input: { r: 0, g: 0, b: 0, a: 0 },
        result: "rgba(0, 0, 0, 0)",
    },
];
describe("to RGB string", () => {
    toRgbStrings.forEach((value) => {
        it(`should convert to RGB string - ${JSON.stringify(value.input)}`, () => {
            expect((0, string_1.toRgbString)(value.input)).toBe(value.result);
        });
    });
});
const toHslStrings = [
    {
        input: { h: 0, s: 0, l: 0 },
        result: "hsl(0, 0, 0)",
    },
    {
        input: { h: 0, s: 0, l: 0, a: 0 },
        result: "hsla(0, 0, 0, 0)",
    },
];
describe("to HSL string", () => {
    toHslStrings.forEach((value) => {
        it(`should convert to RGB string - ${JSON.stringify(value.input)}`, () => {
            expect((0, string_1.toHslString)(value.input)).toBe(value.result);
        });
    });
});
//# sourceMappingURL=string.test.js.map