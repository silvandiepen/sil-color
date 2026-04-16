# Is (Validation)

Type-guard functions that check whether a value is a valid color in a specific format. All return `boolean`.

## Functions

### `isHex`

```ts
isHex(value: string): boolean
```

```ts
isHex('#ff0094');   // true
isHex('#fff');      // true
isHex('ff0094');    // false — missing #
isHex('#gg0094');   // false — invalid characters
```

---

### `isRGB` / `isRGBA`

```ts
isRGB(value: string | any): boolean
isRGBA(value: string | any): boolean
```

Accepts both CSS strings and plain objects.

```ts
isRGB({ r: 255, g: 0, b: 0 });       // true
isRGB('rgb(255, 0, 0)');              // true
isRGBA({ r: 255, g: 0, b: 0, a: 1 }); // true
isRGBA('rgba(255, 0, 0, 0.5)');       // true
isRGB({ r: 255, g: 0 });              // false — missing b
```

---

### `isHSL` / `isHSLA`

```ts
isHSL(value: string): boolean
isHSLA(value: string): boolean
```

```ts
isHSL({ h: 120, s: 100, l: 50 });        // true
isHSL('hsl(120, 100%, 50%)');            // true
isHSLA({ h: 120, s: 100, l: 50, a: 1 }); // true
```

---

### `isHSV` / `isHSVA`

```ts
isHSV(value: string): boolean
isHSVA(value: string): boolean
```

```ts
isHSV({ h: 120, s: 100, v: 50 });        // true
isHSVA({ h: 120, s: 100, v: 50, a: 1 }); // true
```

---

### `isCMYK`

```ts
isCMYK(value: string): boolean
```

```ts
isCMYK({ c: 0, m: 100, y: 42, k: 0 }); // true
```

---

### `isCOLOR`

```ts
isCOLOR(value: any): boolean
```

Returns `true` if the value is any recognized color format.

```ts
isCOLOR('#ff0094');              // true
isCOLOR({ r: 255, g: 0, b: 0 }); // true
isCOLOR('not-a-color');          // false
isCOLOR(null);                   // false
```
