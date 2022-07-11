"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToHsl = exports.hexToRgb = void 0;
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
    const r1 = rgb.r / 255;
    const g1 = rgb.g / 255;
    const b1 = rgb.b / 255;
    const maxColor = Math.max(r1, g1, b1);
    const minColor = Math.min(r1, g1, b1);
    let L = (maxColor + minColor) / 2;
    let S = 0;
    let H = 0;
    if (maxColor != minColor) {
        if (L < 0.5) {
            S = (maxColor - minColor) / (maxColor + minColor);
        }
        else {
            S = (maxColor - minColor) / (2.0 - maxColor - minColor);
        }
        if (r1 == maxColor) {
            H = (g1 - b1) / (maxColor - minColor);
        }
        else if (g1 == maxColor) {
            H = 2.0 + (b1 - r1) / (maxColor - minColor);
        }
        else {
            H = 4.0 + (r1 - g1) / (maxColor - minColor);
        }
    }
    L = L * 100;
    S = S * 100;
    H = H * 60;
    if (H < 0) {
        H += 360;
    }
    return { h: H, s: S, l: L };
};
exports.hexToHsl = hexToHsl;
//# sourceMappingURL=convert.js.map