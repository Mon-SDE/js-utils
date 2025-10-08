import { validateArray } from "../utils/validate.ts";

/**
 * Calculates the sum of all array elements.
 * @param numbers - an array of numbers
 * @throws TypeError if input is not an array or all array elements are not numbers
 * @returns sum of all array elements
 * @example
 * 
 * sum([1, 2, 3, 4]) => 10
 * 
 */
export function sum(numbers: number[]): number {
    validateArray(numbers, "number");

    return numbers.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Calculate the average of all array elements.
 * @param numbers - an array of numbers
 * @param decimals - number of digits after decimal points (default 2)
 * @throws TypeError if input is not an array or all array elements are not numbers
 * @returns average of all array elements
 * @example
 * 
 * average([1, 2, 3, 4]) => 2.50
 */
export function average(numbers: number[], decimals = 2): number {
    validateArray(numbers, "number");

    if (numbers.length === 0) return 0;

    const avg = (sum(numbers) / numbers.length).toFixed(decimals);

    return Number(avg);
}

export function median(numbers: number[]): number {
    validateArray(numbers, "number");

    if (numbers.length === 0) return 0;

    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    return sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
}

/**
 * Returns the union (distinct elements) of two arrays of the same primitive type.
 */
export function union<T extends string | number>(array1: T[], array2: T[]): T[] {
    if (array1.length === 0 && array2.length === 0) return [];
    if (array1.length === 0) return Array.from(new Set(array2));
    if (array2.length === 0) return Array.from(new Set(array1));

    const expectedType = typeof array1[0];

    validateArray(array1, expectedType as "string" | "number");
    validateArray(array2, expectedType as "string" | "number");

    return Array.from(new Set([...array1, ...array2]));
}


/**
 * Returns the intersection (common elements) of two arrays of the same primitive type.
 */
export function intersect<T extends string | number>(array1: T[], array2: T[]): T[] {
    if (array1.length === 0 && array2.length === 0) return [];
    if (array1.length === 0) return Array.from(new Set(array2));
    if (array2.length === 0) return Array.from(new Set(array1));

    const expectedType = typeof array1[0];

    validateArray(array1, expectedType as "string" | "number");
    validateArray(array2, expectedType as "string" | "number");

    const set1 = new Set(array1);
    const set2 = new Set(array2);
    return Array.from(set1).filter((el) => set2.has(el));

}