import { getBrightness, rgbToY } from "./brightness";

describe("brightness", () => {
  it("should pass dark", () => {
    expect(rgbToY({ r: 255, g: 255, b: 255 })).toBe(1);
  });
  it("should pass dark", () => {
    expect(rgbToY({ r: 255, g: 0, b: 0 })).toBe(0.2126);
  });
  it("should pass dark", () => {
    expect(rgbToY({ r: 255, g: 0, b: 0 })).toBe(0.2126);
  });
  it("should pass light", () => {
    expect(rgbToY({ r: 0, g: 0, b: 255 })).toBe(0.0722);
  });
  it("should pass mid", () => {
    expect(rgbToY({ r: 255, g: 255, b: 0 })).toBe(0.9278);
  });
});

describe("perceived brightness", () => {
  it("should pass dark", () => {
    expect(getBrightness("#000000")).toBe(0);
  });
  it("should pass light", () => {
    expect(getBrightness("#ffffff")).toBe(100);
  });
  it("should pass mid", () => {
    expect(getBrightness({ c: 0, m: 0, y: 0, k: 50 })).toBe(53.59);
  });
});
