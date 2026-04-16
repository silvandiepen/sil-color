import {
  hexToRgb,
  rgbToHsl,
  hslToHex,
  toRGB,
  toString,
  lighten,
  getBrightness,
  nearestColor,
  getName,
  getRandomColor,
  RGB,
  HSL,
} from '../src';

// Convert HEX → RGB → HSL → HEX
const rgb: RGB = hexToRgb('#ff0094');
const hsl: HSL = rgbToHsl(rgb) as HSL;
const hex = hslToHex(hsl);
console.log('hex→rgb→hsl→hex', hex);

// Manipulate and stringify
const lighter = lighten('#336699', 10);
console.log('lighter', toString(toRGB(lighter)));

// Brightness and nearest
console.log('brightness(#333)', getBrightness('#333'));
console.log('nearest', nearestColor('#f00', ['#111', '#f11', '#0f0']));
console.log('name', getName('#F0F8FF'));

// Random
console.log('random', getRandomColor());

