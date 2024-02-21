# Color Names 

This section provides documentation for the color naming functionality in the Color Convert Library. It includes a function that matches a given color to the nearest named color from a predefined list.

## Overview

- **`getName`**: Matches a given color to the closest named color.

### Color Names List

A predefined list of color names and their corresponding hexadecimal values is included within the library. This list includes common color names such as "Black", "Navy Blue", "Dark Blue", etc., paired with their hex codes.

### getName(color: COLOR): string

Finds the closest color name for a given color value.

#### Parameters

- `color`: The color value to match. This can be in any color format recognized by the library (HEX, RGB, HSL, etc.), as the function internally converts and compares these values to find the closest match.

#### Returns

- `string`: The name of the closest color.

#### Example

Find the name of the closest color to a given HEX value:

```
const closestColorName = getName('#F0F8FF'); // Should return "Alice Blue"
```

This function utilizes the `nearestColor` method to compare the input color against a list of predefined colors and find the closest match based on color space distance. The result is the name of the color that most closely matches the input color.

## Utility

This functionality is particularly useful for applications that require human-readable color names, such as user interfaces that allow color selection or for educational purposes, providing a more intuitive understanding of color values.
