"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlue = exports.getGreen = exports.getRed = exports.getOpacity = exports.getSaturation = exports.getHue = exports.getLightness = exports.hueToRgb = exports.componentToHex = exports.getHueFromRgb = exports.getLightnessFromRgb = exports.getSaturationFromRgb = exports.getMinMaxRgb = void 0;
const convert_1 = require("./convert");
const manipulate_1 = require("./manipulate");
const types_1 = require("./types");
const getMinMaxRgb = (rgb) => {
    let { r, g, b } = rgb;
    (r /= 255), (g /= 255), (b /= 255);
    return {
        min: Math.round(Math.min(...[r, g, b]) * 100) / 100,
        max: Math.round(Math.max(...[r, g, b]) * 100) / 100,
        r: Math.round(r * 100) / 100,
        g: Math.round(g * 100) / 100,
        b: Math.round(b * 100) / 100,
    };
};
exports.getMinMaxRgb = getMinMaxRgb;
const getSaturationFromRgb = (rgb) => {
    const { min, max } = (0, exports.getMinMaxRgb)(rgb);
    if (min == max)
        return 0;
    const d = max - min;
    const l = (0, exports.getLightnessFromRgb)(rgb);
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    return Math.round(s * 100);
};
exports.getSaturationFromRgb = getSaturationFromRgb;
const getLightnessFromRgb = (rgb) => {
    const { min, max } = (0, exports.getMinMaxRgb)(rgb);
    const l = (max + min) / 2;
    return Math.round(l * 100);
};
exports.getLightnessFromRgb = getLightnessFromRgb;
const getHueFromRgb = (rgb) => {
    const { min, max, r, g, b } = (0, exports.getMinMaxRgb)(rgb);
    if (min == max)
        return 0;
    let h = 0;
    const d = max - min;
    switch (max) {
        case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
        case g:
            h = (b - r) / d + 2;
            break;
        case b:
            h = (r - g) / d + 4;
            break;
    }
    h /= 6;
    return Math.round(360 * h);
};
exports.getHueFromRgb = getHueFromRgb;
const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};
exports.componentToHex = componentToHex;
const hueToRgb = (p, q, t) => {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
};
exports.hueToRgb = hueToRgb;
const getLightness = (value) => {
    switch ((0, manipulate_1.getType)(value)) {
        case types_1.ColorType.RGB:
            return (0, exports.getLightnessFromRgb)(value);
        case types_1.ColorType.RGBA:
            const rgba = value;
            return (0, exports.getLightnessFromRgb)({ r: rgba.r, g: rgba.g, b: rgba.b });
        case types_1.ColorType.HSL:
            return value.l;
        case types_1.ColorType.HSLA:
            return value.l;
        case types_1.ColorType.HEX:
            return (0, convert_1.hexToHsl)(value).l;
        default:
            console.warn(`${(0, manipulate_1.getType)(value)} is not supported yet by getLightness`);
            return 0;
    }
};
exports.getLightness = getLightness;
const getHue = (value) => {
    switch ((0, manipulate_1.getType)(value)) {
        case types_1.ColorType.RGB:
            return (0, exports.getHueFromRgb)(value);
        case types_1.ColorType.RGBA:
            const rgba = value;
            return (0, exports.getHueFromRgb)({ r: rgba.r, g: rgba.g, b: rgba.b });
        case types_1.ColorType.HSL:
            return value.h;
        case types_1.ColorType.HSLA:
            return value.h;
        case types_1.ColorType.HEX:
            return (0, convert_1.hexToHsl)(value).h;
        default:
            console.warn(`${(0, manipulate_1.getType)(value)} is not supported yet by getHue`);
            return 0;
    }
};
exports.getHue = getHue;
const getSaturation = (value) => {
    switch ((0, manipulate_1.getType)(value)) {
        case types_1.ColorType.RGB:
            return (0, exports.getSaturationFromRgb)(value);
        case types_1.ColorType.RGBA:
            const rgba = value;
            return (0, exports.getSaturationFromRgb)({ r: rgba.r, g: rgba.g, b: rgba.b });
        case types_1.ColorType.HSL:
            return value.s;
        case types_1.ColorType.HSLA:
            return value.s;
        case types_1.ColorType.HEX:
            return (0, convert_1.hexToHsl)(value).s;
        default:
            console.warn(`${(0, manipulate_1.getType)(value)} is not supported yet by getSaturation`);
            return 0;
    }
};
exports.getSaturation = getSaturation;
const getOpacity = (value) => {
    switch ((0, manipulate_1.getType)(value)) {
        case types_1.ColorType.RGB:
        case types_1.ColorType.HSL:
        case types_1.ColorType.HEX:
            return 1;
        case types_1.ColorType.RGBA:
            return value.a;
        case types_1.ColorType.HSLA:
            return value.a;
        default:
            console.warn(`${(0, manipulate_1.getType)(value)} is not supported yet by getOpacity`);
            return 0;
    }
};
exports.getOpacity = getOpacity;
const getRed = (value) => {
    switch ((0, manipulate_1.getType)(value)) {
        case types_1.ColorType.RGB:
        case types_1.ColorType.RGBA:
            return value.r;
        case types_1.ColorType.HSL:
        case types_1.ColorType.HSLA:
            return (0, convert_1.hslToRgb)(value).r;
        case types_1.ColorType.HEX:
            return (0, convert_1.hexToRgb)(value).r;
        default:
            console.warn(`${(0, manipulate_1.getType)(value)} is not supported yet by getRed`);
            return 0;
    }
};
exports.getRed = getRed;
const getGreen = (value) => {
    switch ((0, manipulate_1.getType)(value)) {
        case types_1.ColorType.RGB:
        case types_1.ColorType.RGBA:
            return value.g;
        case types_1.ColorType.HSL:
        case types_1.ColorType.HSLA:
            return (0, convert_1.hslToRgb)(value).g;
        case types_1.ColorType.HEX:
            return (0, convert_1.hexToRgb)(value).g;
        default:
            console.warn(`${(0, manipulate_1.getType)(value)} is not supported yet by getRed`);
            return 0;
    }
};
exports.getGreen = getGreen;
const getBlue = (value) => {
    switch ((0, manipulate_1.getType)(value)) {
        case types_1.ColorType.RGB:
        case types_1.ColorType.RGBA:
            return value.b;
        case types_1.ColorType.HSL:
        case types_1.ColorType.HSLA:
            return (0, convert_1.hslToRgb)(value).b;
        case types_1.ColorType.HEX:
            return (0, convert_1.hexToRgb)(value).b;
        default:
            console.warn(`${(0, manipulate_1.getType)(value)} is not supported yet by getRed`);
            return 0;
    }
};
exports.getBlue = getBlue;
//# sourceMappingURL=get.js.map