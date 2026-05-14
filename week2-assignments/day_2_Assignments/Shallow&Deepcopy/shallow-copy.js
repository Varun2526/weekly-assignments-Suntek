/**
 * @file Exercise1.js
 * @description Shallow Copy — demonstrates that spread operator creates a
 *              shallow copy where nested objects still share references.
 * @concepts Shallow copy, spread operator, reference vs value types
 */

// Original object with a nested 'preferences' object
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

// Create a shallow copy using spread operator
let copyUser = { ...user };

// Modify primitive property — only affects the copy (independent)
copyUser.name = "Hareesh";

// Modify nested object property — affects BOTH original and copy!
// This is because spread only copies the reference to nested objects
copyUser.preferences.theme = "light";

// Observe: 'name' changed only in copy, but 'theme' changed in both
console.log("Original:", user);
// { id: 101, name: "Ravi", preferences: { theme: "light", language: "en" } }
// ⚠️ Note: theme is "light" in the original too — shallow copy gotcha!

console.log("Copy:", copyUser);
// { id: 101, name: "Hareesh", preferences: { theme: "light", language: "en" } }