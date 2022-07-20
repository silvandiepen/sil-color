"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHex = exports.cmykToHex = exports.cmykToRgb = exports.rgbToCmyk = exports.hslToHex = exports.rgbToHex = exports.rgbToHsl = exports.hslToRgb = exports.hexToHsl = exports.hexToRgb = void 0;
const get_1 = require("./get");
const is_1 = require("./is");
const object_1 = require("./object");
const types_1 = require("./types");
const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || [
        "0",
        "0",
        "0",
    ];
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    };
};
exports.hexToRgb = hexToRgb;
const hexToHsl = (hex) => {
    const rgb = (0, exports.hexToRgb)(hex);
    return {
        h: (0, get_1.getHue)(rgb),
        s: (0, get_1.getSaturation)(rgb),
        l: (0, get_1.getLightness)(rgb),
    };
};
exports.hexToHsl = hexToHsl;
const hslToRgb = (hsl) => {
    let { h, s, l } = hsl;
    s /= 100;
    l /= 100;
    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const rgb = {
        r: Math.round(255 * f(0)),
        g: Math.round(255 * f(8)),
        b: Math.round(255 * f(4)),
    };
    if ((0, types_1.instanceOfHSL)(hsl)) {
        return rgb;
    }
    else {
        return Object.assign(Object.assign({}, rgb), { a: hsl.a });
    }
};
exports.hslToRgb = hslToRgb;
const rgbToHsl = (rgb) => {
    const hsl = {
        h: (0, get_1.getHue)(rgb),
        s: (0, get_1.getSaturation)(rgb),
        l: (0, get_1.getLightness)(rgb),
    };
    if ((0, types_1.instanceOfRGB)(rgb)) {
        return hsl;
    }
    else {
        return Object.assign(Object.assign({}, hsl), { a: rgb.a });
    }
};
exports.rgbToHsl = rgbToHsl;
const rgbToHex = (rgb) => {
    const { r, g, b } = rgb;
    return "#" + (0, get_1.componentToHex)(r) + (0, get_1.componentToHex)(g) + (0, get_1.componentToHex)(b);
};
exports.rgbToHex = rgbToHex;
const hslToHex = (hsl) => (0, exports.rgbToHex)((0, exports.hslToRgb)(hsl));
exports.hslToHex = hslToHex;
const rgbToCmyk = (rgb) => {
    let { r, g, b } = rgb;
    let c = 1 - r / 255;
    let m = 1 - g / 255;
    let y = 1 - b / 255;
    let k = Math.min(c, Math.min(m, y));
    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);
    c = Math.round(c * 100);
    m = Math.round(m * 100);
    y = Math.round(y * 100);
    k = Math.round(k * 100);
    c = isNaN(c) ? 0 : c;
    m = isNaN(m) ? 0 : m;
    y = isNaN(y) ? 0 : y;
    k = isNaN(k) ? 0 : k;
    const cmyk = {
        c: c,
        m: m,
        y: y,
        k: k,
    };
    return cmyk;
};
exports.rgbToCmyk = rgbToCmyk;
const cmykToRgb = (cmyk) => {
    const k = cmyk.k / 100;
    const c = (cmyk.c / 100) * (1 - k) + k;
    const m = (cmyk.m / 100) * (1 - k) + k;
    const y = (cmyk.y / 100) * (1 - k) + k;
    const r = Math.round(255 * (1 - c));
    const g = Math.round(255 * (1 - m));
    const b = Math.round(255 * (1 - y));
    const rgb = { r: r, g: g, b: b };
    return rgb;
};
exports.cmykToRgb = cmykToRgb;
const cmykToHex = (cmyk) => (0, exports.rgbToHex)((0, exports.cmykToRgb)(cmyk));
exports.cmykToHex = cmykToHex;
const toHex = (color) => {
    if (typeof color == "string") {
        if ((0, is_1.isHex)(color))
            return color;
        if ((0, is_1.isRGB)(color))
            return (0, exports.rgbToHex)((0, object_1.toRgbObject)(color));
        if ((0, is_1.isHSL)(color))
            return (0, exports.hslToHex)((0, object_1.toHslObject)(color));
        if ((0, is_1.isCMYK)(color))
            return (0, exports.cmykToHex)((0, object_1.toCmykObject)(color));
    }
    else if ((0, types_1.instanceOfRGB)(color) || (0, types_1.instanceOfRGBA)(color)) {
        return (0, exports.rgbToHex)(color);
    }
    else if ((0, types_1.instanceOfHSL)(color) || (0, types_1.instanceOfHSLA)(color)) {
        return (0, exports.hslToHex)(color);
    }
    else if ((0, types_1.instanceOfCMYK)(color)) {
        return (0, exports.cmykToHex)(color);
    }
    return "#000000";
};
exports.toHex = toHex;
//# sourceMappingURL=convert.js.map