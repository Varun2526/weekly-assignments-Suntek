/**
 * Assignment 6: Array Sum Function
 * Write a function that accepts an array and returns the sum of all elements
 */

function sumArray (arr){
    let sum = 0;
    let i
    for (i =0;i<arr.length;i++){
        sum = sum+arr[i]
    }
    return sum
}
console.log(sumArray([10,62,74,72,53]))