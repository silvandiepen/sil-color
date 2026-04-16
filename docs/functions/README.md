---
archive: articles
---

# Functions

Complete API reference for all `@sil/color` functions, organized by module.

Each module is a focused set of pure functions — import only what you need. The library is fully tree-shakeable with no side effects.

| Module | Description |
|--------|-------------|
| [Convert](./convert.md) | Direct conversions between specific formats (e.g. `hexToRgb`, `hslToCmyk`) |
| [To](./to.md) | Smart helpers that accept any format and convert to a target (e.g. `toHex`, `toRGB`) |
| [Manipulate](./manipulate.md) | Modify color properties — lighten, darken, mix, set opacity, text contrast |
| [Get](./get.md) | Extract individual properties — hue, saturation, lightness, RGB channels |
| [Is](./is.md) | Type guards — validate whether a value is a HEX, RGB, HSL, etc. |
| [String](./string.md) | Format any color as a CSS-ready string |
| [Brightness](./brightness.md) | Perceived brightness via WCAG luminance |
| [Names](./names.md) | Look up human-readable color names |
| [Nearest](./nearest.md) | Find the closest color from a set |
| [Random](./random.md) | Generate random, pastel, or bright colors with range constraints |
| [Palette](./palette.md) | Generate and export cohesive named color palettes |
| [Complementary](./complementary.md) | Generate shades, tints, tones, and hue variants |
