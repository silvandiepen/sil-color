# Getting Started

## Installation

```bash
npm i @sil/color
```

```bash
yarn add @sil/color
```

```bash
pnpm add @sil/color
```

## Importing

All functions are exported from the main entry point:

```ts
import { toHex, lighten, getBrightness } from '@sil/color';
```

The library is fully tree-shakeable — only the functions you import are included in your bundle. There are no side effects and no external runtime dependencies.

## Basic usage

### Convert a color

```ts
import { hexToRgb, rgbToHsl, toHex } from '@sil/color';

const rgb = hexToRgb('#ff0094');
// { r: 255, g: 0, b: 148 }

const hsl = rgbToHsl(rgb);
// { h: 320, s: 100, l: 50 }

const hex = toHex({ h: 320, s: 100, l: 50 });
// '#ff0094'
```

### Manipulate a color

```ts
import { lighten, darken, mix, setOpacity } from '@sil/color';

lighten('#336699', 10);       // '#4d80b3'  — increase lightness by 10
darken('#336699', 10);        // '#1a4d80'  — decrease lightness by 10
mix('#ff0000', '#0000ff', 50) // '#7f007f'  — mix 50/50
setOpacity('#336699', 0.5)    // rgba object with a: 0.5
```

### Format as a CSS string

```ts
import { toString, toRGB } from '@sil/color';

toString(toRGB('#ff0094'));    // "rgb(255, 0, 148)"
toString({ h: 120, s: 100, l: 50 }); // "hsl(120, 100%, 50%)"
```

### Validate a color

```ts
import { isHex, isRGB, isCOLOR } from '@sil/color';

isHex('#ff0094');  // true
isRGB({ r: 255, g: 0, b: 148 }); // true
isCOLOR('not-a-color'); // false
```

### Get color properties

```ts
import { getHue, getSaturation, getLightness, getBrightness } from '@sil/color';

getHue('#ff0094');        // 320
getSaturation('#ff0094'); // 100
getLightness('#ff0094');  // 50
getBrightness('#ff0094'); // perceived lightness 0–100 (WCAG luminance)
```

### Named colors

```ts
import { getName, nearestColor } from '@sil/color';

getName('#F0F8FF');                              // "Alice Blue"
nearestColor('#f00', ['#111', '#f11', '#0f0']); // '#f11'
```

### Random colors

```ts
import { getRandomColor } from '@sil/color';
import { ColorType } from '@sil/color';

getRandomColor();
// '#12abef'  (random HEX, default)

getRandomColor({ limit: [100, 200], type: ColorType.RGB, returnType: 'string' });
// 'rgb(142, 178, 163)'
```

## Next steps

- [Types reference](./types.md) — all supported color types
- [Convert](./functions/convert.md) — direct conversion functions
- [To helpers](./functions/to.md) — smart conversion from any format
- [Manipulate](./functions/manipulate.md) — lighten, darken, mix, and more
- [Palette](./functions/palette.md) — generate cohesive color palettes
