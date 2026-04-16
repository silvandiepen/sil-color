import type { HSL, HEX } from '../types/types';

export interface ColorSpectrum {
  spectral: boolean;
  wavelength_nm: [number, number] | null;
  hue_deg: [number, number][];
  saturation: [number, number];
  lightness: [number, number];
  notes: string;
}

export interface ColorSpectrumData {
  schema: {
    spectral: string;
    wavelength_nm: string;
    hue_deg: string;
    saturation: string;
    lightness: string;
    notes: string;
  };
  colorsets: Record<string, ColorSpectrum>;
}

// Helper function to generate hue ranges based on color names
function inferHueRange(name: string): [number, number][] {
  const lowerName = name.toLowerCase();
  
  // REDS
  if (lowerName.includes('red') || lowerName.includes('crimson') || lowerName.includes('scarlet') || 
      lowerName.includes('ruby') || lowerName.includes('cherry') || lowerName.includes('rose') ||
      lowerName.includes('garnet') || lowerName.includes('carmine') || lowerName.includes('cerise')) {
    return [[348, 10], [0, 20]];
  }
  
  // ORANGES
  if (lowerName.includes('orange') || lowerName.includes('apricot') || lowerName.includes('peach') ||
      lowerName.includes('coral') || lowerName.includes('tangerine') || lowerName.includes('carrot') ||
      lowerName.includes('pumpkin') || lowerName.includes('marigold')) {
    return [[15, 45]];
  }
  
  // YELLOWS
  if (lowerName.includes('yellow') || lowerName.includes('gold') || lowerName.includes('lemon') ||
      lowerName.includes('butter') || lowerName.includes('corn') || lowerName.includes('saffron') ||
      lowerName.includes('mustard') || lowerName.includes('honey')) {
    return [[45, 65]];
  }
  
  // GREENS
  if (lowerName.includes('green') || lowerName.includes('emerald') || lowerName.includes('jade') ||
      lowerName.includes('olive') || lowerName.includes('lime') || lowerName.includes('forest') ||
      lowerName.includes('mint') || lowerName.includes('sage') || lowerName.includes('pine') ||
      lowerName.includes('moss') || lowerName.includes('chartreuse')) {
    return [[90, 150]];
  }
  
  // CYANS/TEALS
  if (lowerName.includes('cyan') || lowerName.includes('turquoise') || lowerName.includes('teal') ||
      lowerName.includes('aqua') || lowerName.includes('aquamarine') || lowerName.includes('cyan')) {
    return [[170, 200]];
  }
  
  // BLUES
  if (lowerName.includes('blue') || lowerName.includes('navy') || lowerName.includes('sapphire') ||
      lowerName.includes('azure') || lowerName.includes('cobalt') || lowerName.includes('denim') ||
      lowerName.includes('sky') || lowerName.includes('ocean') || lowerName.includes('royal')) {
    return [[200, 250]];
  }
  
  // VIOLETS/PURPLES
  if (lowerName.includes('purple') || lowerName.includes('violet') || lowerName.includes('lavender') ||
      lowerName.includes('orchid') || lowerName.includes('iris') || lowerName.includes('amethyst') ||
      lowerName.includes('mauve') || lowerName.includes('lilac') || lowerName.includes('indigo')) {
    return [[260, 300]];
  }
  
  // MAGENTAS/PINKS
  if (lowerName.includes('pink') || lowerName.includes('magenta') || lowerName.includes('fuchsia') ||
      lowerName.includes('rose') || lowerName.includes('salmon') || lowerName.includes('coral')) {
    return [[300, 340], [340, 360]];
  }
  
  // BROWNS
  if (lowerName.includes('brown') || lowerName.includes('tan') || lowerName.includes('beige') ||
      lowerName.includes('khaki') || lowerName.includes('umber') || lowerName.includes('sienna') ||
      lowerName.includes('coffee') || lowerName.includes('chocolate') || lowerName.includes('wood')) {
    return [[20, 50]];
  }
  
  // GRAYS/NEUTRALS
  if (lowerName.includes('gray') || lowerName.includes('grey') || lowerName.includes('ash') ||
      lowerName.includes('slate') || lowerName.includes('stone') || lowerName.includes('charcoal')) {
    return [[0, 360]]; // Any hue for grays
  }
  
  // WHITES/IVORIES
  if (lowerName.includes('white') || lowerName.includes('ivory') || lowerName.includes('cream') ||
      lowerName.includes('alabaster') || lowerName.includes('snow') || lowerName.includes('pearl')) {
    return [[0, 360]]; // Any hue for whites
  }
  
  // BLACKS
  if (lowerName.includes('black') || lowerName.includes('ebony') || lowerName.includes('jet') ||
      lowerName.includes('charcoal') || lowerName.includes('midnight')) {
    return [[0, 360]]; // Any hue for blacks
  }
  
  // Default range
  return [[0, 360]];
}

