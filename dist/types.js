"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorType = exports.instanceOfCMYK = exports.instanceOfHSLA = exports.instanceOfHSL = exports.instanceOfRGBA = exports.instanceOfRGB = void 0;
function instanceOfRGB(obj) {
    return ("r" in obj &&
        "g" in obj &&
        "b" in obj &&
        !("a" in obj) &&
        Object.keys(obj).length == 3);
}
exports.instanceOfRGB = instanceOfRGB;
function instanceOfRGBA(obj) {
    return ("r" in obj &&
        "g" in obj &&
        "b" in obj &&
        "a" in obj &&
        Object.keys(obj).length == 4);
}
exports.instanceOfRGBA = instanceOfRGBA;
function instanceOfHSL(obj) {
    return ("h" in obj &&
        "s" in obj &&
        "l" in obj &&
        !("a" in obj) &&
        Object.keys(obj).length == 3);
}
exports.instanceOfHSL = instanceOfHSL;
function instanceOfHSLA(obj) {
    return ("h" in obj &&
        "s" in obj &&
        "l" in obj &&
        "a" in obj &&
        Object.keys(obj).length == 4);
}
exports.instanceOfHSLA = instanceOfHSLA;
function instanceOfCMYK(obj) {
    return ("c" in obj &&
        "m" in obj &&
        "y" in obj &&
        "k" in obj &&
        Object.keys(obj).length == 4);
}
exports.instanceOfCMYK = instanceOfCMYK;
var ColorType;
(function (ColorType) {
    ColorType["RGB"] = "rgb";
    ColorType["RGBA"] = "rgba";
    ColorType["HSL"] = "hsl";
    ColorType["HSLA"] = "hsla";
    ColorType["HEX"] = "hex";
    ColorType["UNKNOWN"] = "unknown";
})(ColorType = exports.ColorType || (exports.ColorType = {}));
//# sourceMappingURL=types.js.map