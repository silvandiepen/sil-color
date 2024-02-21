import { toType } from "./to"
import { toString } from "./string"
import { ColorType, HSL, RGB } from "./types"

import { randomBetween } from "./helpers"


export interface RandomOptions {
    limit: [number, number] | {
        min: number,
        max: number
    } | {
        r: [number, number] | number,
        g: [number, number] | number,
        b: [number, number] | number
    } | {
        h: [number, number] | number,
        s: [number, number] | number,
        l: [number, number] | number
    },
    type: ColorType,
    returnType: string | 'string' | 'color'
}


const defaultRandomOptions: RandomOptions = {
    limit: [0, 255],
    type: ColorType.HEX,
    returnType: 'string'
}


const returnArray = (v: number | [number, number]): [number, number] => {
    if (typeof v === 'number') return [v, v];
    return v;
}

const getLimitRGB = (options: RandomOptions, key: 'r' | 'g' | 'b'): [number, number] => {
    if (options.limit instanceof Array) {
        return options.limit;
    } else if (typeof options.limit === 'object') {
        if ('r' in options.limit && key === 'r') {
            return returnArray(options.limit.r);
        } else if ('g' in options.limit && key === 'g') {
            return returnArray(options.limit.g);
        } else if ('b' in options.limit && key === 'b') {
            return returnArray(options.limit.b);
        } else if ('min' in options.limit && 'max' in options.limit) {
            return [options.limit.min, options.limit.max];
        } else {
            return [0, 255];
        }
    }
    return [0, 255];
}

const getLimitHSL = (options: RandomOptions, key: 'h' | 's' | 'l'): [number, number] => {
    if (options.limit instanceof Array) {
        return options.limit;
    } else if (typeof options.limit === 'object') {
        if ('h' in options.limit && key === 'h') {
            return returnArray(options.limit.h);
        } else if ('s' in options.limit && key === 's') {
            return returnArray(options.limit.s);
        } else if ('l' in options.limit && key === 'l') {
            return returnArray(options.limit.l);
        } else if ('min' in options.limit && 'max' in options.limit) {
            return [options.limit.min, options.limit.max];
        } else {
            return [0, 100];
        }
    }
    return [0, 100];
}

const getMixColorType = (options: RandomOptions): ColorType => {

    if ('h' in options.limit && 's' in options.limit && 'l' in options.limit) {
        return ColorType.HSL;
    }

    return ColorType.RGB;
}



const getRandomRGB = (options: RandomOptions): RGB => {

    const rgb = { r: 0, g: 0, b: 0 };

    const limitR = getLimitRGB(options, 'r');
    const limitG = getLimitRGB(options, 'g');
    const limitB = getLimitRGB(options, 'b');

    // Get random number between 0 and 255
    rgb.r = randomBetween(limitR[0], limitR[1]);
    rgb.g = randomBetween(limitG[0], limitG[1]);
    rgb.b = randomBetween(limitB[0], limitB[1]);

    return rgb as RGB;
}

const getRandomHSL = (options: RandomOptions): HSL => {

    const hsl = { h: 0, s: 0, l: 0 };

    const limitH = getLimitHSL(options, 'h');
    const limitS = getLimitHSL(options, 's');
    const limitL = getLimitHSL(options, 'l');


    // Get random number between 0 and 255
    hsl.h = randomBetween(limitH[0], limitH[1]);
    hsl.s = randomBetween(limitS[0], limitS[1]);
    hsl.l = randomBetween(limitL[0], limitL[1]);

    return hsl as HSL;
}



export function getRandomColor(
    options: Partial<RandomOptions> = {}
): ColorType | string {

    const opts: RandomOptions = { ...defaultRandomOptions, ...options };

    if (getMixColorType(opts) === ColorType.HSL) {
        const hsl = getRandomHSL(opts);

        const output = toType(hsl as HSL, opts.type as ColorType);

        if (opts.returnType === 'color') return output as ColorType;
        return toString(output);

    }


    const rgb = getRandomRGB(opts);
    const output = toType(rgb as RGB, opts.type as ColorType);

    if (opts.returnType === 'color') return output as ColorType;
    return toString(output);
}

export const getRandomPastel = (options: Partial<RandomOptions> = {}): ColorType | string => {
    return getRandomColor({ 
        ...options, limit: { 
            s: [80, 100], 
            l: [85, 95] 
        } 
    } as Partial<RandomOptions>);
}

export const getRandomBright = (options: Partial<RandomOptions> = {}): ColorType | string => {
    return getRandomColor({
        ...options, limit: {
            s: [80, 95],
            l: [40, 60],
        }
    } as Partial<RandomOptions>);
}