// Helper function to infer saturation and lightness based on color names
function inferSaturationLightness(name: string): { sat: [number, number]; light: [number, number] } {
  const lowerName = name.toLowerCase();
  
  // HIGH SATURATION COLORS
  if (lowerName.includes('vivid') || lowerName.includes('bright') || lowerName.includes('electric') ||
      lowerName.includes('neon') || lowerName.includes('radiant') || lowerName.includes('intense')) {
    return { sat: [0.8, 1.0], light: [0.4, 0.7] };
  }
  
  // PASTELS/LIGHT COLORS
  if (lowerName.includes('pastel') || lowerName.includes('pale') || lowerName.includes('light') ||
      lowerName.includes('soft') || lowerName.includes('baby') || lowerName.includes('fairy')) {
    return { sat: [0.2, 0.6], light: [0.7, 0.9] };
  }
  
  // DARK COLORS
  if (lowerName.includes('dark') || lowerName.includes('deep') || lowerName.includes('midnight') ||
      lowerName.includes('navy') || lowerName.includes('forest') || lowerName.includes('charcoal')) {
    return { sat: [0.4, 0.9], light: [0.1, 0.3] };
  }
  
  // DULL/MUTED COLORS
  if (lowerName.includes('dull') || lowerName.includes('muted') || lowerName.includes('earthy') ||
      lowerName.includes('stone') || lowerName.includes('dusty')) {
    return { sat: [0.1, 0.4], light: [0.3, 0.7] };
  }
  
  // BROWNS
  if (lowerName.includes('brown') || lowerName.includes('tan') || lowerName.includes('khaki')) {
    return { sat: [0.3, 0.7], light: [0.2, 0.5] };
  }
  
  // NEUTRALS (GRAYS, WHITES, BLACKS)
  if (lowerName.includes('gray') || lowerName.includes('grey') || lowerName.includes('white') ||
      lowerName.includes('black') || lowerName.includes('ash') || lowerName.includes('stone') ||
      lowerName.includes('charcoal') || lowerName.includes('ivory') || lowerName.includes('cream')) {
    return { sat: [0.0, 0.1], light: lowerName.includes('black') ? [0.0, 0.1] : 
                                          lowerName.includes('white') ? [0.9, 1.0] : [0.2, 0.8] };
  }
  
  // DEFAULT
  return { sat: [0.5, 1.0], light: [0.3, 0.7] };
}

// Helper function to determine if a color is spectral
function isSpectral(name: string): boolean {
  const lowerName = name.toLowerCase();
  
  // Non-spectral colors (mixes)
  const nonSpectral = [
    'purple', 'magenta', 'fuchsia', 'pink', 'rose', 'brown', 'gray', 'grey',
    'white', 'black', 'ivory', 'cream', 'beige', 'tan', 'khaki', 'olive',
    'navy', 'teal', 'cyan', 'lime', 'coral', 'salmon', 'turquoise'
  ];
  
  return !nonSpectral.some(ns => lowerName.includes(ns));
}

// Generate comprehensive spectrum data for all colors
export function generateColorSpectrumData(colorNames: string[]): ColorSpectrumData {
  const colorsets: Record<string, ColorSpectrum> = {};
  
  colorNames.forEach(name => {
    const hueRange = inferHueRange(name);
    const { sat, light } = inferSaturationLightness(name);
    const spectral = isSpectral(name);
    
    // Assign wavelength for spectral colors based on primary hue
    let wavelength: [number, number] | null = null;
    if (spectral && hueRange.length > 0) {
      const primaryHue = (hueRange[0][0] + hueRange[0][1]) / 2;
      if (primaryHue >= 348 || primaryHue <= 20) wavelength = [620, 750]; // Red
      else if (primaryHue >= 20 && primaryHue <= 45) wavelength = [590, 620]; // Orange
      else if (primaryHue >= 45 && primaryHue <= 65) wavelength = [570, 590]; // Yellow
      else if (primaryHue >= 90 && primaryHue <= 140) wavelength = [495, 570]; // Green
      else if (primaryHue >= 170 && primaryHue <= 200) wavelength = [485, 500]; // Cyan
      else if (primaryHue >= 200 && primaryHue <= 250) wavelength = [450, 495]; // Blue
      else if (primaryHue >= 260 && primaryHue <= 300) wavelength = [380, 450]; // Violet
    }
    
    colorsets[name] = {
      spectral,
      wavelength_nm: wavelength,
      hue_deg: hueRange,
      saturation: sat,
      lightness: light,
      notes: `Auto-generated spectrum definition for ${name}`
    };
  });
  
  return {
    schema: {
      spectral: "true if definable by a single wavelength",
      wavelength_nm: "null or [min, max]",
      hue_deg: "one or more [min, max] ranges; wrap allowed e.g. [[350, 360], [0, 10]]",
      saturation: "[min, max] in 0–1",
      lightness: "[min, max] in 0–1",
      notes: "short guidance"
    },
    colorsets
  };
}

