"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
describe("Type checkers", () => {
    it("Should return if the object is RGB", () => {
        expect((0, types_1.instanceOfRGB)({ r: 0, g: 0, b: 0 })).toBe(true);
    });
    it("Should return if the object is not RGB", () => {
        expect((0, types_1.instanceOfRGB)({ r: 0, g: 0, b: 0, a: 0 })).toBe(false);
    });
    it("Should return if the object is not RGBA", () => {
        expect((0, types_1.instanceOfRGBA)({ r: 0, g: 0, b: 0 })).toBe(false);
    });
    it("Should return if the object is RGBA", () => {
        expect((0, types_1.instanceOfRGBA)({ r: 0, g: 0, b: 0, a: 0 })).toBe(true);
    });
    it("Should return if the object is HSLA", () => {
        expect((0, types_1.instanceOfHSLA)({ h: 0, s: 0, l: 0, a: 0 })).toBe(true);
    });
    it("Should return if the object is not HSLA", () => {
        expect((0, types_1.instanceOfHSLA)({ h: 0, s: 0, l: 0 })).toBe(false);
    });
    it("Should return if the object is not HSLA", () => {
        expect((0, types_1.instanceOfHSLA)({ r: 0, g: 0, b: 0 })).toBe(false);
    });
    it("Should return if the object is not HSLA", () => {
        expect((0, types_1.instanceOfHSLA)({ r: 0, g: 0, b: 0, c: 0 })).toBe(false);
    });
});
//# sourceMappingURL=types.test.js.map