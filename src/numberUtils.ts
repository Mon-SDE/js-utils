export function isEven(num: number): boolean {
    return num%2 == 0;
}

export function isOdd(num: number): boolean {
    return !isEven(num);
}

export function sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

