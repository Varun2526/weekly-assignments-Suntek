/**
 * @file Exercise1.js
 * @description Spread Operator — Array Copying. Create a copy of an array
 *              and extend it with new elements without mutating the original.
 * @concepts Spread operator (...), array immutability, shallow copy
 */

// Original array
let fruits = ["apple", "banana"];

// Create a new array by spreading the original and adding "orange"
// The spread operator copies all elements into the new array
let moreFruits = [...fruits, "orange"];

// Verify: original array is unchanged, new array has the addition
console.log("Original:", fruits);       // ["apple", "banana"]
console.log("Extended:", moreFruits);    // ["apple", "banana", "orange"]
