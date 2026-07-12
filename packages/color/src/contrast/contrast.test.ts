import { contrastRatio, getContrastColor } from "./contrast";

describe("contrastRatio", () => {
  it("is 21 between black and white", () => {
    expect(contrastRatio("#000000", "#ffffff")).toBe(21);
  });
  it("is 1 for identical colors", () => {
    expect(contrastRatio("#336699", "#336699")).toBe(1);
  });
  it("is symmetric", () => {
    expect(contrastRatio("#ff0000", "#000000")).toBe(
      contrastRatio("#000000", "#ff0000")
    );
  });
});

describe("getContrastColor", () => {
  it("picks white on black", () => {
    expect(getContrastColor("#000000")).toBe("#ffffff");
  });
  it("picks black on white", () => {
    expect(getContrastColor("#ffffff")).toBe("#000000");
  });
  it("picks black on saturated mid-lightness blue", () => {
    // a flat L* cutoff misjudges this as needing white ink; contrast
    // ratio correctly finds black more legible (#1DA1F2 vs black ~7.4:1,
    // vs white ~2.8:1)
    expect(getContrastColor("#1DA1F2")).toBe("#000000");
  });
  it("picks white on dark navy", () => {
    expect(getContrastColor("#001f3f")).toBe("#ffffff");
  });
});
