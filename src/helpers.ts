export const getNumbers = (input: string): number[] => {
  const values: number[] = [];
  input
    .replace(/[^\d,]/g, "")
    .split(",")
    .forEach((v) => values.push(parseInt(v)));
  return values;
};
