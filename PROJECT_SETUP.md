# Project Setup and Development Guide

A single, reusable guide for how we set up, build, and maintain front‑end projects. It captures conventions for Vue, TypeScript, Sass, BEMM, icons, colors, components (including Toast and Popup), commits, and more.

---

## TL;DR (Quick Start)

- Use Vue 3 + TypeScript + Sass with proper BEMM.
- Follow Conventional Commits: `feat(featureName): Message` (no co-authors in commits).
- Build with Vite; test with Vitest/Jest; type-check with `tsc`.
- Use reusable components and composables; keep them small and accessible.
- Use `open-icon` via a thin `<Icon />` wrapper; icons are colorized via `currentColor`.
- Style with Sass + CSS Custom Properties. Colors are tokens first; no hard-coded hex in components.
- Use Toasts and Popups through shared components + composables; ensure focus management and ARIA.

---

## Tech Stack

- Framework: Vue 3 (Composition API, `<script setup>`)
- Language: TypeScript (strict mode)
- Styles: Sass (SCSS syntax), PostCSS Autoprefixer
- Bundler: Vite
- Testing: Vitest (or Jest if a project already uses it)
- Icons: `open-icon` (wrapped by a local `<Icon />` component)
- State: Pinia (lightweight, type-friendly)
- Routing: Vue Router (when multipage)

---

## Node, Browsers, and Dependencies

- Node: 18+ (LTS)
- Browsers: last 2 versions, no IE; define real targets in `browserslist`.
- Package managers: `npm` preferred (lockfile committed). Avoid mixing managers.

---

## Scripts (Recommended)

Add these to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview",
    "type-check": "vue-tsc --noEmit",
    "test": "vitest",
    "test:watch": "vitest --watch",
    "coverage": "vitest run --coverage",
    "lint": "eslint . --ext .ts,.vue",
    "format": "prettier --write .",
    "prepublishOnly": "npm run build && npm test"
  }
}
```

Notes:
- If Jest is used instead of Vitest, keep `ts-jest` and `babel-jest` per project setup.
- `prepublishOnly` ensures builds and tests pass before publishing.

---

## Directory Structure (Recommended)

```
src/
  assets/           # fonts, images, raw svgs
  components/       # base + composite components
  composables/      # reusable Composition API utilities
  styles/           # global styles, tokens, tools
  router/           # Vue Router (optional)
  stores/           # Pinia stores (optional)
  views/            # view-level components (routed)
  App.vue
  main.ts
```

Sass structure under `src/styles/`:

```
styles/
  _reset.scss
  _tokens.scss        # design tokens (colors, spacing, radius, z-index)
  _functions.scss
  _mixins.scss
  _typography.scss
  _utilities.scss
  index.scss          # imports all partials
```

---

## Conventional Commits

- Format: `type(scope): Message`. Scope is lowercase camelCase.
- Required types: `feat`, `fix`, `docs`, `refactor`, `perf`, `test`, `build`, `chore`, `ci`.
- Example: `feat(toast): add queueing + aria-live variants`
- Do not include co-authors in commits. Keep authorship simple and consistent.
- Keep messages imperative, concise, and focused on the change.

Branching (suggested):
- `main` protected. Feature branches: `feature/<scope>-<short-desc>`.
- Use small PRs. Include tests and screenshots for visual changes.

---

## Vue + TypeScript Standards

- Use `<script setup lang="ts">` by default.
- Strongly type props and emits; avoid `any`. Use explicit types or centralized `types/`.
- Prefer composables in `src/composables/` for shared logic.
- Favor controlled components with `v-model` where sensible.
- Keep components small and single-purpose; compose rather than monoliths.

Example component skeleton:

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useBemm } from '@/composables/useBemm'

interface Props {
  kind?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  kind: 'primary',
  disabled: false,
})

const bemm = useBemm('button')
const classes = computed(() => [
  bemm(),
  bemm(null, props.kind),
  { [bemm(null, 'disabled')]: props.disabled },
])
</script>

<template>
  <button :class="classes" :disabled="props.disabled">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  // styles…
}
</style>
```

---

## BEMM Methodology

We extend BEM with an extra "M" for state or secondary modifiers. Utility supports:

- Block: `block`
- Element: `block__element`
- Modifier: `block--modifier`
- Secondary modifier/state: `block--modifier--state` OR `is-flag` helpers

Class helpers (recommended composable):

