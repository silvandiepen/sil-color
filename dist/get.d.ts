import { COLOR, RGB, MinMax } from "./types";
export declare const getMinMaxRgb: (rgb: RGB) => MinMax;
export declare const getSaturationFromRgb: (rgb: RGB) => number;
export declare const getLightnessFromRgb: (rgb: RGB) => number;
export declare const getHueFromRgb: (rgb: RGB) => number;
export declare const componentToHex: (c: number) => string;
export declare const hueToRgb: (p: number, q: number, t: number) => number;
export declare const getLightness: (value: COLOR) => number;
export declare const getHue: (value: COLOR) => number;
export declare const getSaturation: (value: COLOR) => number;
export declare const getOpacity: (value: COLOR) => number;
export declare const getRed: (value: COLOR) => number;
export declare const getGreen: (value: COLOR) => number;
export declare const getBlue: (value: COLOR) => number;
//# sourceMappingURL=get.d.ts.map