"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHslString = exports.toRgbString = void 0;
const types_1 = require("./types");
const toRgbString = (rgb) => {
    return (0, types_1.instanceOfRGBA)(rgb)
        ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`
        : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
};
exports.toRgbString = toRgbString;
const toHslString = (hsl) => {
    return (0, types_1.instanceOfHSLA)(hsl)
        ? `hsla(${hsl.h}, ${hsl.s}, ${hsl.l}, ${hsl.a})`
        : `hsl(${hsl.h}, ${hsl.s}, ${hsl.l})`;
};
exports.toHslString = toHslString;
//# sourceMappingURL=string.js.map