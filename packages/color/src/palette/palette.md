Palette
=======

Generate a cohesive named color palette from one or multiple base colors.

Usage
-----

```
import { generatePalette, exportPalette, DefaultRegistry } from '@sil/color'

// Single base: RED
const { colors } = generatePalette({ base: { RED: '#ff0000' } })
// colors.BLUE === '#0000ff'

// Multiple bases: RED + GREEN, using nearest-hue S/L for each target
const res = generatePalette({ base: { RED: '#c02020', GREEN: '#20c020' } })
// res.colors holds a HEX map keyed by upper-cased names

// Pinning and disabling
const pinned = generatePalette({
  base: { RED: '#a82828' },
  pins: { BLUE: '#123456' },
  disabled: ['PINK', 'PEACH']
})

// Export in different formats
const css = exportPalette(pinned.colors, 'css', { prefix: 'brand', selector: ':root' })
const json = exportPalette(pinned.colors, 'json')
const ts = exportPalette(pinned.colors, 'ts', { constName: 'THEME' })
const scss = exportPalette(pinned.colors, 'scss', { prefix: 'brand' })
const svg = exportPalette(pinned.colors, 'svg', { title: 'My Theme' })
```

How it works
------------

- Registry: Start from a registry of color names to canonical HEX (DefaultRegistry).
- Anchors: Provide one or more base colors. For each target name, we compute its canonical hue and choose the nearest base hue as anchor.
- Strategy: By default ("uniform-sl"), chromatic colors adopt the anchor's saturation and lightness for cohesive look. Optionally ("relative-sl"), each name keeps its relative S/L profile based on the registry value.
- Neutrals: BLACK, WHITE, GRAY are left unchanged by default (unless pinned or provided as a base).
- Pin/Disable: Pinned colors are not regenerated; disabled colors are omitted from outputs.

API
---

- generatePalette(options)
  - base: Record<name, COLOR>
  - registry?: Record<name, HEX>
  - pins?: Record<name, COLOR>
  - disabled?: string[] | Set<string>
  - strategy?: 'uniform-sl' | 'relative-sl'
  - neutrals?: string[]

- exportPalette(colors, format, options?)
  - format: 'css' | 'json' | 'ts' | 'scss' | 'svg'
  - options: { prefix?, selector?, constName?, title?, columns? }

Notes
-----

- Names are matched case-insensitively; results are keyed in UPPERCASE.
- Extend/override DefaultRegistry to introduce new names or change canonical hues.
- For grayscale handling beyond defaults, remove neutrals from options and pin explicit values.

