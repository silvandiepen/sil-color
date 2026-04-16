import { toHSL, toHex } from "../to/to";
import type { COLOR, HSL, HEX } from "../types/types";

// Default color registry: name -> canonical hex. This can be extended/overridden by the consumer.
export const DefaultRegistry: Record<string, HEX> = {
  RED: "#FF0000",
  GREEN: "#008000",
  BLUE: "#0000FF",
  YELLOW: "#FFFF00",
  ORANGE: "#FFA500",
  PURPLE: "#800080",
  BROWN: "#A52A2A",
  MAROON: "#800000",
  MAGENTA: "#FF00FF",
  TURQUOISE: "#40E0D0",
  CRIMSON: "#DC143C",
  PINK: "#FFC0CB",
  HOTPINK: "#FF69B4",
  CORAL: "#FF7F50",
  GOLD: "#FFD700",
  PEACH: "#FFDAB9",
  KHAKI: "#F0E68C",
  LAVENDER: "#E6E6FA",
  INDIGO: "#4B0082",
  BLACK: "#000000",
  WHITE: "#FFFFFF",
  GRAY: "#808080",
  LIME: "#00FF00",
  OLIVE: "#808000",
  AQUAMARINE: "#66CDAA",
  TEAL: "#008080",
  SKYBLUE: "#87CEEB",
  NAVY: "#000080",
  MIDNIGHT: "#191970",
  TAN: "#D2B48C",
};

export type PaletteStrategy = "uniform-sl" | "relative-sl";

export interface PaletteOptions {
  // Map of base color names to concrete color values (hex/rgb/hsl supported).
  base: Record<string, COLOR>;
  // Registry of target color names to canonical hex. Defaults to DefaultRegistry.
  registry?: Record<string, HEX>;
  // Map of pinned color names to fixed color values (won't be re-generated).
  pins?: Record<string, COLOR>;
  // List or set of disabled color names (excluded from exports and output map if true).
  disabled?: string[] | Set<string>;
  // Generation strategy. See docs; default "uniform-sl".
  strategy?: PaletteStrategy;
  // Optional: force using this base's S/L for all chromatic colors.
  // Name is case-insensitive and must exist in `base`.
  leadBase?: string;
  // Optional list of neutrals to keep constant regardless of base (unless pinned or explicitly provided in base).
  neutrals?: string[];
}

export interface GeneratedPalette {
  colors: Record<string, HEX>;
  usedBaseFor: Record<string, string>; // which base anchor was used per color
  pins: string[];
  disabled: string[];
}

const toSet = (v?: string[] | Set<string>): Set<string> => {
  if (!v) return new Set();
  return v instanceof Set ? v : new Set(v);
};

const hueDistance = (a: number, b: number) => {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
};

// Return S/L factors relative to a hypothetical full chroma middle lightness baseline (100/50)
// When strategy = "relative-sl", these factors are multiplied with the chosen base S/L to preserve the
// perceived weight of names like NAVY or TAN. For "uniform-sl" this returns 1,1 effectively.
const deriveRelativeFactors = (nameHsl: HSL): { fs: number; fl: number } => {
  const baseS = 100; // reference saturation
  const baseL = 50;  // reference lightness mid
  const fs = nameHsl.s / baseS;
  // Lightness factor: ratio to mid; keep within [0.2, 2] bounds to avoid extremes
  const flRaw = nameHsl.l / baseL;
  const fl = Math.max(0.2, Math.min(2, flRaw));
  return { fs, fl };
};

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export const generatePalette = (options: PaletteOptions): GeneratedPalette => {
  const registry = options.registry ?? DefaultRegistry;
  const pins = options.pins ?? {};
  const disabledSet = toSet(options.disabled);
  const neutrals = new Set<string>((options.neutrals ?? ["BLACK", "WHITE", "GRAY"]).map((n) => n.toUpperCase()));
  const strategy = options.strategy ?? "uniform-sl";
  const leadBaseName = options.leadBase ? options.leadBase.toUpperCase() : undefined;

  // Precompute base anchors (name -> HSL)
  const baseEntries = Object.entries(options.base).map(([name, color]) => [name.toUpperCase(), toHSL(color) as HSL]) as Array<[
    string,
    HSL
  ]>;
  if (baseEntries.length === 0) {
    throw new Error("generatePalette: at least one base color is required");
  }

  // Helper to choose the base anchor by closest hue
  const chooseBaseForHue = (h: number): { baseName: string; baseHsl: HSL } => {
    let best: { baseName: string; baseHsl: HSL; d: number } | null = null;
    for (const [bn, bHsl] of baseEntries) {
      const d = hueDistance(h, bHsl.h);
      if (!best || d < best.d) best = { baseName: bn, baseHsl: bHsl, d };
    }
    // Non-null because we ensured baseEntries.length > 0
    return { baseName: best!.baseName, baseHsl: best!.baseHsl };
  };
  const resolveLead = (): { name?: string; hsl?: HSL } => {
    if (!leadBaseName) return {};
    const found = baseEntries.find(([bn]) => bn === leadBaseName);
    if (!found) return {};
    return { name: found[0], hsl: found[1] };
  };
  const lead = resolveLead();

  const result: Record<string, HEX> = {};
  const usedBaseFor: Record<string, string> = {};

  for (const [rawName, canonHex] of Object.entries(registry)) {
    const name = rawName.toUpperCase();

    if (disabledSet.has(name)) continue;

    // If explicitly provided as base, use that color (respecting pin later if present)
    const baseMatch = baseEntries.find(([bn]) => bn === name);
    if (baseMatch) {
      const hex = toHex(options.base[rawName] ?? options.base[name]);
      result[name] = hex;
      usedBaseFor[name] = name;
      continue;
    }

    // Pinned override wins
    if (pins[name]) {
      result[name] = toHex(pins[name]);
      usedBaseFor[name] = "PINNED";
      continue;
    }

    // Keep neutrals constant unless they are explicitly provided as base or pinned
    if (neutrals.has(name)) {
      result[name] = toHex(canonHex);
      usedBaseFor[name] = "NEUTRAL";
      continue;
    }

    // Canonical hue of the name based on registry value
    const nameHsl = toHSL(canonHex) as HSL;
    const { baseName, baseHsl } = chooseBaseForHue(nameHsl.h);

    // If a lead base is defined, use its S/L for all chromatic colors
    const anchor = lead.hsl ?? baseHsl;
    let s: number = (anchor.s as unknown as number);
    let l: number = (anchor.l as unknown as number);
    if (strategy === "relative-sl") {
      const { fs, fl } = deriveRelativeFactors(nameHsl);
      s = clamp(baseHsl.s * fs, 0, 100);
      l = clamp(baseHsl.l * fl, 0, 100);
    }

    const generatedHex = toHex({ h: nameHsl.h, s: s as any, l: l as any });
    result[name] = generatedHex;
    usedBaseFor[name] = lead.name ?? baseName;
  }

  return {
    colors: result,
    usedBaseFor,
    pins: Object.keys(pins).map((n) => n.toUpperCase()),
    disabled: [...disabledSet],
  };
};

