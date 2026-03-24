/**
 * Exercise 2: Deep Copy
 * Demonstrates complete isolation with deep copying
 */

// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

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

// 🎯 Task:
//       1. Create a deep copy of order
//       2. Modify in copied object:
//             i. customer.address.city
//             ii. items[0].price
//             iii. Verify original object remains unchanged



//creating a copy
let copyOrder=structuredClone(order)
//changing the city
copyOrder.customer.address.city="Banglore"
//changing the price
copyOrder.items[0].price=100000
//printing both the objects
console.log(order)
console.log(copyOrder)