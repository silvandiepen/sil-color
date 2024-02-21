# Get 

This section of the documentation covers the "Get" category of functions within the Color Convert Library. These functions are designed to retrieve specific properties such as hue, saturation, lightness, and RGB components from various color formats.

## Overview of Functions

- **`getMinMaxRgb`**: Extracts the minimum, maximum, and individual RGB values from an RGB color.
- **`getSaturationFromRgb`**: Calculates the saturation from an RGB color.
- **`getLightnessFromRgb`**: Determines the lightness from an RGB color.
- **`getHueFromRgb`**: Computes the hue from an RGB color.
- **`componentToHex`**: Converts a color component to a hex string.
- **`hueToRgb`**: Converts a hue to an RGB color component.
- **`getLightness`**: Retrieves the lightness component from any color format.
- **`getHue`**: Fetches the hue component from any color format.
- **`getSaturation`**: Gets the saturation component from any color format.
- **`getOpacity`**: Determines the opacity level from any color format.
- **`getRed`**, **`getGreen`**, **`getBlue`**: Retrieve the red, green, or blue components from any color format.

### getMinMaxRgb(rgb: RGB): MinMax

Extracts and returns the minimum, maximum, and rounded RGB values from an input RGB color.

#### Parameters

- `rgb: RGB` - The input RGB color.

#### Returns

- `MinMax` - An object containing the min, max, and rounded RGB values.

#### Example

"""
const minMaxRgb = getMinMaxRgb({ r: 255, g: 150, b: 100 });
"""

### getSaturationFromRgb(rgb: RGB): number

Calculates and returns the saturation from an RGB color.

#### Parameters

- `rgb: RGB` - The input RGB color.

#### Returns

- `number` - The calculated saturation.

### getLightnessFromRgb(rgb: RGB): number

Determines the lightness from an RGB color.

#### Parameters

- `rgb: RGB` - The input RGB color.

#### Returns

- `number` - The calculated lightness.

### getHueFromRgb(rgb: RGB): number

Computes the hue from an RGB color.

#### Parameters

- `rgb: RGB` - The input RGB color.

#### Returns

- `number` - The calculated hue.

### Other Get Functions

Similar structure applies to other get functions such as `getLightness`, `getHue`, `getSaturation`, `getOpacity`, `getRed`, `getGreen`, `getBlue`. Each function analyzes the input color, which can be of any supported color format (RGB, RGBA, HSL, HSLA, HEX), and returns the corresponding component value.

#### Example Usage

"""
const lightness = getLightness('hsl(120, 100%, 50%)');
const hue = getHue('rgb(255, 0, 0)');
"""

## Type Definitions

- `RGB`, `RGBA`: Types representing RGB and RGBA colors respectively.
- `HSL`, `HSLA`: Types for HSL and HSLA colors.
- `HEX`: Type for hexadecimal color strings.
- `MinMax`: Type used to return the minimum, maximum, and RGB values.

This documentation provides a detailed overview of how to retrieve various color components from different color formats using the Color Convert Library.
