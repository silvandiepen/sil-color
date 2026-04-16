# Manipulate

Functions for modifying color properties. All functions preserve the input color type (HEX in → HEX out, HSL in → HSL out, etc.).

## Functions

### `getType`

```ts
getType(value: any): ColorType
```

Detects the color type of any value at runtime.

```ts
import { getType, ColorType } from '@sil/color';

getType('#ff0094');                  // ColorType.HEX
getType({ r: 255, g: 0, b: 0 });    // ColorType.RGB
getType({ h: 320, s: 100, l: 50 }); // ColorType.HSL
```

---

### `setLightness`

```ts
setLightness(value: COLOR, lightness: number): COLOR
```

Sets the lightness of a color to an exact value (0–100), preserving hue and saturation.

```ts
import { setLightness } from '@sil/color';

setLightness('#336699', 80); // '#99c2eb' — lighter
setLightness('#336699', 20); // '#112233' — darker
setLightness({ h: 210, s: 50, l: 40 }, 70); // { h: 210, s: 50, l: 70 }
```

---

### `setSaturation`

```ts
setSaturation(value: COLOR, saturation: number): COLOR
```

Sets the saturation of a color (0–100), preserving hue and lightness.

```ts
setSaturation('#336699', 100); // fully saturated
setSaturation('#336699', 0);   // grayscale
```

---

### `setOpacity`

```ts
setOpacity(value: COLOR, alpha: number): COLOR
```

Sets the opacity (alpha) of a color. Returns an alpha-capable type: RGBA for RGB/HEX/CMYK inputs, HSLA for HSL inputs.

```ts
setOpacity('#ff0094', 0.5);                  // { r: 255, g: 0, b: 148, a: 0.5 }
setOpacity({ h: 320, s: 100, l: 50 }, 0.3); // { h: 320, s: 100, l: 50, a: 0.3 }
```

---

### `lighten`

```ts
lighten(value: COLOR, amount: number): COLOR
```

Increases the lightness of a color by `amount` percentage points.

```ts
lighten('#336699', 10); // lightness +10
lighten({ h: 210, s: 50, l: 40 }, 20); // { h: 210, s: 50, l: 60 }
```

---

### `darken`

```ts
darken(value: COLOR, amount: number): COLOR
```

Decreases the lightness of a color by `amount` percentage points.

```ts
darken('#336699', 10); // lightness -10
darken({ h: 210, s: 50, l: 40 }, 10); // { h: 210, s: 50, l: 30 }
```

---

### `mix`

```ts
mix(from: RGB, to: RGB, amount: number): COLOR
```

Blends two RGB colors by `amount` percent (`0` = full `from`, `100` = full `to`).

```ts
import { mix } from '@sil/color';

mix({ r: 255, g: 0, b: 0 }, { r: 0, g: 0, b: 255 }, 50);
// { r: 128, g: 0, b: 128 } — purple
```

---

### `altDarken`

```ts
altDarken(value: COLOR, amount: number): COLOR
```

Alternative darkening that reduces both lightness and saturation, producing a more muted result than `darken`.

```ts
altDarken('#336699', 20); // darker and less saturated
```

---

### `textColor`

```ts
textColor(
  value: COLOR,
  args?: { dark: COLOR; light: COLOR; offset?: number; return?: 'color' | 'name' }
): string | COLOR
```

Returns an appropriate text color (dark or light) based on the perceived brightness of the background color. Defaults to black (`#000000`) for dark text and white (`#ffffff`) for light text.

| Option   | Type                 | Default     | Description                               |
|----------|----------------------|-------------|-------------------------------------------|
| `dark`   | `COLOR`              | `'#000000'` | Text color to use on light backgrounds    |
| `light`  | `COLOR`              | `'#ffffff'` | Text color to use on dark backgrounds     |
| `offset` | `number`             | `50`        | Brightness threshold (0–100)              |
| `return` | `'color' \| 'name'` | `'color'`   | Return the color value or its string name |

```ts
import { textColor } from '@sil/color';

textColor('#ffffff'); // '#000000' — dark text on white bg
textColor('#000000'); // '#ffffff' — light text on black bg
textColor('#336699'); // '#ffffff' — light text on mid-dark blue

// Custom dark/light colors
textColor('#336699', { dark: '#1a1a1a', light: '#f0f0f0' });
```
