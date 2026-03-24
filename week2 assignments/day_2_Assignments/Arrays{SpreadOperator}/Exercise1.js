/**
 * Exercise 1: Spread Operator - Array Copying
 * Shallow copy arrays and extend with new elements
 */

// 💡 Exercise 1: Copy & Extend an Array

//                         Goal: Learn array copying with spread
                        
//                         You are given:
//                                 let fruits = ["apple", "banana"];
                        
                        
//                         Tasks
//                               -> Create a new array moreFruits
                              
//                               -> Copy all fruits from fruits
                              
//                               -> Add "orange" at the end using spread
                              
//                               -> Print both arrays
                        
                        
//                         ✅ Expected Output
//                               ["apple", "banana"]
//                               ["apple", "banana", "orange"]
                        
//                         👉 Original array should NOT change.





let fruits = ["apple", "banana"];
//creating copy of an array and adding elements using spread operator
let moreFruits=[...fruits,"orange"]
//printing both the arrays to screen
console.log(fruits)
console.log(moreFruits)
