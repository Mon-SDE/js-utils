import {describe, expect, it} from 'vitest';
import { average, clamp, isEven, isOdd, randomInt, sum } from "../index.js";

describe("number-utils", () => {
  it("should check even/odd correctly", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);

    expect(isOdd(3)).toBe(true);
    expect(isOdd(4)).toBe(false);
  });

  it("should calculate total", () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([])).toBe(0);
  });

  it("should clamp values correctly", () => {
    expect(clamp(10, 0, 5)).toBe(5);
    expect(clamp(-5, 0, 5)).toBe(0);
  });

  it("should compute average and median", () => {
    expect(average([1, 2, 3])).toBe(2);
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });

  it("should generates a random integer in range", () => {
    const result = randomInt(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
    expect(Number.isInteger(result)).toBe(true);
  });
});
