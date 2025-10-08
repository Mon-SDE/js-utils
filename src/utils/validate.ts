/**
 * Validates that a value is an array of number or string type.
 * @param value - The value to validate 
 * @param expectedType - The expected typeof each element ("string" or "number")
 *
 */
export function validateArray(value: unknown, expectedType: "number" | "string"): void {
    if (!Array.isArray(value)) {
        throw new TypeError(`Expected an array of ${expectedType}s`);
    }

    if (value.some(el => typeof el !== expectedType)) {
        throw new TypeError(`All array elements must be of type ${expectedType}`);
    }
}