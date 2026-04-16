# Object

Convert any color value to a typed color object. Unlike the `to` helpers, these functions also accept raw CSS strings like `'rgb(255, 0, 0)'`.

## Functions

### `toRgbObject`

```ts
toRgbObject(input: string | COLOR): RGB | RGBA
```

```ts
import { toRgbObject } from '@sil/color';

toRgbObject('rgb(255, 0, 0)');               // { r: 255, g: 0, b: 0 }
toRgbObject('rgba(255, 0, 0, 0.5)');         // { r: 255, g: 0, b: 0, a: 0.5 }
toRgbObject('#ff0000');                      // { r: 255, g: 0, b: 0 }
toRgbObject({ h: 0, s: 100, l: 50 });        // { r: 255, g: 0, b: 0 }
```

---

### `toHslObject`

```ts
toHslObject(input: string | COLOR): HSL | HSLA
```

```ts
toHslObject('hsl(120, 100%, 50%)');           // { h: 120, s: 100, l: 50 }
toHslObject('hsla(120, 100%, 50%, 0.5)');     // { h: 120, s: 100, l: 50, a: 0.5 }
toHslObject('#00ff00');                       // { h: 120, s: 100, l: 50 }
```

---

### `toHsvObject`

```ts
toHsvObject(input: string | COLOR): HSV | HSVA
```

```ts
toHsvObject('hsv(120, 100%, 100%)');          // { h: 120, s: 100, v: 100 }
toHsvObject('#00ff00');                       // { h: 120, s: 100, v: 100 }
```

---

### `toCmykObject`

```ts
toCmykObject(input: string | COLOR): CMYK
```

```ts
toCmykObject('#ff0000');                      // { c: 0, m: 100, y: 100, k: 0 }
toCmykObject({ r: 255, g: 0, b: 0 });        // { c: 0, m: 100, y: 100, k: 0 }
```
