/**
 * Exercise 1: Shallow Copy
 * Demonstrates shallow copy behavior and nested reference issues
 */

// Given Data:
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
    }
};

// 🎯 Task
//     1. Create a shallow copy of user
//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t

//creating the copy of an object
let copyUser={...user}
//changing name in the copied obj
copyUser.name="Hareesh"
//changing preferences
copyUser.preferences.theme="light"
//printing both objects
console.log(user)
console.log(copyUser)