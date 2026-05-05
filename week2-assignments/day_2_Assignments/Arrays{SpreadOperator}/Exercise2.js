/**
 * @file Exercise2.js
 * @description Spread Operator — Object Cloning. Clone an object and add
 *              new properties without modifying the original.
 * @concepts Object spread, immutable updates, property addition
 */

// Original user object
let user = {
    name: "Ravi",
    city: "Hyderabad"
};

// Clone the object and add a new 'age' property using spread
// Spread copies all key-value pairs into a new object
let updatedUser = { ...user, age: 25 };

// Verify: original remains unchanged, new object has the extra property
console.log("Original:", user);       // { name: "Ravi", city: "Hyderabad" }
console.log("Updated:", updatedUser); // { name: "Ravi", city: "Hyderabad", age: 25 }