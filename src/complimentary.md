# Complimentary Color Generator

The Complimentary Color Generator is a utility module that provides functions for generating complementary colors based on a given base color.

### Functions:

1. **`getComplimentary(color: COLOR, options?: Partial<ComplimentaryOptions>): Color[]`**:
   - Generates complementary colors based on the provided options.
   - **Parameters:**
     - `color`: `COLOR` - The base color for which complementary colors will be generated.
     - `options`: `Partial<ComplimentaryOptions>` (optional) - An object containing options for generating complementary colors. If not provided, default options will be used.
   - **Returns:**
     - `Color[]` - An array of colors representing the complementary colors generated.

### Enum:

2. **`ComplimentaryType`**:
   - An enum defining the types of complementary colors available for generation:
     - `SHADE`: Represents shades of the base color.
     - `TINT`: Represents tints of the base color.
     - `TONE`: Represents tones of the base color.
     - `HUE`: Represents hues derived from the base color.

### Interface:

3. **`ComplimentaryOptions`**:
   - An interface defining options for generating complementary colors:
     - `total`: `number` - The total number of complementary colors to generate.
     - `type`: `ComplimentaryType` - The type of complementary colors to generate.
     - `output`: `ColorType` - The type of output color format. (Added)

### Usage:

The usage example provided demonstrates how to use the utility functions and types:

1. **Import**:
   - Import the necessary functions and types from the module.

2. **Generate Complementary Colors**:
   - Use the `getComplimentary` function to generate complementary colors based on a base color and options.
   - The `options` parameter now includes an additional `output` property to specify the desired output color format.

Example usage:

```js
import { getComplimentary, ComplimentaryType, ComplimentaryOptions } from "@sil/color";

const baseColor = "#ff0000"; // Example base color (in hex format)
const options: Partial<ComplimentaryOptions> = {
    total: 5, // Number of complimentary colors to generate
    type: ComplimentaryType.TINT, // Type of complementary colors (TINT, SHADE, TONE, or HUE)
    output: ColorType.RGB // Output color format (Added)
};
const complimentaryColors = getComplimentary(baseColor, options);
```

3. **Usage in Application**:
   - Use the generated array of complementary colors in your application as needed.

This updated documentation reflects the addition of the `output` option for specifying the desired output color format when generating complementary colors.
