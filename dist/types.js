"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfHSLA = exports.instanceOfRGBA = void 0;
function instanceOfRGBA(object) {
    return "a" in object;
}
exports.instanceOfRGBA = instanceOfRGBA;
function instanceOfHSLA(object) {
    return "a" in object;
}
exports.instanceOfHSLA = instanceOfHSLA;
//# sourceMappingURL=types.js.map