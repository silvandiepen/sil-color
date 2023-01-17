import { getName } from "./names";

describe("names", () => {
  it("should return the right name -- basics", () => {
    expect(getName("#000000")).toBe("Black");
    expect(getName("#7f7f7f")).toBe("Gray");
    expect(getName("#ffffff")).toBe("White");
  });

  it("should return the right name -- rgb Red", () => {
    expect(getName({ r: 255, g: 0, b: 0 })).toBe("Red");
  });
  it("should return the right name -- rgb Green", () => {
    expect(getName({ r: 0, g: 255, b: 0 })).toBe("Green");
  });
  it("should return the right name -- rgb Blue", () => {
    expect(getName({ r: 0, g: 0, b: 255 })).toBe("Blue");
  });
  it("should return the right name -- rgb Yellow", () => {
    expect(getName({ r: 255, g: 255, b: 0 })).toBe("Yellow");
  });
  it("should return the right name -- rgb Magenta", () => {
    expect(getName({ r: 255, g: 0, b: 255 })).toBe("Magenta / Fuchsia");
  });
  it("should return the right name -- rgb Cyan", () => {
    expect(getName({ r: 0, g: 255, b: 255 })).toBe("Cyan / Aqua");
  });
});
