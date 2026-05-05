/**
 * @file module2.js
 * @description Demonstrates ES6 Named Imports — importing specific exports
 *              from another module using destructured import syntax.
 * @concepts Named imports, ES6 modules, import syntax
 */

// Import specific named exports from module1 using { braces }
import { data, person, username } from './module1.js';

// Access and display imported values
console.log("Data array:", data);
console.log("Person object:", person);
console.log("Username:", username);