export interface GeneratedColor {
  h: number;
  s: number;
  l: number;
  r: number;
  g: number;
  b: number;
  hex: string;
}

function pickInRange([min, max]: [number, number]): number {
  return min + Math.random() * (max - min);
}

function pickHue(hueRanges: [number, number][]): number {
  const range = hueRanges[Math.floor(Math.random() * hueRanges.length)];
  return pickInRange(range);
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number; hex: string } {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const hp = h / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let [r1, g1, b1] = hp < 1 ? [c, x, 0] : 
                     hp < 2 ? [x, c, 0] : 
                     hp < 3 ? [0, c, x] : 
                     hp < 4 ? [0, x, c] : 
                     hp < 5 ? [x, 0, c] : 
                     [c, 0, x];
  const m = l - c / 2;
  const [r, g, b] = [r1 + m, g1 + m, b1 + m].map(v => Math.round(Math.max(0, Math.min(255, v * 255))));
  return { 
    r, 
    g, 
    b, 
    hex: `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}` 
  };
}

/**
 * Generate a color from the spectrum definition for a given color name
 * @param spectrumData - The complete spectrum data
 * @param name - The color name from the colorsets
 * @param opts - Optional overrides for h, s, l values (0-1 range)
 * @returns Generated color with HSL, RGB, and hex values
 */
export function generateColor(spectrumData: ColorSpectrumData, name: string, opts: { h?: number; s?: number; l?: number } = {}): GeneratedColor {
  const cs = spectrumData.colorsets[name];
  if (!cs) {
    throw new Error(`Unknown colorset: ${name}`);
  }
  
  const h = 'h' in opts ? opts.h! : pickHue(cs.hue_deg);
  const s = 's' in opts ? opts.s! : pickInRange(cs.saturation);
  const l = 'l' in opts ? opts.l! : pickInRange(cs.lightness);
  
  return { h, s, l, ...hslToRgb(h, s, l) };
}

/**
 * Generate a canonical color (deterministic) from the spectrum definition
 * Uses the middle of each range for consistent results
 * @param spectrumData - The complete spectrum data
 * @param name - The color name from the colorsets
 * @returns Generated canonical color with HSL, RGB, and hex values
 */
export function generateCanonicalColor(spectrumData: ColorSpectrumData, name: string): GeneratedColor {
  const cs = spectrumData.colorsets[name];
  if (!cs) {
    throw new Error(`Unknown colorset: ${name}`);
  }
  
  // Use middle values for deterministic results
  const hueRange = cs.hue_deg[0]; // Use first hue range
  const h = (hueRange[0] + hueRange[1]) / 2;
  const s = (cs.saturation[0] + cs.saturation[1]) / 2;
  const l = (cs.lightness[0] + cs.lightness[1]) / 2;
  
  return { h, s, l, ...hslToRgb(h, s, l) };
}

/**
 * Get the spectrum definition for a color name
 * @param spectrumData - The complete spectrum data
 * @param name - The color name
 * @returns The color spectrum definition or null if not found
 */
export function getColorSpectrum(spectrumData: ColorSpectrumData, name: string): ColorSpectrum | null {
  return spectrumData.colorsets[name] || null;
}

/**
 * Check if a color is spectral (definable by a single wavelength)
 * @param spectrumData - The complete spectrum data
 * @param name - The color name
 * @returns True if the color is spectral
 */
export function isSpectralColor(spectrumData: ColorSpectrumData, name: string): boolean {
  const cs = getColorSpectrum(spectrumData, name);
  return cs ? cs.spectral : false;
}

/**
 * Get all available color names from the spectrum definitions
 * @param spectrumData - The complete spectrum data
 * @returns Array of color names
 */
export function getAllColorNames(spectrumData: ColorSpectrumData): string[] {
  return Object.keys(spectrumData.colorsets);
}

/**
 * Generate a set of spectrum-accurate colors for all defined colors
 * @param spectrumData - The complete spectrum data
 * @returns Record mapping color names to their hex values
 */
export function generateSpectrumRegistry(spectrumData: ColorSpectrumData): Record<string, HEX> {
  const registry: Record<string, HEX> = {};
  
  for (const colorName of getAllColorNames(spectrumData)) {
    const canonical = generateCanonicalColor(spectrumData, colorName);
    // Normalize color names to uppercase with spaces and slashes preserved
    const normalizedName = colorName.toUpperCase().replace(/\s+/g, '_');
    registry[normalizedName] = canonical.hex as HEX;
  }
  
  return registry;
}