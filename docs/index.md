# @sil/color

Type-safe color conversion and utilities for TypeScript/JavaScript.

Convert between HEX, RGB(A), HSL(A), HSV(A), and CMYK. Manipulate colors, format as CSS strings, compute brightness, find nearest named colors, and generate random colors — all with strict TypeScript types and zero runtime dependencies.

## Features

- **Color conversion** — convert directly between HEX, RGB, HSL, HSV, and CMYK
- **Smart helpers** — `toHex`, `toRGB`, `toHSL`, `toHSV`, `toCMYK` accept any color format
- **Manipulation** — lighten, darken, mix, set lightness / saturation / opacity
- **Getters** — extract hue, saturation, lightness, opacity, red, green, blue
- **Strings** — format any color as a CSS-ready string
- **Validation** — type guards for all supported formats
- **Brightness** — perceived lightness (L\*, 0–100) using WCAG luminance
- **Named colors** — look up human-readable color names
- **Nearest** — find the closest color from a set
- **Random** — generate random colors with range constraints
- **Palette** — generate and export cohesive color palettes
- **Complementary** — shades, tints, tones, and hue variants
- **Tree-shakeable** — pure functions, import only what you need

## Install

```bash
npm i @sil/color
```

## Quick Start

```ts
import {
  toHex, toRGB, toHSL,
  lighten, darken, mix,
  toString, getBrightness,
  getName, nearestColor,
  getRandomColor,
} from '@sil/color';

const lighter  = lighten('#336699', 10);
const label    = toString(toRGB('#ff0094'));   // "rgb(255, 0, 148)"
const lstar    = getBrightness('#333');        // perceived lightness 0–100
const name     = getName('#F0F8FF');           // "Alice Blue"
const closest  = nearestColor('#f00', ['#111', '#f11', '#0f0']);
const random   = getRandomColor();            // e.g. "#12abef"
```

## Documentation

- [Getting Started](./getting-started.md)
- [Types](./types.md)

### API Reference

- [Convert](./functions/convert.md)
- [To helpers](./functions/to.md)
- [Manipulate](./functions/manipulate.md)
- [Get](./functions/get.md)
- [Is (validation)](./functions/is.md)
- [String](./functions/string.md)
- [Brightness](./functions/brightness.md)
- [Contrast](./functions/contrast.md)
- [Names](./functions/names.md)
- [Nearest](./functions/nearest.md)
- [Random](./functions/random.md)
- [Palette](./functions/palette.md)
- [Complementary](./functions/complementary.md)