```ts
// src/composables/useBemm.ts
export function useBemm(block: string) {
  return (element?: string | null, modifier?: string | string[] | null) => {
    const base = element ? `${block}__${element}` : block
    const mods = Array.isArray(modifier) ? modifier : modifier ? [modifier] : []
    return [base, ...mods.map((m) => `${base}--${m}`)].join(' ')
  }
}
```

Usage:

```ts
const bemm = useBemm('card')
// bemm() => 'card'
// bemm('header') => 'card__header'
// bemm(null, 'outlined') => 'card card--outlined'
// bemm('footer', ['spacious', 'sticky']) => 'card__footer card__footer--spacious card__footer--sticky'
```

Rules:
- One block per component root.
- Elements are internal parts; never used outside their block.
- Modifiers express visual variants; prefer tokens over hard-coded values.
- Add `is-*` boolean state classes via computed object when appropriate.

---

## Styling: Sass + Custom Properties

- Use CSS Custom Properties (variables) for runtime theming and design tokens.
- Use Sass variables and maps for authoring convenience; compile to custom properties.
- No hard-coded color hex in components. Use tokens and `currentColor` for icons.
- Keep component styles co-located using `<style scoped lang="scss">` or module CSS.

Tokens example (`_tokens.scss`):

```scss
:root {
  /* palette */
  --color-primary: #3b82f6;
  --color-primary-600: #2563eb;
  --color-secondary: #10b981;
  --color-danger: #ef4444;
  --color-warning: #f59e0b;
  --color-surface: #ffffff;
  --color-on-surface: #0f172a;

  /* typography */
  --font-sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  /* sizing */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --elevation-1: 0 1px 2px rgba(0,0,0,.08);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-surface: #0b1220;
    --color-on-surface: #e2e8f0;
  }
}
```

Sass helpers (`_mixins.scss`):

```scss
@mixin focus-ring {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

Component styling example:

```scss
.button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  background: var(--color-primary);
  color: #fff;
  &:focus-visible { @include focus-ring; }

  &--secondary {
    background: var(--color-secondary);
  }

  &--ghost {
    background: transparent;
    color: var(--color-primary);
    box-shadow: inset 0 0 0 1px currentColor;
  }
}
```

Utilities (`_utilities.scss`):

```scss
.is-hidden { display: none !important; }
.is-invisible { visibility: hidden !important; }
.is-sr-only { position: absolute; width: 1px; height: 1px; margin: -1px; padding: 0; border: 0; clip: rect(0 0 0 0); overflow: hidden; }
```

---

## Color Usage in Components

- Use `currentColor` for icons to inherit text color.
- Use `--color-...` custom properties for backgrounds, borders, and interactive states.
- Avoid hard-coded alpha; prefer overlays or generated variants.
- For semantic states, standardize: `info`, `success`, `warning`, `danger`.

Example mapping:

```scss
:root {
  --color-info: #3b82f6;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
}

