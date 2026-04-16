# Types

Internal type definitions. For the full public types reference, see the [Types guide](../../../../docs/types.md).

## Instance checks

Low-level type guards that check object shape. Used internally; prefer the `is*` functions from `is` for general use.

```ts
instanceOfRGB(obj: any): obj is RGB
instanceOfRGBA(obj: any): obj is RGBA
instanceOfHSL(obj: any): obj is HSL
instanceOfHSLA(obj: any): obj is HSLA
instanceOfHSV(obj: any): obj is HSV
instanceOfHSVA(obj: any): obj is HSVA
instanceOfCMYK(obj: any): obj is CMYK
instanceOfLAB(obj: any): obj is LAB
```

```ts
import { instanceOfRGB, instanceOfHSL } from '@sil/color';

instanceOfRGB({ r: 255, g: 0, b: 0 });       // true
instanceOfRGB({ h: 0, s: 100, l: 50 });       // false
instanceOfHSL({ h: 0, s: 100, l: 50 });       // true
```
