# Random 

This section provides documentation for generating random colors within the Color Convert Library. The functionality allows for the creation of random colors within specified limits and formats.

## Overview

- **`getRandomColor`**: Generates a random color based on provided options.

### getRandomColor(options: RandomOptions = defaultRandomOptions): string

Generates a random color. The function allows for extensive customization through the `RandomOptions` interface, enabling users to specify color limits and the desired output format.

#### Options

- `limit`: Defines the range for color values. It can be:
  - An array `[number, number]` specifying the global limit for RGB values.
  - An object with `min` and `max` properties for a global RGB limit.
  - An object specifying individual limits for `r`, `g`, and `b`.
- `type`: The color format for the output. Can be any `ColorType` such as HEX, RGB, HSL, etc.
- `returnType`: Defines the type of the output string. Can be `'string'` or any `ColorType`. If `'string'` is specified, the output will be in the format specified by the `type` option.

#### Default Options

By default, the function generates a random HEX color string within the full RGB color range `[0, 255]`.

#### Example Usage

Generate a random HEX color:

"""
const randomHexColor = getRandomColor();
"""

Generate a random RGB color with custom limits:

"""
const randomRgbColor = getRandomColor({
  limit: {
    r: [100, 200],
    g: [50, 150],
    b: [150, 250]
  },
  type: ColorType.RGB,
  returnType: 'string'
});
"""

### Utility

This random color generation functionality can be particularly useful for applications requiring dynamic color generation, such as for UI themes, data visualization, or simply generating unique colors for display purposes.
