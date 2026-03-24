/**
 * Advanced Assignment 1: E-commerce Shopping Cart
 * Real-world cart analysis using array methods
 */

/*
ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
*/ 

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//1. Use filter() to get only inStock products
let instockprices = cart.filter((Element)=>Element.inStock === true)
console.log(instockprices)

//2. Use map() to create a new array with:  { name, totalPrice }
let nameandtotalprice = cart.map((Element)=> {
    return {name: Element.name, Price: Element.price * Element.quantity,}
})
console.log(nameandtotalprice)
//3.Use reduce() to calculate grand total cart value
let grandtotal = cart.reduce((Accumulator,Element) => Accumulator + (Element.price * Element.quantity),0)
console.log(grandtotal)

//4. Use find() to get details of "Mouse"
let findmouse = cart.find((Element)=> Element.name === "Mouse")
console.log(findmouse)

//5. Use findIndex() to find the position of "Keyboard"
let indexofkeyboard = cart.findIndex((Element)=> Element.name === "Keyboard")
console.log(indexofkeyboard)