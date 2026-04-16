# String

Convert color objects to CSS-ready strings.

## Functions

### `toString`

```ts
toString(value: COLOR): string
```

Converts any color to its CSS string representation. The output format matches the input type.

```ts
import { toString } from '@sil/color';

toString({ r: 255, g: 0, b: 148 });          // 'rgb(255, 0, 148)'
toString({ r: 255, g: 0, b: 148, a: 0.5 });  // 'rgba(255, 0, 148, 0.5)'
toString({ h: 320, s: 100, l: 50 });          // 'hsl(320, 100%, 50%)'
toString({ h: 320, s: 100, l: 50, a: 0.5 }); // 'hsla(320, 100%, 50%, 0.5)'
toString({ h: 320, s: 100, v: 62 });          // 'hsv(320, 100%, 62%)'
toString('#ff0094');                          // '#ff0094'
```

---

### `toRgbString`

```ts
toRgbString(value: RGB | RGBA): string
```

```ts
toRgbString({ r: 255, g: 0, b: 148 });        // 'rgb(255, 0, 148)'
toRgbString({ r: 255, g: 0, b: 148, a: 0.5 }); // 'rgba(255, 0, 148, 0.5)'
```

---

### `toHslString`

```ts
toHslString(value: HSL | HSLA): string
```

```ts
toHslString({ h: 320, s: 100, l: 50 });         // 'hsl(320, 100%, 50%)'
toHslString({ h: 320, s: 100, l: 50, a: 0.5 }); // 'hsla(320, 100%, 50%, 0.5)'
```

---

### `toHsvString`

```ts
toHsvString(value: HSV | HSVA): string
```

```ts
toHsvString({ h: 320, s: 100, v: 62 });         // 'hsv(320, 100%, 62%)'
toHsvString({ h: 320, s: 100, v: 62, a: 0.5 }); // 'hsva(320, 100%, 62%, 0.5)'
```

---

### `toHexString`

```ts
toHexString(value: HEX): string
```

Returns the HEX string as-is. Useful when passing colors through a generic pipeline.

```ts
toHexString('#ff0094'); // '#ff0094'
```
