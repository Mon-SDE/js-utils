import { describe, expect, it } from "vitest";
import {capitalize, removeExtraSpace, toTitleCase, truncate} from "../src";

describe("string-utils", () => {
    it("should capitalize first letter", () => {
        expect(capitalize("hello")).toBe("Hello");
        expect(capitalize("WORLD")).toBe("World");
        expect(capitalize("")).toBe("");
    });

    it("should capitalize first letter of each word", () => {
        expect(toTitleCase("hello world")).toBe("Hello World");
    });

    it("should truncate text with ellipsis", () => {
        expect(truncate('Hello World', 5)).toBe('Hello...');
        expect(truncate('Short', 10)).toBe('Short');
        expect(truncate('Custom suffix', 7, '...')).toBe('Custom...');
    });
    
    it("should remove extra spaces", () => {
        expect(removeExtraSpace('Hello      World')).toBe('Hello World');
        expect(removeExtraSpace('    Hello    World    ')).toBe('Hello World');
    });
});