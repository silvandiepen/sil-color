# Get

Extract individual properties from any color format.

## Property getters

All functions accept any `COLOR` value and return a number.

### `getLightness`

```ts
getLightness(value: COLOR): number
```

Returns the HSL lightness (0–100).

```ts
import { getLightness } from '@sil/color';

getLightness('#ff0094');              // 50
getLightness({ r: 255, g: 0, b: 0 }); // 50
getLightness({ h: 120, s: 100, l: 75 }); // 75
```

---

### `getTrueLightness`

```ts
getTrueLightness(value: COLOR): number
```

Returns perceived lightness (0–100) using WCAG luminance weights (`0.2126R + 0.7152G + 0.0722B`). More accurate than `getLightness` for accessibility and contrast decisions.

```ts
getTrueLightness('#ff0000'); // ~21  (red is perceptually darker than HSL says)
getTrueLightness('#00ff00'); // ~72  (green is perceptually the brightest)
getTrueLightness('#0000ff'); // ~7   (blue is perceptually darkest)
```

---

### `getHue`

```ts
getHue(value: COLOR): number
```

Returns the hue angle (0–360).

```ts
getHue('#ff0094'); // 320
getHue({ r: 255, g: 0, b: 0 }); // 0
```

---

### `getSaturation`

```ts
getSaturation(value: COLOR): number
```

Returns the HSL saturation (0–100).

```ts
getSaturation('#ff0094'); // 100
getSaturation('#808080'); // 0  (gray has no saturation)
```

---

### `getOpacity`

```ts
getOpacity(value: COLOR): number
```

Returns the alpha value (0–1). Returns `1` for colors without an alpha channel.

```ts
getOpacity({ r: 255, g: 0, b: 0, a: 0.5 }); // 0.5
getOpacity('#ff0094');                        // 1
```

---

### `getRed` / `getGreen` / `getBlue`

```ts
getRed(value: COLOR): number
getGreen(value: COLOR): number
getBlue(value: COLOR): number
```

Return individual RGB channels (0–255).

```ts
getRed('#ff0094');   // 255
getGreen('#ff0094'); // 0
getBlue('#ff0094');  // 148
```

## RGB-specific getters

These accept only `RGB` and are used internally.

### `getHueFromRgb`

```ts
getHueFromRgb(rgb: RGB): number
```

### `getSaturationFromRgb`

```ts
getSaturationFromRgb(rgb: RGB): number
```

### `getLightnessFromRgb`

```ts
getLightnessFromRgb(rgb: RGB): number
```

### `getTrueLightnessFromRgb`

```ts
getTrueLightnessFromRgb(rgb: RGB): number
```

Perceived lightness using `0.2126R + 0.7152G + 0.0722B` luminance weights.

```ts
getTrueLightnessFromRgb({ r: 255, g: 0, b: 0 }); // ~21
getTrueLightnessFromRgb({ r: 0, g: 255, b: 0 }); // ~72
```

### `getMinMaxRgb`

```ts
getMinMaxRgb(rgb: RGB): MinMax
```

Returns min and max values of the RGB channels normalized to 0–1. Used internally by HSL/HSV calculations.
