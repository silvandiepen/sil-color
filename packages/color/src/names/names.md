# Names

Look up human-readable color names.

## Functions

### `getName`

```ts
getName(color: COLOR, type?: 'default' | 'simple'): string
```

Returns the name of the closest color from a built-in named color list. Uses `nearestColor` internally to find the best match.

| Parameter | Type                    | Default     | Description                                       |
|-----------|-------------------------|-------------|---------------------------------------------------|
| `color`   | `COLOR`                 | —           | Any supported color value                         |
| `type`    | `'default' \| 'simple'` | `'default'` | `'simple'` returns broad names like "Red", "Blue" |

```ts
import { getName } from '@sil/color';

getName('#F0F8FF');                  // 'Alice Blue'
getName('#ff0000');                  // 'Red'
getName({ r: 0, g: 128, b: 0 });    // 'Green'
getName({ h: 240, s: 100, l: 50 }); // 'Blue'

// Simple mode returns broad color categories
getName('#ff6347', 'simple'); // 'Red'
getName('#6495ed', 'simple'); // 'Blue'
```
