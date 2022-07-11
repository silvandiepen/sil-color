export declare type HEX = string;
export interface RGB {
    r: number;
    g: number;
    b: number;
}
export interface RGBA extends RGB {
    a: number;
}
export declare function instanceOfRGBA(object: any): object is RGBA;
export interface HSL {
    h: number;
    s: number;
    l: number;
}
export interface HSLA extends HSL {
    a: number;
}
export declare function instanceOfHSLA(object: any): object is HSLA;
//# sourceMappingURL=types.d.ts.map