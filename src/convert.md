## Convert

This module defines a comprehensive set of functions for converting between various color models including HEX, RGB(A), HSL(A), CMYK, and HSV(A). These functions are essential for color manipulation and transformation tasks in the library.

### Default Values

- **defaultValues**: Predefined default values for each color model.

### Conversion Functions

- **hexToRgb**: Converts a HEX color to its RGB representation.
- **hexToHsl**: Converts a HEX color to its HSL representation.
- **hslToRgb**: Converts an HSL or HSLA color to RGB or RGBA.
- **rgbToHsl**: Converts an RGB or RGBA color to HSL or HSLA.
- **rgbToHex**: Converts an RGB or RGBA color to HEX.
- **rgbToCmyk**: Converts an RGB or RGBA color to CMYK.
- **cmykToRgb**: Converts a CMYK color to RGB.
- **rgbToHsv**: Converts an RGB or RGBA color to HSV or HSVA.
- **hsvToRgb**: Converts an HSV or HSVA color to RGB or RGBA.
- **hsvToHsl**: Converts an HSV or HSVA color to HSL or HSLA.
- **hexToHsv**: Converts a HEX color directly to HSV or HSVA.
- **hslToHsv**: Converts an HSL color directly to HSV or HSVA.
- **cmykToHsv**: Converts a CMYK color directly to HSV or HSVA.
- **hsvToCmyk**: Converts an HSV or HSVA color to CMYK.
- **hexToCmyk**: Converts a HEX color directly to CMYK.
- **hslToCmyk**: Converts an HSL or HSLA color to CMYK.
- **hsvToHex**: Converts an HSV or HSVA color directly to HEX.
- **hslToHex**: Converts an HSL or HSLA color directly to HEX.
- **cmykToHex**: Converts a CMYK color directly to HEX.
- **cmykToHsl**: Converts a CMYK color directly to HSL.

### Usage

Each conversion function takes a color in the source color model as input and returns the color converted to the target color model. This allows for flexible color conversions across a wide range of applications.

### Examples

```python
# Convert HEX to RGB
rgbColor = hexToRgb("#ff00ff")

# Convert HSL to CMYK
cmykColor = hslToCmyk({h: 120, s: 100, l: 50})

# Convert RGB to HEX
hexColor = rgbToHex({r: 255, g: 255, b: 255})
