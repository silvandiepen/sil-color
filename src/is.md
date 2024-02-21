# Is

This section outlines the functions designed to check the type of color formats within the Color Convert Library. These functions verify if a given value matches specific color format criteria, including Hex, RGB, RGBA, HSL, HSLA, HSV, HSVA, and CMYK.

## Functions Overview

- **`isHex`**: Determines if a string is a valid Hex color.
- **`isRGB`**: Checks if a value is a valid RGB color.
- **`isRGBA`**: Verifies if a value is a valid RGBA color.
- **`isHSL`**: Confirms if a string is a valid HSL color.
- **`isHSLA`**: Determines if a string is a valid HSLA color.
- **`isHSV`**: Checks if a string is a valid HSV color.
- **`isHSVA`**: Verifies if a string is a valid HSVA color.
- **`isCMYK`**: Confirms if a string is a valid CMYK color.
- **`isCOLOR`**: Generic checker for any recognized color format.

### isHex(value: string): boolean

Determines whether the provided string is a valid hexadecimal color format.

#### Parameters

- `value`: The string to check.

#### Returns

- `boolean`: True if the string is a valid hex color, false otherwise.

### isRGB(value: string | RGB): boolean

Checks if the provided value is in a valid RGB color format.

#### Parameters

- `value`: The value to check, either a string or an RGB object.

#### Returns

- `boolean`: True if the value is a valid RGB color, false otherwise.

### isRGBA(value: string | RGBA): boolean

Verifies if the provided value is in a valid RGBA color format.

#### Parameters

- `value`: The value to check, either a string or an RGBA object.

#### Returns

- `boolean`: True if the value is a valid RGBA color, false otherwise.

### isHSL(value: string): boolean

Confirms if the provided string represents a valid HSL color.

#### Parameters

- `value`: The string to check.

#### Returns

- `boolean`: True if the string is a valid HSL color, false otherwise.

### Other Type Check Functions

Similar structure applies to `isHSLA`, `isHSV`, `isHSVA`, and `isCMYK`. Each function analyzes the input value, confirming its format against the expected color model criteria.

#### Example Usage

"""
const hexCheck = isHex('#ff00ff');
const rgbCheck = isRGB('rgb(255, 0, 255)');
"""

## Utility

These functions provide essential checks that ensure input values conform to expected color formats, facilitating accurate color conversions and manipulations within the library.
