import { getName } from "./names";
import { COLOR } from "./types";

describe("names", () => {
  const tests: [COLOR, string][] = [
    ["#000000", "Black"],
    ["#7f7f7f", "Gray"],
    ["#ffffff", "White"],
    [{ r: 255, g: 0, b: 0 }, "Red"],
    [{ r: 255, g: 2, b: 2 }, "Red"],
    [{ r: 0, g: 255, b: 0 }, "Green"],
    [{ r: 0, g: 0, b: 255 }, "Blue"],
    [{ r: 255, g: 255, b: 0 }, "Yellow"],
    [{ r: 255, g:0 , b: 255 }, "Magenta / Fuchsia"],
    [{ r: 0, g: 255, b: 255 }, "Cyan / Aqua"],
  ];

  it.each(tests)("should return the right name -- %p == %s", (input, output) => {
    expect(getName(input)).toBe(output);
  });
});
