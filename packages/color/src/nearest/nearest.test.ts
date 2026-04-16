import { nearestColor } from "./nearest";

describe("nearest Color", () => {
  const tests = [["#ff00ff", "#ffffff"],['#ff2222','#ff0000']];
  it.each(tests)("Should find the nearest color -  %p == %s", (input, output) => {
    const legoColors = ["#ffffff", "#ff0000", "#00ff00", "#0000ff"];
    expect(nearestColor(input, legoColors)).toBe(output);
  });
});

