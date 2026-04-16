# @sil/color

Type-safe color conversion and utilities for TypeScript/JavaScript. Convert between HEX, RGB(A), HSL(A), HSV(A), and CMYK; manipulate colors; format as strings; compute brightness; find nearest named colors; and generate random colors.

## Install

```
npm i @sil/color
```

## Quick Start

```ts
import {
  hexToRgb, rgbToHsl, hslToHex,
  toHex, toRGB, toHSL, toHSV, toCMYK,
  lighten, darken, mix, getType,
  toString, getHue, getLightness, getOpacity,
  getBrightness, nearestColor, getName, getRandomColor,
  ColorType, RGB, HSL
} from '@sil/color';

const rgb: RGB = hexToRgb('#ff0094');
const hsl: HSL = rgbToHsl(rgb) as HSL;
const hex: string = hslToHex(hsl);

const lighter = lighten('#336699', 10);   // +10 lightness
const label = toString(toRGB('#ff0'));    // "rgb(255, 255, 0)"
const lstar = getBrightness('#333');      // perceived lightness 0–100
const nearest = nearestColor('#f00', ['#111', '#f11', '#0f0']);
const name = getName('#F0F8FF');          // "Alice Blue"
const random = getRandomColor();          // e.g. "#12abef"
```

## Documentation

- API docs: generate locally with `npm run docs` (output to `docs/`).

## Examples

- See `examples/basic.ts` for end-to-end usage.

## Types (shapes)

- `HEX`: `'#rrggbb'`
- `RGB`: `{ r: 0–255, g: 0–255, b: 0–255 }`
- `RGBA`: `RGB` + `{ a: 0–1 }`
- `HSL`: `{ h: 0–360, s: 0–100, l: 0–100 }`
- `HSLA`: `HSL` + `{ a: 0–1 }`
- `HSV`: `{ h: 0–360, s: 0–100, v: 0–100 }`
- `HSVA`: `HSV` + `{ a: 0–1 }`
- `CMYK`: `{ c:0–100, m:0–100, y:0–100, k:0–100 }`
- `COLOR`: any of the above

## API Overview

- Convert (direct): `hexToRgb`, `hexToHsl`, `hexToHsv`, `hexToCmyk`, `rgbToHex`, `rgbToHsl`, `rgbToHsv`, `rgbToCmyk`, `hslToRgb`, `hslToHex`, `hslToHsv`, `hslToCmyk`, `hsvToRgb`, `hsvToHex`, `hsvToHsl`, `hsvToCmyk`, `cmykToRgb`, `cmykToHex`, `cmykToHsl`, `cmykToHsv`.
- Convert (to-helpers): `toHex`, `toRGB`, `toRGBA`, `toHSL`, `toHSLA`, `toHSV`, `toHSVA`, `toCMYK`, `toType(value, ColorType)`.
- Manipulation: `getType`, `setLightness`, `setSaturation`, `setOpacity`, `lighten`, `darken`, `mix`, `textColor`.
- Getters: `getHue`, `getSaturation`, `getLightness`, `getOpacity`, `getRed`, `getGreen`, `getBlue`.
- Strings: `toRgbString`, `toHslString`, `toHsvString`, `toString`.
- Validation: `isHex`, `isRGB`, `isRGBA`, `isHSL`, `isHSLA`, `isHSV`, `isHSVA`, `isCMYK`.
- Brightness: `getBrightness` (perceived L* 0–100).
- Names/Nearest: `getName(color)`, `nearestColor(color, colors)`.
- Random: `getRandomColor(options?)`.

Tips
- All functions are pure and TypeScript-typed (`strict` mode).
- Public API is exported from `src/index.ts`; tree-shake by importing what you need.
