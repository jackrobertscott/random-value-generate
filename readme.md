# random-value-utils

A robust TypeScript library for generating random values such as integers, floats, strings, booleans, and more. Ideal for applications requiring randomization.

## Table of Contents
1. [Installation](#installation)
2. [Example Usage](#example-usage)
3. [API Documentation](#api-documentation)
4. [Contributing](#contributing)
5. [License](#license)

## Installation

To install the package, run:

```bash
npm install random-value-utils
```

## Example Usage

Here's how you can use the functions from this package:

```typescript
import {
  randomInteger,
  randomFloat,
  randomBool,
  randomElement,
  randomString,
  randomIntegerArray,
  randomFloatArray,
  randomShuffleArray
} from 'random-value-utils';

// Generate a random integer between 1 and 10
const int = randomInteger(1, 10);

// Generate a random floating-point number between 0 and 1
const float = randomFloat(0, 1);

// Generate a random boolean
const bool = randomBool();

// Generate a random element from an array
const element = randomElement([1, 2, 3]);

// Generate a random string of length 5
const str = randomString(5);

// Generate an array of 5 random integers
const intArray = randomIntegerArray(5);

// Generate an array of 5 random floats
const floatArray = randomFloatArray(5);

// Shuffle an array
const shuffledArray = randomShuffleArray([1, 2, 3, 4, 5]);
```

## API Documentation

### `randomInteger(min: number, max: number): number`
Generates a random integer between `min` and `max`.

### `randomFloat(min: number, max: number): number`
Generates a random floating-point number between `min` and `max`.

### `randomBool(): boolean`
Generates a random boolean value.

### `randomElement<T>(array: T[]): T | null`
Picks a random element from the given `array`.

### `randomString(length: number, characterSet?: string): string`
Generates a random string of a specified `length`. Optional `characterSet`.

### `randomIntegerArray(length: number, min?: number, max?: number): number[]`
Generates an array of random integers of specified `length`, `min`, and `max`.

### `randomFloatArray(length: number, min?: number, max?: number): number[]`
Generates an array of random floats of specified `length`, `min`, and `max`.

### `randomShuffleArray<T>(array: T[]): T[]`
Shuffles the given `array` randomly using the Fisher-Yates algorithm.

## Contributing

Contributions are welcome!

## License

This project is licensed under the MIT License.
