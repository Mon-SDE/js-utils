import {describe, expect, it} from 'vitest';
import { isEven, sum } from "../src/number-utils/numberUtils";

describe("isEven", () => {
  it("should work correctly", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
  })
});

describe("sum", () => {
  it("should calculate total", () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([])).toBe(0);
  })
});
