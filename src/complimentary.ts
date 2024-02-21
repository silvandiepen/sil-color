import { toRGB, toHSL } from "./to";
import { COLOR, HSL, RGB } from "./types"


export const ComplimentaryType = {
    SHADE: 'shade',
    TINT: 'tint',
    TONE: 'tone',
    HUE: 'hue'
}
export type ComplimentaryType = typeof ComplimentaryType[keyof typeof ComplimentaryType];

export interface ComplimentaryOptions {
    total: number,
    type: ComplimentaryType
}
const ComplimentaryDefaultOptions: ComplimentaryOptions = {
    total: 3,
    type: 'tint'
}

const getShades = (color: COLOR, total: number): RGB[] => {
    const hsl = toHSL(color);
    const lightnessStep = (hsl.l - 10) / total;
    const shades = [];

    for (let i = 0; i < total; i++) {
        const newLightness = hsl.l - i * lightnessStep;
        const newColor = {
            h: hsl.h,
            s: hsl.s,
            l: newLightness,
        }
        shades.push(newColor);
    }
    return shades.map((color) => toRGB(color as HSL));
}
const getTints = (color: COLOR, total: number): RGB[] => {

    const hsl = toHSL(color);
    const lightnessStep = (100 - hsl.l) / total;
    const tints = [];

    for (let i = 0; i < total; i++) {
        const newLightness = hsl.l + i * lightnessStep;
        const newColor = {
            h: hsl.h,
            s: hsl.s,
            l: newLightness
        }
        tints.push(newColor);
    }
    return tints.map((color) => toRGB(color as HSL));
}
const getTones = (color: COLOR, total: number): RGB[] => {
    const hsl = toHSL(color);
    const lightnessStep = (100 - hsl.l) / total;
    const tones = [];

    for (let i = 0; i < total; i++) {
        const newLightness = hsl.l + i * lightnessStep;
        const newColor = {
            h: hsl.h,
            s: hsl.s,
            l: newLightness,
        };
        tones.push(newColor);
    }


    return tones.map((color) => toRGB(color as HSL));
}
const getHues = (color: COLOR, total: number): RGB[] => {
    const hsl = toHSL(color);
    const hueStep = 360 / total;
    const hues = [];

    for (let i = 0; i < total; i++) {
        const newHue = hsl.h + i * hueStep;
        const newColor = {
            h: newHue,
            s: hsl.s,
            l: hsl.l,
        };
        hues.push(newColor);
    }
    return hues.map((color) => toRGB(color as HSL));
}


export const getComplimentary = (color: COLOR, options: Partial<ComplimentaryOptions> = {}) => {

    const opts: ComplimentaryOptions = { ...ComplimentaryDefaultOptions, ...options };

    const { total, type } = opts;

    switch (type) {
        case ComplimentaryType.SHADE:
            return getShades(color, total);
        case ComplimentaryType.TINT:
            return getTints(color, total);
        case ComplimentaryType.TONE:
            return getTones(color, total);
        default:
        case ComplimentaryType.HUE:
            return getHues(color, total);
    }



}