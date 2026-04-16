import { isBetween, areBetween, shift, clamp } from "./helpers";

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


describe('clamp', () => {
  it('should return the value when it is within the range', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('should return the minimum value when the value is less than the minimum', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it('should return the maximum value when the value is greater than the maximum', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it('should handle edge cases where the value is exactly the minimum', () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });

  it('should handle edge cases where the value is exactly the maximum', () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });

  it('should handle negative ranges correctly', () => {
    expect(clamp(-5, -10, 0)).toBe(-5);
    expect(clamp(-15, -10, 0)).toBe(-10);
    expect(clamp(5, -10, 0)).toBe(0);
  });
});
