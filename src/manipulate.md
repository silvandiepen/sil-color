# Color Manipulation Functions Documentation

This section details the manipulation functions available in the Color Convert Library. These functions allow for altering color properties such as lightness, saturation, and opacity, as well as performing more complex operations like color mixing.

## Functions Overview

- **`getType`**: Determines the color type of a given value.
- **`setLightness`**: Adjusts the lightness of a color.
- **`setSaturation`**: Modifies the saturation of a color.
- **`setOpacity`**: Changes the opacity of a color.
- **`lighten`**: Lightens a color by a specified amount.
- **`darken`**: Darkens a color by a specified amount.
- **`mix`**: Mixes two colors by a specified amount.
- **`altDarken`**: Alternative method to darken a color, adjusting both lightness and saturation.
- **`textColor`**: Determines the text color based on the brightness of the background.

### getType(value: COLOR): ColorType

Determines the color type of the given value based on its format.

#### Parameters

- `value`: The color value to check.

#### Returns

- `ColorType`: The determined color type.

### setLightness(value: COLOR, lightness: HSL["l"]): COLOR

Sets the lightness of the given color to the specified value.

#### Parameters

- `value`: The color to modify.
- `lightness`: The new lightness value.

#### Returns

- `COLOR`: The color with the adjusted lightness.

### setSaturation(value: COLOR, saturation: HSL["s"]): COLOR

Modifies the saturation of the given color.

#### Parameters

- `value`: The color to modify.
- `saturation`: The new saturation value.

#### Returns

- `COLOR`: The color with the adjusted saturation.

### Other Manipulation Functions

The functions `setOpacity`, `lighten`, `darken`, `mix`, `altDarken`, and `textColor` follow a similar structure, allowing for versatile color manipulations based on the input color and specified parameters.

#### Example Usage

```
const lightenedColor = lighten('#ff0000', 20);
const darkenedColor = darken('rgb(255, 0, 0)', 20);
```

## Utility

These manipulation functions provide the tools needed for dynamic color adjustments, supporting a wide range of color formats and offering flexibility for various color processing needs within the library.
