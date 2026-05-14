/**
 * @file module1.js
 * @description Demonstrates ES6 Named Exports — exporting variables, objects,
 *              and primitives for use in other modules.
 * @concepts Named exports, ES6 modules, export syntax
 */

// Named export: an array of numbers
export let data = [65, 75, 8549, 237, 753, 752, 652];

// Named export: a person object with multiple properties
export let person = {
    name: "varun",
    age: 24,
    city: "hyderabad"
};

// Named export: a simple string variable
export let username = "bhanu";

/*
 * NOTE: Named exports vs Default exports
 * - Named exports: can have multiple per file, imported with { braces }
 * - Default export: only one per file, imported without braces
 *
 * Example of default export (not used here):
 *   export default { data, person, username };
 *
 * IMPORTANT: Avoid circular exports — when two modules import each other,
 * it creates a dependency loop that can cause undefined values and errors.
 */