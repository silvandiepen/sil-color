import type { COLOR } from "../types/types";
import { nearestColor } from "../nearest/nearest";
import { simpleNames, names } from "./names.data";

export const getName = (color: COLOR, type: 'default' | 'simple' = 'default'): string => {

  const nameData = type === 'simple' ? simpleNames : names;

  const colorNames = nameData.map((n) => n[0]);

  const closestColor = nearestColor(color, colorNames);

  const findIndex = nameData.findIndex((name) => name[0] == closestColor);

  return names[findIndex][1];
};
