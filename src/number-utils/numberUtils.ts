/**
 * Checks if a number is even or not
 * 
 * @param num - number input to be checked
 * @returns True if it's even, False otherwise
 * 
 * @example
 * 
 * isEven(2) => true
 * isEven(3) => false
 */
export function isEven(num: number): boolean {
    if (typeof num !== 'number') {
        throw new TypeError("Invalud input type. Only 'number' is allowed.");
    }
    return num%2 == 0;
}

/**
 * Checks if a number is odd or not
 * 
 * @param num - number input to be checked
 * @returns True if it's odd, False otherwise
 * 
 * @example
 * 
 * isEven(2) => false
 * isEven(3) => true
 */
export function isOdd(num: number): boolean {
    if (typeof num !== 'number') {
        throw new TypeError("Invalud input type. Only 'number' is allowed.");
    }

    return !isEven(num);
}


export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function randomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Formats a number into a comma-separated currency string.
 * @param amount - The number to format
 * @param options - Formatting options
 * @returns Formatted currency string (e.g., "1,234.46")
 */
export function formatMoney(amount: number, decimals = 2): string {
  if (typeof amount !== "number" || isNaN(amount)) {
    throw new Error("Invalid number provided");
  }
  return amount.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Parses a comma-separated currency string back to a number.
 * @param formattedAmount - The formatted currency string (e.g., "1,234.56")
 * @returns The parsed number
 */
export function parseMoney(formattedAmount: string): number {
  if (!formattedAmount) return 0;

  let cleaned = "";
  let decimalPointCount = 0;
  let minusSignCount = 0;

  for (let i = 0; i < formattedAmount.length; i++) {
    const char = formattedAmount[i];

    if (char === ".") {
      decimalPointCount++;
    }

    if (char === "-") {
      minusSignCount++;
    }

    if (decimalPointCount > 1 || minusSignCount > 1) {
      throw new Error("Invalid currency string");
    }

    if (char === "-" && minusSignCount === 1) {
      cleaned += char;
    } else if (char === "." && decimalPointCount === 1) {
      cleaned += char;
    } else if (/\d/.test(char)) {
      cleaned += char;
    }
    // Ignore all other characters (commas, spaces, currency, symbols, etc.)
  }

  const result = parseFloat(cleaned);

  if (isNaN(result)) {
    throw new Error(`Invalid currency format: ${formattedAmount}`);
  }

  return result;
}
