/**
 * Assignment 7: Array Search Function
 * Find the index of a given element in an array
 * Returns "not found" if the element doesn't exist
 */

function searchArray(arr,target){
    let i 
    for(i =0;i<arr.length;i++){
        if (arr[i]===target)
            return i
    }
        return "not found "
}

console.log(searchArray([10,74,62,64,54],54))
console.log(searchArray([10,74,62,64,54],57))