.alert {
  color: var(--color-on-surface);
  background: color-mix(in srgb, var(--color-info) 12%, transparent);
  &--success { background: color-mix(in srgb, var(--color-success) 14%, transparent); }
  &--warning { background: color-mix(in srgb, var(--color-warning) 16%, transparent); }
  &--danger  { background: color-mix(in srgb, var(--color-danger) 14%, transparent); }
}
```

---

## Fonts

- Use variable fonts when available; fall back to static faces.
- Host locally in `src/assets/fonts/`. Do not fetch from third-party CDNs if avoidable.
- Use `font-display: swap` and preload the primary face.

Example:

```scss
/* src/styles/_typography.scss */
@font-face {
  font-family: 'InterVar';
  src: url('/src/assets/fonts/Inter-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

:root {
  --font-sans: 'InterVar', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial;
}

html { font-family: var(--font-sans); }
```

HTML preload (in `index.html`):

```html
<link rel="preload" href="/src/assets/fonts/Inter-Variable.woff2" as="font" type="font/woff2" crossorigin>
```

---

## Icons: `open-icon`

We standardize icon usage with a thin wrapper component. Icons inherit color via `currentColor` and scale via `1em` by default.

Wrapper component:

```vue
<!-- src/components/Icon.vue -->
<script setup lang="ts">
import { computed } from 'vue'
// Example import; adjust to your icon source
// import { Icon as OpenIcon } from 'open-icon/vue'

interface Props {
  name: string
  size?: number | string // px or em
  title?: string
  decorative?: boolean
}
const props = withDefaults(defineProps<Props>(), { size: 16, decorative: true })
const pixelSize = computed(() => (typeof props.size === 'number' ? `${props.size}px` : props.size))
</script>

<template>
  <!-- Replace with actual open-icon rendering mechanism -->
  <span class="icon" :style="{ width: pixelSize, height: pixelSize }" aria-hidden="true">
    <!-- Slot or inner SVG from open-icon by name -->
    <slot :name="name"></slot>
  </span>
</template>

<style scoped>
.icon { display: inline-block; color: currentColor; line-height: 1; }
.icon svg { width: 1em; height: 1em; fill: currentColor; }
</style>
```

Usage in components:

```vue
<template>
  <button :class="bemm(null, 'primary')">
    <Icon name="check" :size="16" class="button__icon" />
    Save
  </button>
</template>
```

Guidelines:
- Prefer direct imports or a build-time icon plugin for tree-shaking.
- Name icons consistently (`kebab-case`).
- Do not hard-code colors in SVG; rely on `currentColor`.

---

## Reusable Components

Principles:
- Single responsibility; one block per component.
- Props control behavior; emit events for actions; expose slots for layout.
- Keep visual variants as modifiers (`--primary`, `--ghost`, etc.).
- Accessibility first: roles, labels, focus management, keyboard.

Base components (examples):
- `Button`, `Input`, `Select`, `Checkbox`, `Switch`
- `Card`, `Badge`, `Tooltip`, `Tag`
- `Icon` (wrapper), `Spinner`

Document each in a `README.md` or story, with props, slots, events, and examples.

---

## Toasts

We provide a composable and a component that render transient notifications with semantics and accessibility.

Composable API:

```ts
// src/composables/useToast.ts
import { ref } from 'vue'

export type ToastKind = 'info' | 'success' | 'warning' | 'danger'
export interface ToastItem { id: number; kind: ToastKind; message: string; timeout?: number }

const toasts = ref<ToastItem[]>([])
let id = 0

export function useToast() {
  function push(kind: ToastKind, message: string, timeout = 4000) {
    const item = { id: ++id, kind, message, timeout }
    toasts.value.push(item)
    if (timeout > 0) setTimeout(() => remove(item.id), timeout)
  }
  function remove(itemId: number) {
    toasts.value = toasts.value.filter(t => t.id !== itemId)
  }
  return { toasts, push, remove }
}
```

Renderer component:

```vue
<!-- src/components/ToastContainer.vue -->
<script setup lang="ts">
import { useToast } from '@/composables/useToast'
import { useBemm } from '@/composables/useBemm'

const { toasts, remove } = useToast()
const bemm = useBemm('toast')
</script>

<template>
  <section :class="bemm()" aria-live="polite" aria-atomic="true">
    <div v-for="t in toasts" :key="t.id" :class="bemm('item', t.kind)" role="status">
      <span class="toast__message">{{ t.message }}</span>
      <button class="toast__close" @click="remove(t.id)" aria-label="Close">✕</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.toast {
  position: fixed; inset-block-start: var(--space-4); inset-inline-end: var(--space-4);
  display: grid; gap: var(--space-2); z-index: 1000;
}
.toast__item { padding: var(--space-2) var(--space-3); border-radius: var(--radius-md); box-shadow: var(--elevation-1); color: var(--color-on-surface); }
.toast__item--info { background: color-mix(in srgb, var(--color-info) 14%, transparent); }
.toast__item--success { background: color-mix(in srgb, var(--color-success) 14%, transparent); }
.toast__item--warning { background: color-mix(in srgb, var(--color-warning) 16%, transparent); }
.toast__item--danger { background: color-mix(in srgb, var(--color-danger) 14%, transparent); }
.toast__close { background: transparent; border: 0; color: currentColor; }
}
</style>
```

Usage:

```ts
import { useToast } from '@/composables/useToast'
const { push } = useToast()
push('success', 'Saved successfully')
```

Mount `<ToastContainer />` once near the app root.

---

## Popup / Modal

Accessible modal with focus trap, ESC/overlay close, and ARIA labels.

Component:

```vue
<!-- src/components/Popup.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useBemm } from '@/composables/useBemm'

interface Props {
  modelValue: boolean
  ariaLabel?: string
  closeOnOverlay?: boolean
}
const props = withDefaults(defineProps<Props>(), { closeOnOverlay: true })
const emit = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()
const open = ref(props.modelValue)
const bemm = useBemm('popup')

watch(() => props.modelValue, v => (open.value = v))
watch(open, v => emit('update:modelValue', v))

function onKeydown(e: KeyboardEvent) { if (e.key === 'Escape') open.value = false }

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))
</script>

