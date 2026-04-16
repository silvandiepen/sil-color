# Repository Guidelines

## Project Structure & Module Organization
- Source lives in `src/` with feature folders (e.g., `convert/`, `nearest/`, `names/`).
- Tests are colocated as `*.test.ts` beside implementation files.
- Module docs live next to code as `*.md` (e.g., `src/convert/convert.md`).
- Entry point: `src/index.ts`. Build output: `dist/` (generated).

Example:
```
src/
  convert/convert.ts      convert/convert.test.ts
  brightness/brightness.ts brightness/brightness.test.ts
  types/                  types/index.ts, types.ts
```

## Build, Test, and Development Commands
- `npm run build`: Compile TypeScript to CommonJS in `dist/` via `tsc`.
- `npm test`: Run Jest tests (`ts-jest` + `babel-jest`).
- `npm run prepublishOnly`: Build and test before publish (CI safety).

Helpful direct invocations:
- `npx jest --watch`: Re-run tests on change.
- `npx jest --coverage`: Generate coverage report.

## Coding Style & Naming Conventions
- Language: TypeScript (`strict: true`). Avoid `any`; favor explicit types from `src/types`.
- Modules and files use lowercase with words separated by `/` (e.g., `nearest/nearest.ts`).
- Two-space indentation; keep functions small and pure where possible.
- Public API surfaces via `src/index.ts`. Add exports there when introducing new modules.
- No project linter is configured; match surrounding style and keep diffs minimal.

## Testing Guidelines
- Framework: Jest with `ts-jest`. Name tests `<name>.test.ts` beside the source.
- Prefer deterministic, data-driven tests; cover edge cases (invalid inputs, bounds).
- Run `npm test` locally before pushing. Use `--watch` during development.

## Commit & Pull Request Guidelines
- Use short, imperative commits; optional prefixes observed in history: `fix:`, `add:`, `feature:`. Example: `fix: conversion to hsl object`.
- Keep PRs focused and passing tests. Include:
  - Summary of changes and rationale.
  - Linked issue (if applicable) and screenshots for visual docs.
  - Tests for new behavior and updated module docs (`*.md`).
- Version bumps are handled separately; avoid bundling feature changes with release commits.

## Security & Configuration Tips
- Do not commit secrets. This library has no runtime configs; builds with `tsc` targeting `es2016` CommonJS.
- Node 18+ is recommended (types target matches `@types/node` 18).
