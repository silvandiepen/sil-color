# Brightness

Functions for measuring perceived brightness using WCAG luminance.

## Functions

### `rgbToY`

```ts
rgbToY(input: RGB | RGBA): number
```

Converts an RGB color to its relative luminance (Y), a value between 0 and 1. Uses gamma-corrected sRGB linearization per the WCAG spec.

```ts
import { rgbToY } from '@sil/color';

rgbToY({ r: 0,   g: 0,   b: 0   }); // 0       (black)
rgbToY({ r: 255, g: 255, b: 255 }); // 1       (white)
rgbToY({ r: 255, g: 0,   b: 0   }); // ~0.2126 (red)
```

---

### `getBrightness`

```ts
getBrightness(input: COLOR): number
```

Returns the perceived lightness (L\*) of any color as a value from 0–100. Based on WCAG relative luminance — more accurate than HSL lightness for accessibility decisions.

| Parameter | Type    | Description              |
|-----------|---------|--------------------------|
| `input`   | `COLOR` | Any supported color value |

```ts
import { getBrightness } from '@sil/color';

getBrightness('#000000');              // 0
getBrightness('#ffffff');              // 100
getBrightness('#ff0000');              // ~21.3 (red appears darker than green)
getBrightness({ r: 0, g: 255, b: 0 }); // ~71.5 (green appears brightest)
getBrightness({ h: 240, s: 100, l: 50 }); // ~7.2 (blue appears darkest)
```

Use `getBrightness` instead of `getLightness` when you need perceptually accurate brightness, such as for WCAG contrast checks or deciding text color.
