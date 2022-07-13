"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = exports.toHexString = exports.toRgbString = exports.toHslString = void 0;
const manipulate_1 = require("./manipulate");
const types_1 = require("./types");
const toHslString = (value) => {
    const v = value;
    return (0, types_1.instanceOfHSLA)(v)
        ? `hsla(${v.h}, ${v.s}, ${v.l}, ${v.a})`
        : `hsl(${v["h"]}, ${v["s"]}, ${v["l"]})`;
};
exports.toHslString = toHslString;
const toRgbString = (value) => {
    const v = value;
    return (0, types_1.instanceOfRGBA)(v)
        ? `rgba(${v.r}, ${v.g}, ${v.b}, ${v.a})`
        : `rgb(${v["r"]}, ${v["g"]}, ${v["b"]})`;
};
exports.toRgbString = toRgbString;
const toHexString = (value) => {
    return `${value}`;
};
exports.toHexString = toHexString;
const toString = (value) => {
    const type = (0, manipulate_1.getType)(value);
    switch (type) {
        case types_1.ColorType.RGB:
        case types_1.ColorType.RGBA:
            return (0, exports.toRgbString)(value);
        case types_1.ColorType.HSL:
        case types_1.ColorType.HSLA:
            return (0, exports.toHslString)(value);
        case types_1.ColorType.HEX:
            return (0, exports.toHexString)(value);
        default:
            return value.toString();
    }
};
exports.toString = toString;
//# sourceMappingURL=string.js.map