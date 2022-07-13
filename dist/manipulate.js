"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mix = exports.darken = exports.lighten = exports.setOpacity = exports.setLightness = exports.makeItRgb = exports.makeItHsl = exports.getType = void 0;
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
const makeItRgb = (value) => {
    switch ((0, exports.getType)(value)) {
        case types_1.ColorType.RGB:
            return value;
        case types_1.ColorType.HSL:
            return (0, convert_1.hslToRgb)(value);
        case types_1.ColorType.HEX:
            return (0, convert_1.hexToRgb)(value);
        default:
            return { r: 0, g: 0, b: 0 };
    }
};
exports.makeItRgb = makeItRgb;
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
const mix = (from, to, amount) => {
    const type = (0, exports.getType)(from);
    const fromRgb = (0, exports.makeItRgb)(from);
    const endRgb = (0, exports.makeItRgb)(to);
    const delta = {
        r: ((endRgb.r - fromRgb.r) / 100) * amount,
        g: ((endRgb.g - fromRgb.g) / 100) * amount,
        b: ((endRgb.b - fromRgb.b) / 100) * amount,
    };
    const result = {
        r: Math.round(fromRgb.r + delta.r),
        g: Math.round(fromRgb.g + delta.g),
        b: Math.round(fromRgb.b + delta.b),
    };
    switch (type) {
        case types_1.ColorType.RGB:
            return result;
        case types_1.ColorType.HSL:
            return (0, convert_1.rgbToHsl)(result);
        case types_1.ColorType.HEX:
            return (0, convert_1.rgbToHex)(result);
        default:
            return result;
    }
};
exports.mix = mix;
//# sourceMappingURL=manipulate.js.map