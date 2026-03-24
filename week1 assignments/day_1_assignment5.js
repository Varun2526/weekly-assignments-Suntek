/**
 * Assignment 5: Find Biggest Number Function
 * Create a function that accepts three numbers and returns the largest
 */

function findBiggest(a,b,c){
    if(a>=b && a>=c){
        return a
    }
    else if (b >=a && b>=c)
        return b
    else
        return c
}
console.log(findBiggest(10,73,52))