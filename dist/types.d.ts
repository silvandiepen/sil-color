declare type NumberRange<T extends number> = number extends T ? number : _Range<T, []>;
declare type _Range<T extends number, R extends unknown[]> = R["length"] extends T ? R[number] : _Range<T, [R["length"], ...R]>;
declare type Base16Number = NumberRange<256>;
declare type BinaryNumber = number;
declare type PercentageNumber = NumberRange<101>;
declare type GradientNumber = NumberRange<361>;
export declare type HEX = string;
export interface RGB {
    r: Base16Number;
    g: Base16Number;
    b: Base16Number;
}
export interface RGBA extends RGB {
    a: BinaryNumber;
}
export declare function instanceOfRGB(obj: any): obj is RGB;
export declare function instanceOfRGBA(obj: any): obj is RGB;
export interface HSL {
    h: GradientNumber;
    s: PercentageNumber;
    l: PercentageNumber;
}
export interface HSLA extends HSL {
    a: BinaryNumber;
}
export declare function instanceOfHSL(obj: any): obj is HSL;
export declare function instanceOfHSLA(obj: any): obj is HSLA;
export interface CMYK {
    c: PercentageNumber;
    m: PercentageNumber;
    y: PercentageNumber;
    k: PercentageNumber;
}
export declare function instanceOfCMYK(obj: any): obj is CMYK;
export declare enum ColorType {
    RGB = "rgb",
    RGBA = "rgba",
    HSL = "hsl",
    HSLA = "hsla",
    HEX = "hex",
    UNKNOWN = "unknown"
}
export declare type COLOR = RGB | RGBA | HSL | HSLA | HEX;
export interface MinMax {
    r: BinaryNumber;
    g: BinaryNumber;
    b: BinaryNumber;
    min: BinaryNumber;
    max: BinaryNumber;
}
export {};
//# sourceMappingURL=types.d.ts.map