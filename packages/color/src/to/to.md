# To

Smart conversion helpers that accept any color format and convert to a target format. Unlike the direct conversion functions in `convert`, these handle format detection automatically.

## Functions

### `toHex`

```ts
toHex(color: COLOR): HEX
```

```ts
import { toHex } from '@sil/color';

toHex({ r: 255, g: 0, b: 148 });      // '#ff0094'
toHex({ h: 320, s: 100, l: 50 });     // '#ff0094'
toHex({ c: 0, m: 100, y: 42, k: 0 }); // '#ff0094'
```

---

### `toRGB` / `toRGBA`

```ts
toRGB(color: COLOR): RGB | RGBA
toRGBA(color: COLOR): RGBA
```

`toRGBA` always includes an `a` value (defaults to `1` if the input has no alpha).

```ts
toRGB('#ff0094');                    // { r: 255, g: 0, b: 148 }
toRGBA('#ff0094');                   // { r: 255, g: 0, b: 148, a: 1 }
toRGB({ h: 320, s: 100, l: 50 });   // { r: 255, g: 0, b: 148 }
```

---

### `toHSL` / `toHSLA`

```ts
toHSL(color: COLOR): HSL | HSLA
toHSLA(color: COLOR): HSLA
```

`toHSLA` always includes an `a` value.

```ts
toHSL('#ff0094');                       // { h: 320, s: 100, l: 50 }
toHSLA('#ff0094');                      // { h: 320, s: 100, l: 50, a: 1 }
toHSL({ r: 255, g: 0, b: 148 });       // { h: 320, s: 100, l: 50 }
```

---

### `toHSV` / `toHSVA`

```ts
toHSV(color: COLOR): HSV | HSVA
toHSVA(color: COLOR): HSVA
```

```ts
toHSV('#ff0094');                   // { h: 320, s: 100, v: 100 }
toHSVA('#ff0094');                  // { h: 320, s: 100, v: 100, a: 1 }
```

---

### `toCMYK`

```ts
toCMYK(color: COLOR): CMYK
```

```ts
toCMYK('#ff0094'); // { c: 0, m: 100, y: 42, k: 0 }
toCMYK({ r: 255, g: 0, b: 148 }); // { c: 0, m: 100, y: 42, k: 0 }
```

---

### `toType`

```ts
toType(color: COLOR, type: ColorType): COLOR
```

Converts a color to the format specified by a `ColorType` enum value. Useful when the target format is determined at runtime.

```ts
import { toType, ColorType } from '@sil/color';

toType('#ff0094', ColorType.RGB);  // { r: 255, g: 0, b: 148 }
toType('#ff0094', ColorType.HSL);  // { h: 320, s: 100, l: 50 }
toType('#ff0094', ColorType.CMYK); // { c: 0, m: 100, y: 42, k: 0 }
```
