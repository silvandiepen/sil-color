"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHSLA = exports.isHSL = exports.isRGBA = exports.isRGB = exports.isHex = void 0;
const types_1 = require("./types");
const isHex = (value) => {
    if (typeof value !== "string")
        return false;
    const reg = /^#([0-9a-f]{3}){1,2}$/i;
    return reg.test(value);
};
exports.isHex = isHex;
const isRGB = (value) => {
    if (typeof value !== "string" && (0, types_1.instanceOfRGB)(value))
        return true;
    if (typeof value !== "string")
        return false;
    const rgbNumbers = [];
    value
        .replace(/[^\d,]/g, "")
        .split(",")
        .forEach((v) => rgbNumbers.push(parseInt(v)));
    return (value.startsWith("rgb(") &&
        value.endsWith(")") &&
        rgbNumbers.length == 3 &&
        !rgbNumbers.some((n) => n > 255 || n < 0) &&
        !rgbNumbers.some((n) => Math.round(n) !== n));
};
exports.isRGB = isRGB;
const isRGBA = (value) => {
    if (typeof value !== "string" && (0, types_1.instanceOfRGBA)(value))
        return true;
    if (typeof value !== "string")
        return false;
    const rgbNumbers = [];
    value
        .replace(/[^\d,]/g, "")
        .split(",")
        .forEach((v) => rgbNumbers.push(parseInt(v)));
    return (value.startsWith("rgba(") &&
        value.endsWith(")") &&
        rgbNumbers.length == 4 &&
        !rgbNumbers.some((n) => n > 255 || n < 0) &&
        !rgbNumbers.some((n) => Math.round(n) !== n));
};
exports.isRGBA = isRGBA;
const isHSL = (value) => {
    if (typeof value !== "string" && (0, types_1.instanceOfHSL)(value))
        return true;
    if (typeof value !== "string")
        return false;
    const hslNumbers = [];
    value
        .replace(/[^\d,]/g, "")
        .split(",")
        .forEach((v) => hslNumbers.push(parseInt(v)));
    return (value.startsWith("hsl(") &&
        value.endsWith(")") &&
        hslNumbers.length == 3 &&
        !hslNumbers.some((n) => n > 100 || n < 0) &&
        !hslNumbers.some((n) => Math.round(n) !== n));
};
exports.isHSL = isHSL;
const isHSLA = (value) => {
    if (typeof value !== "string" && (0, types_1.instanceOfHSLA)(value))
        return true;
    if (typeof value !== "string")
        return false;
    const hslNumbers = [];
    value
        .replace(/[^\d,]/g, "")
        .split(",")
        .forEach((v) => hslNumbers.push(parseInt(v)));
    return (value.startsWith("hsla(") &&
        value.endsWith(")") &&
        hslNumbers.length == 4 &&
        !hslNumbers.some((n) => n > 100 || n < 0) &&
        !hslNumbers.some((n) => Math.round(n) !== n));
};
exports.isHSLA = isHSLA;
//# sourceMappingURL=is.js.map