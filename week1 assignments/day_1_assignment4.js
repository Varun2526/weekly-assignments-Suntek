/**
 * Assignment 4: Find Minimum Array Element
 * Locate the smallest value in a marks array
 */

let a =[64,6483,75,32,93,20]
let smallest = a[0]
let i 
for (i =1;i<a.length;i++){
    if (a[i] < smallest ){
        smallest = a[i]
    }

}
console.log(`smallest element in the array is ${smallest}`)