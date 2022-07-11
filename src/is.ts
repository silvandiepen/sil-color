export const isHex = (value: string): boolean => {
  const reg = /^#([0-9a-f]{3}){1,2}$/i;
  return reg.test(value);
};

export const isRGB = (value: string): boolean => {
  const rgbNumbers: number[] = [];
  value
    .replace(/[^\d,]/g, "")
    .split(",")
    .forEach((v) => rgbNumbers.push(parseInt(v)));

  return (
    value.startsWith("rgb(") &&
    value.endsWith(")") &&
    rgbNumbers.length == 3 &&
    !rgbNumbers.some((n) => n > 255 || n < 0) &&
    !rgbNumbers.some((n) => Math.round(n) !== n)
  );
};

export const isHSL = (value: string): boolean => {
  const hslNumbers: number[] = [];
  value
    .replace(/[^\d,]/g, "")
    .split(",")
    .forEach((v) => hslNumbers.push(parseInt(v)));

  return (
    value.startsWith("hsl(") &&
    value.endsWith(")") &&
    hslNumbers.length == 3 &&
    !hslNumbers.some((n) => n > 100 || n < 0) &&
    !hslNumbers.some((n) => Math.round(n) !== n)
  );
};
