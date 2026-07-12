# Contrast

Functions for measuring WCAG contrast and picking a legible ink color.

## Functions

### `contrastRatio`

```ts
contrastRatio(a: COLOR, b: COLOR): number
```

Returns the WCAG contrast ratio between two colors, from `1` (no contrast) to `21` (black vs. white).

```ts
import { contrastRatio } from '@sil/color';

contrastRatio('#000000', '#ffffff'); // 21
contrastRatio('#336699', '#336699'); // 1
```

---

### `getContrastColor`

```ts
getContrastColor(input: COLOR): string
```

Picks whichever of `#ffffff` or `#000000` has the higher WCAG contrast ratio against `input`, and returns it.

| Parameter | Type    | Description              |
|-----------|---------|--------------------------|
| `input`   | `COLOR` | Background color to find readable ink for |

```ts
import { getContrastColor } from '@sil/color';

getContrastColor('#000000'); // '#ffffff'
getContrastColor('#ffffff'); // '#000000'
getContrastColor('#1DA1F2'); // '#000000' — a saturated blue that reads as light by L* but is more legible with black ink
```

Prefer `getContrastColor` over a flat `getBrightness` cutoff when deciding text/logo ink color: a single perceived-lightness threshold misjudges saturated hues (blues and purples in particular contribute little to perceived luminance, so they can read as "light" by L* while still needing dark ink for real contrast). Comparing actual contrast against both inks holds up across every hue without needing per-case tuning.
