# Nearest

Find the closest color from a set based on Euclidean RGB distance.

## Functions

### `distance`

```ts
distance(a: RGB, b: RGB): number
```

Calculates the Euclidean distance between two RGB colors. A smaller value means the colors are more similar.

```ts
import { distance } from '@sil/color';

distance({ r: 255, g: 0, b: 0 }, { r: 250, g: 0, b: 0 }); // 5
distance({ r: 255, g: 0, b: 0 }, { r: 0,   g: 0, b: 0 }); // 255
```

---

### `nearestColor`

```ts
nearestColor(color: COLOR, colors: COLOR[]): COLOR
```

Returns the color from `colors` that is closest to `color`. All values are compared in RGB space; the original value from the array is returned unchanged.

| Parameter | Type      | Description                  |
|-----------|-----------|------------------------------|
| `color`   | `COLOR`   | The reference color to match |
| `colors`  | `COLOR[]` | Array of candidate colors    |

```ts
import { nearestColor } from '@sil/color';

nearestColor('#ff0000', ['#000000', '#ffffff', '#ff1100']); // '#ff1100'
nearestColor('#336699', ['#224488', '#3366aa', '#999999']); // '#3366aa'

// Works with any color format
nearestColor({ r: 255, g: 0, b: 0 }, ['#000', '#f00', '#0f0']); // '#f00'
```
