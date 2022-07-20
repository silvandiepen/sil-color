import { HSL, RGB, HEX, CMYK, COLOR, HSLA, RGBA } from "./types";
export declare const hexToRgb: (hex: HEX) => RGB;
export declare const hexToHsl: (hex: HEX) => HSL;
export declare const hslToRgb: (hsl: HSL | HSLA) => RGB | RGBA;
export declare const rgbToHsl: (rgb: RGB | RGBA) => HSL | HSLA;
export declare const rgbToHex: (rgb: RGB | RGBA) => HEX;
export declare const hslToHex: (hsl: HSL | HSLA) => HEX;
export declare const rgbToCmyk: (rgb: RGB) => CMYK;
export declare const cmykToRgb: (cmyk: CMYK) => RGB;
export declare const cmykToHex: (cmyk: CMYK) => HEX;
export declare const toHex: (color: COLOR) => HEX;
//# sourceMappingURL=convert.d.ts.map