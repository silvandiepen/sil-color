# String

This documentation covers the functions within the Color Convert Library that are responsible for converting color objects into string representations. These functions support various color formats including RGB, RGBA, HSL, HSLA, HSV, HSVA, and HEX.

## Functions Overview

- **`toHslString`**: Converts an HSL or HSLA color object to its string representation.
- **`toHsvString`**: Converts an HSV or HSVA color object to its string representation.
- **`toRgbString`**: Converts an RGB or RGBA color object to its string representation.
- **`toHexString`**: Converts a HEX color value to its string representation.
- **`toString`**: Converts any supported color object to its string representation based on its type.

### toHslString(value: HSL | HSLA): string

Converts an HSL or HSLA object into a string format.

#### Parameters

- `value`: An HSL or HSLA color object.

#### Returns

- A string in the format `hsl(deg, %, %)` or `hsla(deg, %, %, alpha)`.

#### Example

"""
const hslString = toHslString({ h: 360, s: 100, l: 50 });
const hslaString = toHslString({ h: 360, s: 100, l: 50, a: 0.5 });
"""

### toHsvString(value: HSV | HSVA): string

Converts an HSV or HSVA object into a string format.

#### Parameters

- `value`: An HSV or HSVA color object.

#### Returns

- A string in the format `hsv(deg, %, %)` or `hsva(deg, %, %, alpha)`.

#### Example

"""
const hsvString = toHsvString({ h: 360, s: 100, v: 100 });
const hsvaString = toHsvString({ h: 360, s: 100, v: 100, a: 0.5 });
"""

### toRgbString(value: RGB | RGBA): string

Converts an RGB or RGBA object into a string format.

#### Parameters

- `value`: An RGB or RGBA color object.

#### Returns

- A string in the format `rgb(r, g, b)` or `rgba(r, g, b, alpha)`.

#### Example

"""
const rgbString = toRgbString({ r: 255, g: 0, b: 0 });
const rgbaString = toRgbString({ r: 255, g: 0, b: 0, a: 0.5 });
"""

### toHexString(value: HEX): string

Returns the HEX color value as a string.

#### Parameters

- `value`: A HEX color value.

#### Returns

- The HEX color value as a string.

#### Example

"""
const hexString = toHexString('#FFFFFF');
"""

### toString(value: COLOR): string

Converts any supported color object into its string representation based on its type.

#### Parameters

- `value`: A color object of any supported type.

#### Returns

- A string representation of the color in the appropriate format.

#### Example

"""
const colorString = toString({ r: 255, g: 255, b: 255 }); // RGB to String
"""

## Utility

These string conversion functions are crucial for serializing color objects for CSS, storage, or any other use case requiring color values in string format.
