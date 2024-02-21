# Brightness 

This documentation covers the functions related to calculating the brightness of colors within the Color Convert Library. These functions allow you to convert colors to their luminance and perceived lightness values, ultimately helping you determine the brightness of a given color.

## Functions Overview

- **`sRGBtoLin`**: Converts sRGB values to linear light values.
- **`rgbToY`**: Calculates the luminance of an RGB or RGBA color.
- **`getBrightness`**: Determines the perceived brightness of a color.

### sRGBtoLin(colorChannel: number): number

Converts an sRGB gamma-encoded color value (range 0.0 to 1.0) to a linear light (luminance) value.

#### Parameters

- `colorChannel`: The sRGB gamma-encoded color value.

#### Returns

- Linear light value as a number.

#### Example

```
const linearValue = sRGBtoLin(0.5);
```

### rgbToY(input: RGB | RGBA): number

Calculates the luminance of a color based on its RGB or RGBA values.

#### Parameters

- `input`: Object with `r`, `g`, `b`, and optionally `a` values representing the color.

#### Returns

- Luminance of the color as a number in the range [0-1].

#### Example

```
const luminance = rgbToY({ r: 120, g: 125, b: 130 });
```

### getBrightness(input: COLOR): number

Calculates the brightness of a color, converting it to a perceived lightness value and rounding it to two decimal places.

#### Parameters

- `input`: Color in any recognized format (RGB, RGBA, etc.).

#### Returns

- Brightness of the color as a number.

#### Example

```
const brightness = getBrightness('rgb(120, 125, 130)');
```

## Type Definitions

- `RGB`: Object with `r`, `g`, `b` properties for red, green, and blue color values, respectively.
- `RGBA`: Extends `RGB` by including an `a` property for alpha (opacity).
- `COLOR`: A generic type representing a color in any supported format.

Utilize these functions to assess and manipulate the brightness of colors in your applications effectively.
