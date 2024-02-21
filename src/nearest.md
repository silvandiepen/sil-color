# Nearest Color 

This section outlines the functionality for calculating the nearest color to a given color input within the Color Convert Library. This utility is essential for finding the closest match from a list of colors based on color distance calculations.

## Functions Overview

- **`distance`**: Calculates the distance between two RGB color values.
- **`nearestColor`**: Finds the nearest color to a given color from a list of colors.

### distance(a: RGB, b: RGB): number

Calculates the Euclidean distance between two RGB colors. This distance helps in understanding how visually similar two colors are, with a smaller distance indicating a closer match.

#### Parameters

- `a`: The first RGB color value.
- `b`: The second RGB color value.

#### Returns

- `number`: The Euclidean distance between the two colors.

#### Example

Calculate the distance between two RGB colors:

"""
const colorDistance = distance({ r: 255, g: 0, b: 0 }, { r: 250, g: 0, b: 0 }); // Close colors, small distance
"""

### nearestColor(color: COLOR, colors: COLOR[]): COLOR

Finds the closest color to the given color value from an array of color values. This function is useful for matching colors to a predefined set of colors.

#### Parameters

- `color`: The input color to match. Can be in any format recognized by the library (HEX, RGB, etc.), as it will be converted to RGB internally.
- `colors`: An array of colors to match against. Each color in the array can be in any format recognized by the library.

#### Returns

- `COLOR`: The color from the `colors` array that is closest to the input `color`.

#### Example

Find the nearest color from a list of colors:

"""
const closestColor = nearestColor('#FF0000', ['#000000', '#FFFFFF', '#FF0000']); // Should return '#FF0000'
"""

## Utility

These functions provide a foundational utility for color matching, enabling applications to suggest the nearest color name or to find color variants closely matching a given color. This is particularly useful in graphics editing, theming, and design applications where precise color matching is important.
