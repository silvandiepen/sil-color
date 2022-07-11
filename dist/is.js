"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHSL = exports.isRGB = exports.isHex = void 0;
const isHex = (value) => {
    const reg = /^#([0-9a-f]{3}){1,2}$/i;
    return reg.test(value);
};
exports.isHex = isHex;
const isRGB = (value) => {
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
const isHSL = (value) => {
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
//# sourceMappingURL=is.js.map