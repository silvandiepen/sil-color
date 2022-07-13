"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.darken = exports.lighten = exports.setOpacity = exports.setLightness = exports.makeItHsl = exports.getType = void 0;
const convert_1 = require("./convert");
const is_1 = require("./is");
const types_1 = require("./types");
const getType = (value) => {
    if ((0, is_1.isRGB)(value))
        return types_1.ColorType.RGB;
    if ((0, is_1.isHex)(value))
        return types_1.ColorType.HEX;
    if ((0, is_1.isHSL)(value))
        return types_1.ColorType.HSL;
    if ((0, is_1.isRGBA)(value))
        return types_1.ColorType.RGBA;
    if ((0, is_1.isHSLA)(value))
        return types_1.ColorType.HSLA;
    return types_1.ColorType.UNKNOWN;
};
exports.getType = getType;
const makeItHsl = (value) => {
    switch ((0, exports.getType)(value)) {
        case types_1.ColorType.RGB:
            return (0, convert_1.rgbToHsl)(value);
        case types_1.ColorType.HSL:
            return value;
        case types_1.ColorType.HEX:
            return (0, convert_1.hexToHsl)(value);
        default:
            return { h: 0, s: 0, l: 0 };
    }
};
exports.makeItHsl = makeItHsl;
const setLightness = (value, lightness) => {
    const { h, s } = (0, exports.makeItHsl)(value);
    const type = (0, exports.getType)(value);
    const hsl = {
        h: h,
        s: s,
        l: lightness,
    };
    switch (type) {
        case types_1.ColorType.RGB:
            return (0, convert_1.hslToRgb)(hsl);
        case types_1.ColorType.HSL:
            return hsl;
        case types_1.ColorType.HEX:
            return (0, convert_1.hslToHex)(hsl);
        default:
            return hsl;
    }
};
exports.setLightness = setLightness;
const setOpacity = (value, opacity) => {
    const type = (0, exports.getType)(value);
    switch (type) {
        case types_1.ColorType.RGB:
        case types_1.ColorType.RGBA:
            const rgb = value;
            return { r: rgb.r, g: rgb.g, b: rgb.b, a: opacity };
        case types_1.ColorType.HSL:
        case types_1.ColorType.HSLA:
            const hsl = value;
            return { h: hsl.h, s: hsl.s, l: hsl.l, a: opacity };
        case types_1.ColorType.HEX:
            const hexRgba = (0, convert_1.hexToRgb)(value);
            return { r: hexRgba.r, g: hexRgba.g, b: hexRgba.b, a: opacity };
        default:
            console.warn(`${(0, exports.getType)(value)} is not supported yet by setOpacity`);
            return { h: 0, s: 0, l: 0 };
    }
};
exports.setOpacity = setOpacity;
const lighten = (value, amount) => {
    const { l } = (0, exports.makeItHsl)(value);
    return (0, exports.setLightness)(value, (l * amount));
};
exports.lighten = lighten;
const darken = (value, amount) => {
    const { l } = (0, exports.makeItHsl)(value);
    return (0, exports.setLightness)(value, (l / amount));
};
exports.darken = darken;
//# sourceMappingURL=manipulate.js.map