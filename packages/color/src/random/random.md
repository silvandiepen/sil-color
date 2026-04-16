# Random

Generate random colors with optional range constraints and output format control.

## Options

```ts
interface RandomOptions {
  limit:
    | [number, number]                       // global RGB range, e.g. [100, 200]
    | { min: number; max: number }           // global RGB range as object
    | { r: [number, number] | number;        // per-channel RGB ranges
        g: [number, number] | number;
        b: [number, number] | number }
    | { h: [number, number] | number;        // per-channel HSL ranges
        s: [number, number] | number;
        l: [number, number] | number };
  type: ColorType;        // output color format (default: ColorType.HEX)
  returnType: 'string' | 'color'; // 'string' returns CSS string, 'color' returns object
}
```

## Functions

### `getRandomColor`

```ts
getRandomColor(options?: Partial<RandomOptions>): ColorType | string
```

Generates a random color. Defaults to a random HEX string across the full `[0, 255]` range.

```ts
import { getRandomColor, ColorType } from '@sil/color';

getRandomColor(); // '#12abef'

// Constrain to pastel-ish range
getRandomColor({ limit: [150, 255] }); // '#d2e1f4'

// Per-channel limits
getRandomColor({
  limit: { r: [200, 255], g: [0, 50], b: [0, 50] },
  type: ColorType.RGB,
  returnType: 'string',
}); // 'rgb(231, 12, 28)'

// Return an object instead of a string
getRandomColor({ type: ColorType.HSL, returnType: 'color' });
// { h: 143, s: 67, l: 54 }
```

---

### `getRandomPastel`

```ts
getRandomPastel(options?: Partial<RandomOptions>): ColorType | string
```

Generates a random pastel color — high lightness, low-to-medium saturation.

```ts
import { getRandomPastel } from '@sil/color';

getRandomPastel(); // '#f2d4e8'
getRandomPastel({ type: ColorType.HSL, returnType: 'string' }); // 'hsl(312, 60%, 82%)'
```

---

### `getRandomBright`

```ts
getRandomBright(options?: Partial<RandomOptions>): ColorType | string
```

Generates a random bright, saturated color.

```ts
import { getRandomBright } from '@sil/color';

getRandomBright(); // '#ff2d6b'
getRandomBright({ type: ColorType.RGB, returnType: 'string' }); // 'rgb(255, 45, 107)'
```
