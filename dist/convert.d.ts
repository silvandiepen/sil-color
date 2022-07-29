import { HSL, RGB, HEX, CMYK, COLOR, HSLA, RGBA } from "./types";
export declare const hexToRgb: (hex: HEX) => RGB;
export declare const hexToHsl: (hex: HEX) => HSL;
export declare const hslToRgb: (hsl: HSL | HSLA) => RGB | RGBA;
export declare const rgbToHsl: (rgb: RGB | RGBA) => HSL | HSLA;
export declare const rgbToHex: (rgb: RGB | RGBA) => HEX;
export declare const rgbToCmyk: (rgb: RGB) => CMYK;
export declare const cmykToRgb: (cmyk: CMYK) => RGB;
export declare const hslToHex: (color: HSL | HSLA) => HEX;
export declare const hslToCmyk: (color: HSL | HSLA) => CMYK;
export declare const cmykToHex: (color: CMYK) => HEX;
export declare const cmykToHsl: (color: CMYK) => HSL;
export declare const hexToCmyk: (color: HEX) => CMYK;
export declare const toHex: (color: COLOR) => HEX;
export declare const toRGB: (color: COLOR) => RGB | RGBA;
export declare const toHSL: (color: COLOR) => HSL | HSLA;
export declare const toCMYK: (color: COLOR) => CMYK;
//# sourceMappingURL=convert.d.ts.map