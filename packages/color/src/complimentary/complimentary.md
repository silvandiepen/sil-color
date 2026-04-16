# Complementary

Generate color scales — shades, tints, tones, or hue rotations — from a base color.

## Types

### `ComplimentaryType`

```ts
const ComplimentaryType = {
  SHADE: 'shade', // darker versions
  TINT:  'tint',  // lighter versions
  TONE:  'tone',  // lightness stepped up (similar to tint, less saturated feel)
  HUE:   'hue',   // evenly-spaced hue rotations
}
```

### `ComplimentaryOptions`

```ts
interface ComplimentaryOptions {
  total:  number;           // number of colors to generate (default: 3)
  type:   ComplimentaryType; // which scale to generate (default: 'tint')
  output: ColorType;        // output color format (default: ColorType.RGB)
}
```

## Functions

### `getComplimentary`

```ts
getComplimentary(color: COLOR, options?: Partial<ComplimentaryOptions>): COLOR[]
```

Returns an array of `total` colors derived from `color` using the specified strategy.

| Option   | Type                | Default          | Description                          |
|----------|---------------------|------------------|--------------------------------------|
| `total`  | `number`            | `3`              | Number of colors to generate         |
| `type`   | `ComplimentaryType` | `'tint'`         | Scale type: shade, tint, tone, or hue |
| `output` | `ColorType`         | `ColorType.RGB`  | Output format for each color         |

```ts
import { getComplimentary, ComplimentaryType, ColorType } from '@sil/color';

// 5 tints of red (progressively lighter)
getComplimentary('#ff0000', { total: 5, type: ComplimentaryType.TINT });

// 4 shades of blue (progressively darker)
getComplimentary('#0066cc', { total: 4, type: ComplimentaryType.SHADE });

// 6 evenly-spaced hues starting from green
getComplimentary('#00cc66', { total: 6, type: ComplimentaryType.HUE });

// Output as HSL objects
getComplimentary('#ff0000', {
  total: 3,
  type: ComplimentaryType.TINT,
  output: ColorType.HSL,
});
// [{ h: 0, s: 100, l: 50 }, { h: 0, s: 100, l: 67 }, { h: 0, s: 100, l: 84 }]
```
