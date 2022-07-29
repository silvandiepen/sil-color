# Convert

[Hex to RGB](#hex-to-rgb)
[Hex to CMYK](#hex-to-cmyk)
[Hex to HSL](#hex-to-hsl)

[RGB to Hex](#rgb-to-hex)
[RGB to CMYK](#rgb-to-cmyk)
[RGB to HSL](#rgb-to-hsl)

[HSL to Hex](#hsl-to-hex)
[HSL to RGB](#hsl-to-rgb)
[HSL to CMYK](#hsl-to-cmyk)

[CMYK to Hex](#cmyk-to-hex)
[CMYK to RGB](#cmyk-to-rgb)
[CMYK to HSL](#cmyk-to-hsl)

### Hex to CMYK

Convert a Hex string to CMYK

example:

```js
hexToCmyk('#000000')

// output:
{ c: 0, m: 0, y: 0: k: 100 }
```

### Hex to HSL

Convert a Hex string to HSL

example:

```js
hexToHsl('#000000')

// output:
{ h: 0, s: 0, l: 0 }
```

### Hex to RGB

Convert a Hex string to RGB

example:

```js
hexToRgb('#000000')

// output:
{ r: 0, g: 0, b: 0 }
```

### RGB to HSL

Convert a RGB object to HSL

example:

```js
rgbToHsl({ r: 0, g: 0, b: 0 })

// output:
{ h: 0, s: 0, l: 0 }
```

### RGB to Hex

Convert a RGB object to Hex

example:

```js
rgbToHex({ r: 0, g: 0, b: 0 });

// output:
("#000000");
```

### RGB to CMYK

Convert a RGB object to CMYK

example:

```js
rgbToHsl({ r: 0, g: 0, b: 0 })

// output:
{ c: 0, m: 0, y: 0, k: 100 }
```

### HSL to RGB

Convert a HSL object to RGB

example:

```js
hslToRgb({ h: 0, s: 0, l: 0 })

// output:
{ r: 0, g: 0, b: 0 }
```

### HSL to Hex

Convert a HSL object to HEX

example:

```js
hslToHex({ h: 0, s: 0, l: 0 });

// output:
("#000000");
```

### HSL to CMYK

Convert a HSL object to CMYK

example:

```js
hslToHex({ h: 0, s: 0, l: 0 })

// output:
{ c: 0, m: 0, y: 0, k: 100 }
```

### CMYK to RGB

Convert a CMYK object to RGB

example:

```js
hslToHex({ c: 0, m: 0, y: 0, k: 100 })

// output:
{ c: 0, m: 0, y: 0, k: 100 }
```

### CMYK to Hex

Convert a CMYK object to Hex

example:

```js
hslToHex({ c: 0, m: 0, y: 0, k: 100 });

// output:
("#000000");
```

### CMYK to HSL

Convert a CMYK object to HSL

example:

```js
hslToHex({ c: 0, m: 0, y: 0, k: 100 })

// output:
{ h: 0, s: 0, l: 0 }
```

### toHex

Convert any input to Hex

example:

```js
// Input possibilities:

const input = { h: 0, s: 0, l: 0 };
const input = "hsl(0,0,0)";
const input = { r: 0, g: 0, b: 0 };
const input = "rgb(0,0,0)";
const input = { c: 0, m: 0, y: 0, k: 100 };
const input = "#000000";

toHex(input);

// output:
("#000000");
```

### toRGB

Convert any input to RGB

example:

```js
// Input possibilities:

const input = { h: 0, s: 0, l: 0 };
const input = "hsl(0,0,0)";
const input = { r: 0, g: 0, b: 0 };
const input = "rgb(0,0,0)";
const input = { c: 0, m: 0, y: 0, k: 100 };
const input = "#000000";

toHex(input);

// output:
{ r: 0, g: 0, b: 0 }
```

### toCMYK

Convert any input to CMYK
example:

```js
// Input possibilities:

const input = { h: 0, s: 0, l: 0 };
const input = "hsl(0,0,0)";
const input = { r: 0, g: 0, b: 0 };
const input = "rgb(0,0,0)";
const input = { c: 0, m: 0, y: 0, k: 100 };
const input = "#000000";

toCmyk(input);

// output:
{ c: 0, m: 0, y: 0, k: 100}
```

### toHSL

Convert any input to HSL

example:

```js
// Input possibilities:

const input = { h: 0, s: 0, l: 0 };
const input = "hsl(0,0,0)";
const input = { r: 0, g: 0, b: 0 };
const input = "rgb(0,0,0)";
const input = { c: 0, m: 0, y: 0, k: 100 };
const input = "#000000";

toHsl(input);

// output:
{h: 0, s: 0, l: 0}
```
