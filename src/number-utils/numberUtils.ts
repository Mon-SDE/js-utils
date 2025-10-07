export function isEven(num: number): boolean {
    return num%2 == 0;
}

export function isOdd(num: number): boolean {
    return !isEven(num);
}

export function sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

export function average(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    return sum(numbers)/numbers.length;
}

export function mediam(numbers: number[]): number {
    if (numbers.length === 0) return 0;

    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    return sorted.length % 2 === 0 
        ? (sorted[mid-1] + sorted[mid]) / 2 
        : sorted[mid];
}

export function randomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}