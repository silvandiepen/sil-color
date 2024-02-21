# Types

This document outlines the type definitions used in the Color Convert Library. These types are foundational for handling various color formats and conversions within the library.

### Number Types

- `Base16Number`: Represents a number in the range [0, 255], commonly used for RGB values.
- `BinaryNumber`: Represents a decimal number between 0 and 1, used for alpha transparency values.
- `PercentageNumber`: Represents a percentage as a number in the range [0, 100], used for HSL and HSV saturation and lightness/values.
- `GradientNumber`: Represents an angle in degrees for the hue in HSL and HSV color models, in the range [0, 360].

### Color Types

- `HEX`: A string representing a color in hexadecimal format.
- `RGB`/`RGBA`: Represents a color in the RGB color space, with optional alpha for transparency.
- `HSL`/`HSLA`: Represents a color in the HSL color space, with optional alpha for transparency.
- `HSV`/`HSVA`: Represents a color in the HSV color space, with optional alpha for transparency.
- `CMYK`: Represents a color in the CMYK color space.

### Utility Functions

- `instanceOfRGB`, `instanceOfRGBA`, `instanceOfHSL`, `instanceOfHSLA`, `instanceOfHSV`, `instanceOfHSVA`, `instanceOfCMYK`: These functions are type guards that check if an object conforms to a specific color type interface.

### Enumerations

- `ColorType`: Enumerates the different color types supported by the library, including `rgb`, `rgba`, `hsl`, `hsla`, `hex`, `hsv`, `hsva`, `cmyk`, and `unknown`.

### Interfaces

- `COLOR`: A union type that encompasses all the supported color types.
- `MinMax`: An interface used to represent the minimum and maximum values of RGB components, used in certain color manipulation functions.

This type definition file ensures strong typing across the Color Convert Library, enhancing code reliability and developer experience.
"""
