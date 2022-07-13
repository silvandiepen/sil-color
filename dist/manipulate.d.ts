import { HEX, HSL, RGB, ColorType, COLOR, HSLA } from "./types";
export declare const getType: (value: any) => ColorType;
export declare const makeItHsl: (value: COLOR) => HSL;
export declare const setLightness: (value: RGB | HSL | HEX, lightness: HSL["l"]) => string | RGB | HSL;
export declare const setOpacity: (value: COLOR, opacity: HSLA["a"]) => COLOR;
export declare const lighten: (value: RGB | HSL | HEX, amount: number) => COLOR;
export declare const darken: (value: RGB | HSL | HEX, amount: number) => COLOR;
//# sourceMappingURL=manipulate.d.ts.map