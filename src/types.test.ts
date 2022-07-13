import { instanceOfHSLA, instanceOfRGB, instanceOfRGBA } from "./types";

describe("Type checkers", () => {
  it("Should return if the object is RGB", () => {
    expect(instanceOfRGB({ r: 0, g: 0, b: 0 })).toBe(true);
  });
  it("Should return if the object is not RGB", () => {
    expect(instanceOfRGB({ r: 0, g: 0, b: 0, a: 0 })).toBe(false);
  });
  it("Should return if the object is not RGBA", () => {
    expect(instanceOfRGBA({ r: 0, g: 0, b: 0 })).toBe(false);
  });
  it("Should return if the object is RGBA", () => {
    expect(instanceOfRGBA({ r: 0, g: 0, b: 0, a: 0 })).toBe(true);
  });
  it("Should return if the object is HSLA", () => {
    expect(instanceOfHSLA({ h: 0, s: 0, l: 0, a: 0 })).toBe(true);
  });
  it("Should return if the object is not HSLA", () => {
    expect(instanceOfHSLA({ h: 0, s: 0, l: 0 })).toBe(false);
  });
  it("Should return if the object is not HSLA", () => {
    expect(instanceOfHSLA({ r: 0, g: 0, b: 0 })).toBe(false);
  });
  it("Should return if the object is not HSLA", () => {
    expect(instanceOfHSLA({ r: 0, g: 0, b: 0, c:0 })).toBe(false);
  });
});
