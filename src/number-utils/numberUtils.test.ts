import { describe, expect, it } from "vitest";
import {
  average,
  clamp,
  formatMoney,
  isEven,
  isOdd,
  parseMoney,
  randomInt,
  sum,
} from "./numberUtils";

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

  it("should format currency correctly", () => {
    expect(formatMoney(1234567.89)).toBe("1,234,567.89");
    expect(formatMoney(10000)).toBe("10,000.00");
    expect(formatMoney(98776.4, 1)).toBe("98,776.4");
    expect(formatMoney(-98776.4)).toBe("-98,776.40");
    expect(formatMoney(0)).toBe("0.00");
    expect(formatMoney(0.1 + 0.2)).toBe("0.30");
    expect(() => formatMoney("1234" as any)).toThrow("Invalid number provided");
  });

  it("should parse currency correctly", () => {
    expect(parseMoney("1,234,567.89")).toBe(1234567.89);
    expect(parseMoney("98,765.4")).toBe(98765.4);
    expect(parseMoney("")).toBe(0);
    expect(() => parseMoney("abc")).toThrow("Invalid currency format: abc");
    expect(parseMoney("98.40 Dollars")).toBe(98.4);
    expect(parseMoney("-123,498.40 Dollars")).toBe(-123498.4);
    expect(parseMoney("-0.50")).toBe(-0.5);
    expect(parseMoney("$1,234.50")).toBe(1234.5);
    expect(parseMoney("1 234.50")).toBe(1234.5);
  });
});
