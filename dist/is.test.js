"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("./is");
const isRgbValues = [
    {
        input: "rgb(0,0,0)",
        result: true,
    },
    {
        input: "rgb(255,0,0)",
        result: true,
    },
    {
        input: "rgb(255,255,255)",
        result: true,
    },
    {
        input: "rgb(255,255,256)",
        result: false,
    },
    {
        input: "rgb(255, 255, 255)",
        result: true,
    },
    {
        input: "rgba(255,255,256)",
        result: false,
    },
    {
        input: "#ffffff",
        result: false,
    },
    {
        input: "rgba(255,255,255",
        result: false,
    },
    {
        input: "rgb 255,255,255",
        result: false,
    },
];
describe("is RGB?", () => {
    isRgbValues.forEach((value) => {
        it(`should${value.result ? " " : " not "}pass as RGB - ${value.input}`, () => {
            expect((0, is_1.isRGB)(value.input)).toBe(value.result);
        });
    });
});
const isHslValues = [
    {
        input: "hsl(0,0,0)",
        result: true,
    },
    {
        input: "hsl(255,0,0)",
        result: false,
    },
    {
        input: "hsl(0,100,50)",
        result: true,
    },
    {
        input: "hsl(100,100,101)",
        result: false,
    },
    {
        input: "hsl(100, 100, 100)",
        result: true,
    },
    {
        input: "hsl(255,255,256)",
        result: false,
    },
    {
        input: "#ffffff",
        result: false,
    },
    {
        input: "hsl(100,0,0",
        result: false,
    },
    {
        input: "rgb 0,0,0",
        result: false,
    },
];
describe("is HSL?", () => {
    isHslValues.forEach((value) => {
        it(`should${value.result ? " " : " not "}pass as HSL - ${value.input}`, () => {
            expect((0, is_1.isHSL)(value.input)).toBe(value.result);
        });
    });
});
const isHexValue = [
    {
        input: "#000000",
        result: true,
    },
    {
        input: "#ffffff",
        result: true,
    },
    {
        input: "#FFFFFF",
        result: true,
    },
    {
        input: "#ff0000",
        result: true,
    },
    {
        input: "#000",
        result: true,
    },
    {
        input: "#f90",
        result: true,
    },
    {
        input: "#aabbcc",
        result: true,
    },
    {
        input: "#gg1321",
        result: false,
    },
    {
        input: "#gf0",
        result: false,
    },
];
describe("is HEX?", () => {
    isHexValue.forEach((value) => {
        it(`should${value.result ? " " : " not "}pass as Hex - ${value.input}`, () => {
            expect((0, is_1.isHex)(value.input)).toBe(value.result);
        });
    });
});
//# sourceMappingURL=is.test.js.map