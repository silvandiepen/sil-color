# Types

All types are exported from `@sil/color` and reflect strict TypeScript definitions.

## Numeric primitives

| Type | Range | Used for |
|------|-------|----------|
| `Base16Number` | `0–255` | RGB channel values |
| `BinaryNumber` | `0–1` | Alpha (opacity) |
| `PercentageNumber` | `0–100` | Saturation, lightness, HSV value |
| `GradientNumber` | `0–360` | Hue angle |

## Color types

### HEX

A string in hexadecimal format, with or without an alpha channel.

```ts
type HEX = string; // '#rrggbb' or '#rrggbbaa'
```

```ts
const a: HEX = '#ff0094';
const b: HEX = '#ff009480'; // with alpha
```

### RGB / RGBA

```ts
interface RGB  { r: Base16Number; g: Base16Number; b: Base16Number }
interface RGBA extends RGB { a: BinaryNumber }
```

```ts
const rgb:  RGB  = { r: 255, g: 0, b: 148 };
const rgba: RGBA = { r: 255, g: 0, b: 148, a: 0.5 };
```

### HSL / HSLA

```ts
interface HSL  { h: GradientNumber; s: PercentageNumber; l: PercentageNumber }
interface HSLA extends HSL { a: BinaryNumber }
```

```ts
const hsl:  HSL  = { h: 320, s: 100, l: 50 };
const hsla: HSLA = { h: 320, s: 100, l: 50, a: 0.5 };
```

### HSV / HSVA

```ts
interface HSV  { h: GradientNumber; s: PercentageNumber; v: PercentageNumber }
interface HSVA extends HSV { a: BinaryNumber }
```

```ts
const hsv:  HSV  = { h: 320, s: 100, v: 100 };
const hsva: HSVA = { h: 320, s: 100, v: 100, a: 0.5 };
```

### CMYK

```ts
interface CMYK { c: PercentageNumber; m: PercentageNumber; y: PercentageNumber; k: PercentageNumber }
```

```ts
const cmyk: CMYK = { c: 0, m: 100, y: 42, k: 0 };
```

### COLOR

The `COLOR` union accepts any of the above as a single type.

```ts
type COLOR = HEX | RGB | RGBA | HSL | HSLA | HSV | HSVA | CMYK;
```

All conversion and manipulation functions accept `COLOR` as input.

## ColorType enum

`ColorType` identifies which format a color is in at runtime.

```ts
enum ColorType {
  hex   = 'hex',
  rgb   = 'rgb',
  rgba  = 'rgba',
  hsl   = 'hsl',
  hsla  = 'hsla',
  hsv   = 'hsv',
  hsva  = 'hsva',
  cmyk  = 'cmyk',
  unknown = 'unknown',
}
```

Use `getType(color)` to detect the type of any value at runtime:

```ts
import { getType, ColorType } from '@sil/color';

getType('#ff0094');              // ColorType.hex
getType({ r: 255, g: 0, b: 0 }); // ColorType.rgb
```

## Type guards

Each format has a corresponding type guard:

```ts
import { isHex, isRGB, isRGBA, isHSL, isHSLA, isHSV, isHSVA, isCMYK } from '@sil/color';

isHex('#ff0094');                   // true
isRGB({ r: 255, g: 0, b: 0 });     // true
isHSL({ h: 0, s: 100, l: 50 });    // true
```

## Instance checks

Lower-level instance checks (used internally) are also exported for advanced use:

```ts
instanceOfRGB(value)
instanceOfRGBA(value)
instanceOfHSL(value)
instanceOfHSLA(value)
instanceOfHSV(value)
instanceOfHSVA(value)
instanceOfCMYK(value)
```
