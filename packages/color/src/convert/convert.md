# Convert

Direct conversion functions between specific color formats. Each function takes a fixed input format and returns a fixed output format. If you want to convert from any format without knowing the source, use the [`to` helpers](../to/to.md) instead.

## RGB conversions

```ts
hexToRgb(hex: HEX): RGB
rgbToHex(rgb: RGB | RGBA): HEX
hslToRgb(hsl: HSL | HSLA): RGB | RGBA
rgbToHsl(rgb: RGB | RGBA): HSL | HSLA
rgbToHsv(rgb: RGB | RGBA): HSV | HSVA
rgbToCmyk(rgb: RGB | RGBA): CMYK
cmykToRgb(cmyk: CMYK): RGB
hsvToRgb(hsv: HSV | HSVA): RGB | RGBA
```

```ts
import { hexToRgb, rgbToHex, hslToRgb, rgbToHsl } from '@sil/color';

hexToRgb('#ff0094');                  // { r: 255, g: 0, b: 148 }
rgbToHex({ r: 255, g: 0, b: 148 });  // '#ff0094'
hslToRgb({ h: 320, s: 100, l: 50 }); // { r: 255, g: 0, b: 148 }
rgbToHsl({ r: 255, g: 0, b: 148 });  // { h: 320, s: 100, l: 50 }
```

## HSL conversions

```ts
hexToHsl(hex: HEX): HSL
hslToHex(src: HSL | HSLA): HEX
hslToHsv(src: HSL): HSV | HSVA
hslToCmyk(src: HSL | HSLA): CMYK
```

```ts
import { hexToHsl, hslToHex } from '@sil/color';

hexToHsl('#ff0094');                  // { h: 320, s: 100, l: 50 }
hslToHex({ h: 320, s: 100, l: 50 }); // '#ff0094'
```

## HSV conversions

```ts
hexToHsv(src: HEX): HSV | HSVA
hsvToHex(src: HSV | HSVA): HEX
hsvToHsl(hsv: HSV | HSVA): HSL | HSLA
hsvToCmyk(src: HSV | HSVA): CMYK
cmykToHsv(src: CMYK): HSV | HSVA
```

```ts
import { hexToHsv, hsvToHex } from '@sil/color';

hexToHsv('#ff0094');                    // { h: 320, s: 100, v: 100 }
hsvToHex({ h: 320, s: 100, v: 100 }); // '#ff0094'
```

## CMYK conversions

```ts
hexToCmyk(src: HEX): CMYK
cmykToHex(src: CMYK): HEX
cmykToHsl(src: CMYK): HSL
cmykToRgb(cmyk: CMYK): RGB
```

```ts
import { hexToCmyk, cmykToHex } from '@sil/color';

hexToCmyk('#ff0094');                      // { c: 0, m: 100, y: 42, k: 0 }
cmykToHex({ c: 0, m: 100, y: 42, k: 0 }); // '#ff0094'
```

## Oklab conversions

Oklab is a perceptually uniform color space, useful for smooth gradients and color mixing.

```ts
rgbToOklab(rgb: RGB): LAB
oklabToSRGB(lab: LAB): RGB
hexToOklab(src: HEX): LAB
OklabToHex(src: LAB): HEX
hslToOkLab(src: HSL): LAB
hsvToOklab(src: HSV): LAB
cmykToOklab(src: CMYK): LAB
```

```ts
import { hexToOklab, OklabToHex } from '@sil/color';

const lab = hexToOklab('#ff0094'); // { L: 0.60, a: 0.37, b: -0.15 }
OklabToHex(lab);                   // '#ff0094'
```