<template>
  <teleport to="body">
    <div v-if="open" :class="bemm()" role="dialog" :aria-label="ariaLabel" aria-modal="true">
      <div class="popup__overlay" @click="props.closeOnOverlay && (open = false)" />
      <div class="popup__content" role="document">
        <button class="popup__close" @click="open = false" aria-label="Close">✕</button>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss">
.popup { position: fixed; inset: 0; z-index: 1100; }
.popup__overlay { position: absolute; inset: 0; background: rgba(0,0,0,.5); }
.popup__content { position: relative; margin: 10vh auto 0; max-width: 640px; background: var(--color-surface); color: var(--color-on-surface); border-radius: var(--radius-lg); padding: var(--space-4); box-shadow: var(--elevation-1); }
.popup__close { position: absolute; inset-inline-end: var(--space-3); inset-block-start: var(--space-3); background: transparent; border: 0; color: currentColor; }
</style>
```

Usage:

```vue
<template>
  <button @click="open = true">Open</button>
  <Popup v-model="open" aria-label="Demo modal">
    <h2>Title</h2>
    <p>Body content…</p>
  </Popup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Popup from '@/components/Popup.vue'
const open = ref(false)
</script>
```

Guidelines:
- Trap focus (consider `focus-trap` if needed).
- Always provide an accessible label via `aria-label` or a labelled heading + `aria-labelledby`.

---

## Class, Props, and Custom Property Conventions

- Class names: BEMM with hyphenated lowercase: `block`, `block__element`, `block--modifier`.
- Boolean states: `is-active`, `is-open` as utility classes when not tied to a block.
- Props: use kebab-case in templates, camelCase in TypeScript.
- CSS Custom Properties: `--color-*`, `--space-*`, `--radius-*`, `--elevation-*`, `--font-*`.
- Never leak implementation details through class names. Keep classes semantic.

---

## Accessibility (A11y)

- Keyboard: all interactive controls must be operable via keyboard.
- Focus: visible focus ring; focus trapped in modals; return focus to trigger.
- Roles/Labels: correct roles (`button`, `dialog`, `status`), use `aria-*` labels.
- Color contrast: meet WCAG AA minimums.
- Announcements: toasts use `aria-live` regions.

---

## Testing

- Unit: Vitest/Jest for logic and component rendering.
- Accessibility: test accessible names/roles when practical.
- Snapshot sparingly; prefer explicit expectations.

Examples:

```ts
import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

test('emits click', async () => {
  const wrapper = mount(Button)
  await wrapper.trigger('click')
  expect(wrapper.emitted()).toHaveProperty('click')
})
```

---

## Performance

- Tree-shake icons and components; prefer dynamic imports for large views.
- Avoid reactivity where static data suffices; memoize computed values if expensive.
- Use `:key` properly in lists; avoid unnecessary re-renders.

---

## Environment and Configuration

- Secrets: never commit. Use `.env.local` (ignored) for local values.
- Build target: `es2019+` for modern browsers (adjust as needed).
- Vite config: alias `@` to `src/`.

Example Vite config:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } }
})
```

---

## Code Review Checklist

- Proper BEMM classes; no leaking styles across components.
- No hard-coded colors; only tokens and custom properties.
- Accessible interactions; keyboard and screen reader friendly.
- Type-safe props/emits and no `any`.
- Reusability: props, slots, and minimal coupling.
- Conventional Commit message format respected; no co-authors.
- Tests updated/added for new behavior.

---

## How We Use This Guide

- Use this as the baseline for all new front-end projects.
- Deviations are allowed when justified; document the rationale in the project `README.md`.
- Keep this guide updated as our practices evolve.

---

## Appendix: Example Button API

Props:
- `kind`: `primary | secondary | ghost`
- `size`: `sm | md | lg`
- `loading`: boolean
- `icon`: left slot; `icon-right`: right slot

Events:
- `click` (native pass-through)

Structure:

```vue
<button class="button button--primary button--md" type="button">
  <span class="button__icon"><Icon name="check" /></span>
  <span class="button__label">Save</span>
</button>
```

States:
- `is-loading` adds spinner and disables pointer events.

---

## Appendix: Color Token Names (Suggested)

- Brand: `--color-primary`, `--color-secondary`
- Functional: `--color-success`, `--color-info`, `--color-warning`, `--color-danger`
- Surfaces: `--color-surface`, `--color-surface-alt`, `--color-backdrop`
- Text: `--color-on-surface`, `--color-on-primary`, `--color-muted`

Light/Dark surfaces adapt via media query or theme class (`.theme-dark`).

---

End of guide.

