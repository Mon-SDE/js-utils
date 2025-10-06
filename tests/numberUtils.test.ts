import { isEven, sum } from "../src/numberUtils";

test("isEven() should work correctly", () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
});

test("sum() should calculate total", () => {
  expect(sum([1, 2, 3])).toBe(6);
  expect(sum([])).toBe(0);
});
