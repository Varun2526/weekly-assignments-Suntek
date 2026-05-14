/**
 * @file Exercise2.js
 * @description Deep Copy — demonstrates complete isolation using structuredClone()
 *              where modifying the copy never affects the original.
 * @concepts Deep copy, structuredClone(), nested object isolation
 */

// Original order object with deeply nested structure
const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

// Create a DEEP copy using structuredClone() — fully independent clone
// Unlike spread, this recursively copies all nested objects and arrays
let copyOrder = structuredClone(order);

// Modify nested properties in the deep copy
copyOrder.customer.address.city = "Bangalore";
copyOrder.items[0].price = 100000;

// Verify: original is completely unchanged despite nested modifications
console.log("Original:", JSON.stringify(order, null, 2));
// city: "Hyderabad", price: 70000 — untouched ✅

console.log("Deep copy:", JSON.stringify(copyOrder, null, 2));
// city: "Bangalore", price: 100000 — only copy changed ✅