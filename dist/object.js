"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCmykObject = exports.toHslObject = exports.toRgbObject = void 0;
const types_1 = require("./types");
const toRgbObject = (value) => {
    if (typeof value !== "string" && (0, types_1.instanceOfRGB)(value))
        return value;
    if (typeof value !== "string" && (0, types_1.instanceOfRGBA)(value)) {
        const rgb = value;
        return { r: rgb.r, g: rgb.b, b: rgb.b };
    }
    else {
        const rgb = value.replace(/[^\d,]/g, "").split(",");
        return {
            r: parseInt(rgb[0]),
            g: parseInt(rgb[1]),
            b: parseInt(rgb[2]),
        };
    }
};
exports.toRgbObject = toRgbObject;
const toHslObject = (value) => {
    if (typeof value !== "string" && (0, types_1.instanceOfHSL)(value))
        return value;
    if (typeof value !== "string" && (0, types_1.instanceOfHSLA)(value)) {
        const hsl = value;
        return { h: hsl.h, s: hsl.s, l: hsl.l };
    }
    else {
        const hsl = value.replace(/[^\d,]/g, "").split(",");
        return {
            h: parseInt(hsl[0]),
            s: parseInt(hsl[1]),
            l: parseInt(hsl[2]),
        };
    }
};
exports.toHslObject = toHslObject;
const toCmykObject = (value) => {
    if (typeof value !== "string" && (0, types_1.instanceOfCMYK)(value))
        return value;
    else {
        const cmyk = value.replace(/[^\d,]/g, "").split(",");
        return {
            c: parseInt(cmyk[0]),
            m: parseInt(cmyk[1]),
            y: parseInt(cmyk[2]),
            k: parseInt(cmyk[3]),
        };
    }
};
exports.toCmykObject = toCmykObject;
//# sourceMappingURL=object.js.map