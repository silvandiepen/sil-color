# Helpers

Low-level utility functions used internally. Exported for advanced use — most users won't need them directly.

## Math utilities

### `minmax` / `clamp`

```ts
minmax(num: number, min?: number, max?: number): number
clamp(v: number, min: number, max: number): number
```

Both clamp a number to `[min, max]`. `minmax` defaults to `[0, 100]` when min/max are omitted.

```ts
minmax(150, 0, 100); // 100
minmax(-5, 0, 100);  // 0
clamp(42, 0, 255);   // 42
```

---

### `isBetween` / `areBetween`

```ts
isBetween(val: number, min: number, max: number): boolean
areBetween(vals: number[], min: number, max: number): boolean
```

```ts
isBetween(50, 0, 100);            // true
isBetween(150, 0, 100);           // false
areBetween([10, 50, 99], 0, 100); // true
areBetween([10, 50, 101], 0, 100); // false
```

---

### `randomBetween`

```ts
randomBetween(min: number, max: number): number
```

Returns a random integer between `min` and `max` inclusive.

```ts
randomBetween(0, 255); // e.g. 142
```

## Luminance utilities

### `rgbToY`

```ts
rgbToY(input: RGB | RGBA): number
```

Converts an RGB color to relative luminance (Y), range 0–1. See also [Brightness](../brightness/brightness.md).

---

### `YtoLstar`

```ts
YtoLstar(Y: number): number
```

Converts luminance Y (0–1) to perceptual lightness L\* (0–100) per the CIELAB formula.

```ts
YtoLstar(0);   // 0    (black)
YtoLstar(1);   // 100  (white)
YtoLstar(0.5); // ~76.1
```

---

### `gammaToLinear` / `linearToGamma`

```ts
gammaToLinear(c: number): number
linearToGamma(c: number): number
```

Convert a single sRGB color channel (0–1) between gamma-encoded and linear light. Used internally for accurate luminance calculations.

## String / array utilities

### `getNumbers`

```ts
getNumbers(input: string): number[]
```

Extracts all numeric values from a color string.

```ts
getNumbers('rgb(255, 128, 0)');    // [255, 128, 0]
getNumbers('hsl(120, 100%, 50%)'); // [120, 100, 50]
```

---

### `isDefined`

```ts
isDefined(value: any): boolean
```

Returns `true` if the value is not `undefined` or `null`.

---

### `shift`

```ts
shift(value: any[]): any[]
```

Returns the array without its first element. Non-mutating.
