import { toRGB } from "./to";
import { COLOR, RGB } from "./types";

export const distance = (a: RGB, b: RGB) =>
  Math.sqrt(
    Math.pow(a.r - b.r, 2) + Math.pow(a.g - b.g, 2) + Math.pow(a.b - b.b, 2)
  );

export const nearestColor = (color: COLOR, colors: COLOR[]) =>
  colors
    .map((c) => ({ color: c, distance: distance(toRGB(color), toRGB(c)) }))
    .sort((a, b) =>
      a.distance > b.distance ? 1 : b.distance > a.distance ? -1 : 0
    )[0].color;
