# To

This documentation covers the functions within the Color Convert Library that are responsible for converting colors between different formats, including HEX, RGB(A), HSL(A), HSV(A), and CMYK.

## Overview

The library provides functions to convert between various color formats. It supports conversion to and from HEX, RGB(A), HSL(A), HSV(A), and CMYK formats.

## Conversion Functions

### toHex(color: COLOR): HEX

Converts any supported color format to HEX.

#### Parameters

- `color`: A color object or string in any supported format.

#### Returns

- A HEX string representation of the color.

### toRGB(color: COLOR): RGB | RGBA

Converts any supported color format to RGB or RGBA.

#### Parameters

- `color`: A color object or string in any supported format.

#### Returns

- An RGB or RGBA object.

### toRGBA(color: COLOR): RGBA

Converts any supported color format to RGBA, ensuring an alpha value is included.

#### Parameters

- `color`: A color object or string in any supported format.

#### Returns

- An RGBA object with a defined alpha value.

### toHSL(color: COLOR): HSL | HSLA

Converts any supported color format to HSL or HSLA.

#### Parameters

- `color`: A color object or string in any supported format.

#### Returns

- An HSL or HSLA object.

### toHSLA(color: COLOR): HSLA

Ensures the conversion to HSLA, including an alpha value.

#### Parameters

- `color`: A color object or string in any supported format.

#### Returns

- An HSLA object with a defined alpha value.

### toHSV(color: COLOR): HSV | HSVA

Converts any supported color format to HSV or HSVA.

#### Parameters

- `color`: A color object or string in any supported format.

#### Returns

- An HSV or HSVA object.

### toHSVA(color: COLOR): HSVA

Ensures the conversion to HSVA, including an alpha value.

#### Parameters

- `color`: A color object or string in any supported format.

#### Returns

- An HSVA object with a defined alpha value.

### toCMYK(color: COLOR): CMYK

Converts any supported color format to CMYK.

#### Parameters

- `color`: A color object or string in any supported format.

#### Returns

- A CMYK object.

### toType(color: COLOR, type: ColorType)

Converts a color to the specified type.

#### Parameters

- `color`: A color object or string in any supported format.
- `type`: The target `ColorType` to convert to.

#### Returns

- A color object in the target format specified by `type`.

## Examples

Converting from RGB to HEX:

"""
const hexColor = toHex({ r: 255, g: 255, b: 255 });
"""

Converting from HEX to RGB:

"""
const rgbColor = toRGB('#ffffff');
"""

This documentation should help users of the library to convert colors between the supported formats efficiently.
