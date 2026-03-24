/**
 * Exercise 3: Rest Parameters - Sum Function
 * Demonstrate variable argument function with rest parameters
 */

// Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter

function SumOfElements(...a){
    let sum=a.reduce((Acc,ele)=>Acc+ele)
    console.log(sum)
}
SumOfElements(10,20,30,40)