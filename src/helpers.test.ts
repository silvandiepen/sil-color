import { isBetween, areBetween, shift } from "./helpers";

describe("isBetween", () => {
  it("Should be a number between 1 and 10", () => {
    expect(isBetween(5, 0, 10)).toBe(true);
    expect(isBetween(0, 0, 10)).toBe(true);
    expect(isBetween(10, 0, 10)).toBe(true);
  });
  it("Should not be a number between 1 and 10", () => {
    expect(isBetween(11, 0, 10)).toBe(false);
    expect(isBetween(-1, 0, 10)).toBe(false);
  });
});

describe("areBetween", () => {
  it("Should be a numbers between 1 and 10", () => {
    expect(areBetween([0, 5, 10], 0, 10)).toBe(true);
  });
  it("Should not be a number between 1 and 10", () => {
    expect(areBetween([-1, 11], 0, 10)).toBe(false);
  });
  it("Should not be a number between 1 and 10 - one odd", () => {
    expect(areBetween([1, 5, 11], 0, 10)).toBe(false);
  });
});

describe("shift", () => {
    it("Should return the array without the first element", () => {
        expect(shift([0, 1, 2])).toEqual([1, 2]);
      });  it("Should return an empty array, because the array was only one item", () => {
        expect(shift([0])).toEqual([]);
      });
});
