# Color

Converting colors back and forth.

## Convert Functions

Direct conversion

### hexToRgb

inputType: `HEX`
outputType: `RGB` | `RGBA`

### hexToCmyk

inputType: `HEX`
outputType: `CMYK`

### hexToHsl

inputType: `HEX`
outputType: `HSL` | `HSLA`

### hexToHsv

inputType: `HEX`
outputType: `HSV` | `HSVA`

### rgbToHsl

inputType: `RGB` | `RGBA`
outputType: `HSL` | `HSLA`

### rgbToHex

inputType: `RGB` | `RGBA`
outputType: `HEX`

### rgbToCmyk

inputType: `RGB` | `RGBA`
outputType: `CMYK`

### rgbToHsv

inputType: `RGB`
outputType: `HSV` | `HSVA`

### cmykToRgb

inputType: `CMYK`
outputType: `RGB` | `RGBA`

### cmykToHex

inputType: `CMYK`
outputType: `HEX`

### cmykToHsl

inputType: `CMYK`
outputType: `HSL` | `HSLA`

### cmykToHsv

inputType: `CMYK`
outputType: `HSV` | `HSVA`

### hslToHex

inputType: `HSL` | `HSLA`
outputType: `HEX`

### hslToRgb

inputType: `HSL` | `HSLA`
outputType: `RGB` | `RGBA`

### hslToCmyk

inputType: `HSL` | `HSLA`
outputType: `CMYK`

### hslToHsv

inputType: `HSL` | `HSLA`
outputType: `HSV` | `HSVA`

### hsvToHex

inputType: `HSV` | `HSVA`
outputType: `HEX`

### hsvToRgb

inputType: `HSV` | `HSVA`
outputType: `RGB` | `RGBA`

### hsvToCmyk

inputType: `HSV` | `HSVA`
outputType: `CMYK`

### hsvToHsl

inputType: `HSV` | `HSVA`
outputType: `HSL` | `HSLA`

## Convert Function - To

Determine the type and based on that convert to the type requested

### toHex

inputType: `COLOR`
outputType: `HEX`

### toCMYK

inputType: `COLOR`
outputType: `HSV` | `HSVA`

### toRGB

inputType: `COLOR`
outputType: `RGB` | `RGBA`

### toHSL

inputType: `COLOR`
outputType: `HSL` | `HSLA`

### toHSV

inputType: `COLOR`
outputType: `HSV` | `HSVA`

## Manipulate

### getType

inputType: `COLOR`
outputType: `ColorType`

### setLightness

inputType: COLOR
outputType: Inherit from input

### lighten

inputType: COLOR
outputType: Inherit from input

### darken

inputType: COLOR
outputType: Inherit from input

### mix

inputType: COLOR
outputType: Inherit from input

## Types

| type  |                        | example                     |
| ----- | ---------------------- | --------------------------- |
| HEX   | `string`               | `#000000`                   |
| RGB   | r: `Base16Number`,     | `{ r: 0, g: 0, b: 0}`       |
|       | g: `Base16Number`,     |
|       | b: `Base16Number`      |                             |
| RGBA  | r: `Base16Number`,     | `{ r: 0, g: 0, b: 0, a: 0}` |
|       | g: `Base16Number`,     |                             |
|       | b: `Base16Number`,     |                             |
|       | a: `BinaryNumber`,     |                             |
| HSL   | h: `GradientNumber`,   | `{ h: 0, s: 0, l: 0}`       |
|       | s: `PercentageNumber`, |                             |
|       | l: `PercentageNumber`, |                             |
| HSLA  | h: `GradientNumber`,   | `{ h: 0, s: 0, l: 0}`       |
|       | s: `PercentageNumber`, |                             |
|       | l: `PercentageNumber`, |                             |
|       | a: `BinaryNumber`,     |                             |
| HSV   | h: `GradientNumber`,   | `{ h: 0, s: 0, l: 0}`       |
|       | s: `PercentageNumber`, |                             |
|       | v: `PercentageNumber`, |                             |
| HSVA  | h: `GradientNumber`,   | `{ h: 0, s: 0, l: 0}`       |
|       | s: `PercentageNumber`, |                             |
|       | v: `PercentageNumber`, |                             |
|       | a: `BinaryNumber`,     |                             |
| CMYK  | c: `PercentageNumber`, | `{ c: 0, m: 0, y: 0, k: 0}` |
|       | m: `PercentageNumber`, |                             |
|       | y: `PercentageNumber`, |                             |
|       | k: `PercentageNumber`, |                             |
| COLOR |                        | any of the above            |

`Base16Number`: Integer between 0 and 255
`BinaryNumber`: Integer
`PercentageNumber`: Integer between 0 and 100
`GradientNumber`: Integer between 0 and 360
