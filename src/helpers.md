# Helper 

This section details the helper functions available in the Color Convert Library. These utilities are designed to support various tasks within the library, such as parsing string inputs, converting color values, and performing numerical checks.

## Overview of Functions

- **`getNumbers`**: Extracts numbers from a string.
- **`sRGBtoLin`**: Converts sRGB values to linear light values.
- **`rgbToY`**: Calculates the luminance from RGB or RGBA values.
- **`YtoLstar`**: Converts luminance to perceptual lightness.
- **`isDefined`**: Checks if a value is defined.
- **`minmax`**: Clamps a number within a specified range.
- **`isBetween`**: Checks if a value is within a range.
- **`areBetween`**: Checks if all values in an array are within a range.
- **`shift`**: Removes the first element from an array and returns the array.

### getNumbers(input: string): number[]

Extracts numeric values from a string input and returns them as an array of numbers.

#### Parameters

- `input`: A string containing numbers separated by non-numeric characters.

#### Returns

- An array of numbers extracted from the input string.

#### Example

```
const numbers = getNumbers("rgb(255, 200, 150)");
```

### sRGBtoLin(colorChannel: number): number

Converts an sRGB gamma-encoded color value to a linear value.

#### Parameters

- `colorChannel`: The sRGB value between 0.0 and 1.0.

#### Returns

- The linearized color value.

### rgbToY(input: RGB | RGBA): number

Calculates the luminance of an RGB or RGBA color.

#### Parameters

- `input`: The RGB or RGBA color object.

#### Returns

- The luminance of the color, in the range [0-1].

### YtoLstar(Y: number): number

Converts a luminance value to a perceptual lightness value (L*).

#### Parameters

- `Y`: The luminance value, in the range [0-1].

#### Returns

- The perceptual lightness value.

### Other Helper Functions

The functions `isDefined`, `minmax`, `isBetween`, `areBetween`, and `shift` provide additional utility for checking definitions, clamping values within ranges, and manipulating arrays.

#### Example Usage

```
const clampedValue = minmax(150, 0, 100); // Returns 100
const isInRange = isBetween(50, 0, 100); // Returns true
```

## Utility Definitions

These helper functions serve as foundational tools for more complex operations within the library, aiding in data validation, conversion, and manipulation tasks.

Utilize these helpers to streamline processing and validation of color data, ensuring efficient and accurate color transformations.