// Export helpers
export type PaletteExportFormat = "css" | "json" | "ts" | "scss" | "svg";

export interface ExportOptions {
  prefix?: string; // for css/scss variable name prefix
  selector?: string; // for css :root or custom selector
  constName?: string; // for TS
  title?: string; // for SVG title
  columns?: number; // for SVG grid
}

export const exportAsCSS = (colors: Record<string, HEX>, opts: ExportOptions = {}): string => {
  const prefix = opts.prefix ?? "color";
  const selector = opts.selector ?? ":root";
  const body = Object.entries(colors)
    .map(([name, hex]) => `  --${prefix}-${name.toLowerCase()}: ${hex};`)
    .join("\n");
  return `${selector} {\n${body}\n}`;
};

export const exportAsJSON = (colors: Record<string, HEX>): string => {
  return JSON.stringify(colors, null, 2);
};

export const exportAsTS = (colors: Record<string, HEX>, opts: ExportOptions = {}): string => {
  const constName = opts.constName ?? "PALETTE";
  const entries = Object.entries(colors)
    .map(([name, hex]) => `  ${name}: "${hex}",`)
    .join("\n");
  return `export const ${constName} = {\n${entries}\n} as const;\nexport type ${constName} = typeof ${constName};`;
};

export const exportAsSCSS = (colors: Record<string, HEX>, opts: ExportOptions = {}): string => {
  const prefix = opts.prefix ?? "color";
  const lines = Object.entries(colors)
    .map(([name, hex]) => `$${prefix}-${name.toLowerCase()}: ${hex};`)
    .join("\n");
  const map = `$${prefix}-map: (\n${Object.entries(colors)
    .map(([name, hex]) => `  ${name.toLowerCase()}: ${hex},`)
    .join("\n")}\n);`;
  return `${lines}\n\n${map}`;
};

export const exportAsSVG = (colors: Record<string, HEX>, opts: ExportOptions = {}): string => {
  const title = opts.title ?? "Palette";
  const cols = opts.columns ?? 8;
  const keys = Object.keys(colors);
  const size = 40;
  const padding = 10;
  const width = cols * (size + padding) + padding;
  const rows = Math.ceil(keys.length / cols);
  const height = rows * (size + padding) + padding + 24;
  const rects = keys
    .map((name, i) => {
      const x = padding + (i % cols) * (size + padding);
      const y = padding + Math.floor(i / cols) * (size + padding) + 24;
      const hex = colors[name];
      return `<g><rect x="${x}" y="${y}" width="${size}" height="${size}" rx="4" ry="4" fill="${hex}"/><text x="${x + 4}" y="${y + size - 6}" font-size="8" fill="#000">${name}</text></g>`;
    })
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><text x="${padding}" y="16" font-size="12">${title}</text>${rects}</svg>`;
};

export const exportPalette = (
  colors: Record<string, HEX>,
  format: PaletteExportFormat,
  opts?: ExportOptions
): string => {
  switch (format) {
    case "css":
      return exportAsCSS(colors, opts);
    case "json":
      return exportAsJSON(colors);
    case "ts":
      return exportAsTS(colors, opts);
    case "scss":
      return exportAsSCSS(colors, opts);
    case "svg":
      return exportAsSVG(colors, opts);
    default:
      return exportAsJSON(colors);
  }
};
