# 🐾 @kittenlib/js-utils

> A simple, zero-dependency JavaScript/TypeScript utility library for common string and number operations. Perfect for learning, practice, or lightweight production use.

[![npm version](https://img.shields.io/npm/v/@kittenlib/js-utils?color=success&logo=npm)](https://www.npmjs.com/package/@kittenlib/js-utils)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@kittenlib/js-utils?color=blue&logo=javascript)](https://bundlephobia.com/package/@kittenlib/js-utils)
[![License](https://img.shields.io/npm/l/@kittenlib/js-utils?color=orange)](https://github.com/Mon-SDE/js-utils/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## ✨ Features

- **Zero dependencies** - Pure TypeScript, no external libraries
- **Dual format support** - Works with both ESM (`import`) and CommonJS (`require`)
- **Full TypeScript support** - Complete type definitions included
- **Tree-shakable** - Only import what you use
- **Lightweight** - Minimal bundle size
- **Well-tested** - Comprehensive test coverage with Vitest

## 📦 Installation

Install the package from npm:

```bash
npm install @kittenlib/js-utils
```

## 🚀 Usage
String Utilities
```js
import { capitalize, toTitleCase } from '@kittenlib/js-utils';

// Capitalize first letter of a word
console.log(capitalize('hello')); // 'Hello'
console.log(capitalize('WORLD')); // 'World'

// Convert sentence to title case
console.log(toTitleCase('hello world')); // 'Hello World'
console.log(toTitleCase('JAVASCRIPT is FUN')); // 'Javascript Is Fun'
```

Number Utilities
```js
import { isEven, isOdd, sum } from '@kittenlib/js-utils';

// Check if number is even
console.log(isEven(4)); // true
console.log(isEven(3)); // false

// Check if number is odd
console.log(isOdd(3)); // true
console.log(isOdd(4)); // false

// Sum array of numbers
console.log(sum([1, 2, 3])); // 6
console.log(sum([])); // 0
```

TypeScript Support
Full type safety with auto-completion and IntelliSense:
```js
import { capitalize, sum } from '@kittenlib/js-utils';

// ✅ Type-safe usage
const result = capitalize('hello'); // string
const total = sum([1, 2, 3]); // number

// ❌ Type error (caught at compile time)
// capitalize(123); // Argument of type 'number' not assignable to parameter of type 'string'
```

## Author 
Angkur Mondal
