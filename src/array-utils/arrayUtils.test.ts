import { describe, expect, it } from "vitest";
import { sum, average, union, intersect } from './arrayUtils'

describe("arary-utils", () => {
    it("should calculate total", () => {
        expect(sum([1, 2, 3])).toBe(6);
        expect(sum([])).toBe(0);
    });

    it("should compute average and median", () => {
        expect(average([1, 2, 3])).toBe(2);
        expect(average([1, 2, 3, 4])).toBe(2.5);
    });

    it("should union two number arrays", () => {
        expect(union([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(union([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
        expect(union([1, 1, 1], [1, 1])).toEqual([1]);
        expect(union([1, 2, 2, 3, 4, 4], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should union two string arrays', () => {
        expect(union(['a', 'b', 'c'], ['d', 'e', 'f'])).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
        expect(union(['a', 'b', 'c'], ['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
        expect(union(['a', 'a', 'a'], ['a', 'a'])).toEqual(['a']);
    });

    it('should handle empty arrays', () => {
        expect(union([], [])).toEqual([]);
        expect(union([], [1, 2, 3])).toEqual([1, 2, 3]);
        expect(union([1, 2, 3], [])).toEqual([1, 2, 3]);
        expect(union([], ['a', 'b'])).toEqual(['a', 'b']);
        expect(union(['a', 'b'], [])).toEqual(['a', 'b']);
    });

    it('should throw error for mixed types', () => {
        expect(() => union(['1', '2', '3'] as any, [4, 5, 6] as any))
            .toThrow("All array elements must be of type string");

        expect(() => union([1, 2, 3], ['a', 'b', 'c'] as any))
            .toThrow("All array elements must be of type number");
    });

    it('should throw error for invalid elements', () => {
        expect(() => union([1, null] as any, [2, 3]))
            .toThrow("All array elements must be of type number");

        expect(() => union([1, undefined] as any, [2, 3]))
            .toThrow("All array elements must be of type number");
    });

    it('should throw error for non-array input', () => {
        expect(() => union("Hello World" as any, [1, 2, 3] as any))
            .toThrow("Expected an array of strings");
    });

    it('should intersect two number arrays', () => {
        expect(intersect([1, 2, 3], [4, 5, 6])).toEqual([]);
        expect(intersect([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
        expect(intersect([1, 1, 1], [1, 1])).toEqual([1]);
        expect(intersect([1, 2, 2, 3, 4, 4], [4, 5, 6])).toEqual([4]);
        expect(intersect([1, 2, 3, 4], [2, 4, 6, 8])).toEqual([2, 4]);
    });

    it('should intersect two string arrays', () => {
        expect(intersect(['a', 'b', 'c'], ['d', 'e', 'f'])).toEqual([]);
        expect(intersect(['a', 'b', 'c'], ['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
        expect(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'f'])).toEqual(['b', 'd']);
    });

    it('should handle empty arrays', () => {
        expect(intersect([], [])).toEqual([]);
        expect(intersect([], [1, 2, 3])).toEqual([1, 2, 3]);
        expect(intersect([1, 2, 3], [])).toEqual([1, 2, 3]);
        expect(intersect([], ['a', 'b'])).toEqual(['a', 'b']);
        expect(intersect(['a', 'b'], [])).toEqual(['a', 'b']);
    });

    it('should throw error for mixed types', () => {
        expect(() => intersect(['1', '2', '3'] as any, [4, 5, 6] as any))
            .toThrow("All array elements must be of type string");

        expect(() => intersect([1, 2, 3], ['a', 'b', 'c'] as any))
            .toThrow("All array elements must be of type number");
    });

    it('should throw error for invalid elements', () => {
        expect(() => intersect([1, null] as any, [1, 2]))
            .toThrow("All array elements must be of type number");
    });

    it('should throw error for non-array input', () => {
        expect(() => intersect("Hello World" as any, [1, 2, 3] as any))
            .toThrow("Expected an array of strings");
    });
})