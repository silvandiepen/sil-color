# Complimentary 

The Complimentary Color Generator is a utility module that provides functions for generating complimentary colors based on a given base color.

## Functions:

### `getComplimentary(color: COLOR, options?: Partial<ComplimentaryOptions>): RGB[]`

Generates complimentary colors based on the provided options.

- **Parameters:**
  - `color`: `COLOR` - The base color for which complimentary colors will be generated.
  - `options`: `Partial<ComplimentaryOptions>` (optional) - An object containing options for generating complimentary colors. If not provided, default options will be used.

- **Returns:**
  - `RGB[]` - An array of RGB colors representing the complimentary colors generated.

### `ComplimentaryType`

An enum defining the types of complimentary colors available for generation:
- `SHADE`: Represents shades of the base color.
- `TINT`: Represents tints of the base color.
- `TONE`: Represents tones of the base color.
- `HUE`: Represents hues derived from the base color.

### `ComplimentaryOptions`

An interface defining options for generating complimentary colors:
- `total`: `number` - The total number of complimentary colors to generate.
- `type`: `ComplimentaryType` - The type of complimentary colors to generate.

## Usage:

1. Import the necessary functions and types:

```typescript
import { getComplimentary, ComplimentaryType, ComplimentaryOptions } from "@sil/color";
```

2. Use the `getComplimentary` function to generate complimentary colors:

```typescript
const baseColor = "#ff0000"; // Example base color (in hex format)
const options: Partial<ComplimentaryOptions> = {
    total: 5, // Number of complimentary colors to generate
    type: ComplimentaryType.TINT // Type of complimentary colors (TINT, SHADE, TONE, or HUE)
};
const complimentaryColors = getComplimentary(baseColor, options);
```

3. Use the `complimentaryColors` array in your application as needed.
