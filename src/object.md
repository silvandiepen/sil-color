# Object 

This section documents the object conversion functions within the Color Convert Library. These functions are designed to convert color values from various formats into structured object representations, such as RGB, RGBA, HSL, HSLA, HSV, HSVA, and CMYK.

## Functions Overview

- **`toHslObject`**: Converts a color value to an HSL or HSLA object.
- **`toHsvObject`**: Converts a color value to an HSV or HSVA object.
- **`toRgbObject`**: Converts a color value to an RGB or RGBA object.
- **`toCmykObject`**: Converts a color value to a CMYK object.

### toHslObject(input: string | COLOR): HSL | HSLA

Converts a given color input into an HSL (Hue, Saturation, Lightness) or HSLA (with Alpha channel) object.

#### Parameters

- `input`: The color value to be converted. Can be a string or any COLOR type recognized by the library.

#### Returns

- An `HSL` or `HSLA` object depending on the input. Includes alpha if specified.

#### Example

Convert a color string to an HSL object:

"""
const hslColor = toHslObject('hsl(120, 100%, 50%)');
"""

### toHsvObject(input: string | COLOR): HSV | HSVA

Converts a given color input into an HSV (Hue, Saturation, Value) or HSVA (with Alpha channel) object.

#### Parameters

- `input`: The color value to be converted, either as a string or COLOR type.

#### Returns

- An `HSV` or `HSVA` object, including alpha if specified.

#### Example

Convert a color string to an HSV object:

"""
const hsvColor = toHsvObject('hsv(120, 100%, 50%)');
"""

### toRgbObject(input: string | COLOR): RGB | RGBA

Converts a given color input into an RGB (Red, Green, Blue) or RGBA (with Alpha channel) object.

#### Parameters

- `input`: The color value to be converted. Can be in the form of a string or any COLOR type.

#### Returns

- An `RGB` or `RGBA` object, including alpha if applicable.

#### Example

Convert a color string to an RGB object:

"""
const rgbColor = toRgbObject('rgb(255, 0, 0)');
"""

### toCmykObject(input: string | COLOR): CMYK

Converts a given color input into a CMYK (Cyan, Magenta, Yellow, Key/Black) object.

#### Parameters

- `input`: The color value to be converted, either as a string or a COLOR type.

#### Returns

- A `CMYK` object representing the color.

#### Example

Convert a CMYK color string to a CMYK object:

"""
const cmykColor = toCmykObject('cmyk(0, 0, 0, 100)');
"""

## Utility

These object conversion functions provide a flexible and consistent approach to working with color data within the library, facilitating easy manipulation, comparison, and conversion across different color formats.
