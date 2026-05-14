/**
 * @file assignment1.js
 * @description Daily Temperature Analyzer — process weather data using
 *              higher-order array methods (filter, map, reduce, find, findIndex).
 * @concepts Array HOFs, Celsius to Fahrenheit conversion, accumulator pattern
 */

// Sample daily temperature readings in Celsius
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. filter() — Get temperatures above 35°C (hot days)
let hotDays = temperatures.filter((temp) => temp > 35);
console.log("Temperatures above 35:", hotDays);

// 2. map() — Convert all Celsius values to Fahrenheit (F = C × 1.8 + 32)
const fahrenheit = temperatures.map((temp) => (temp * 1.8) + 32);
console.log("Fahrenheit:", fahrenheit);

// 3. reduce() — Calculate the average temperature
const sum = temperatures.reduce((acc, temp) => acc + temp, 0);
const avg = sum / temperatures.length;
console.log("Average temperature:", avg);

// 4. find() — Get the first temperature above 40°C
let firstAbove40 = temperatures.find((temp) => temp > 40);
console.log("First temp above 40:", firstAbove40);

// 5. findIndex() — Get the index of temperature 28
let indexOf28 = temperatures.findIndex((temp) => temp === 28);
console.log("Index of 28:", indexOf28);