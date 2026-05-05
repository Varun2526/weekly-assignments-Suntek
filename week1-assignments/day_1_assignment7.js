/**
 * @file day_1_assignment7.js
 * @description Function to find the index of a given element in an array.
 *              Returns "not found" if the element doesn't exist.
 * @concepts Functions, linear search, early return pattern
 */

/**
 * Searches for a target element in an array using linear search.
 * @param {Array} arr - The array to search through
 * @param {*} target - The value to find
 * @returns {number|string} The index of the element, or "not found" if absent
 */
function searchArray(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            return i; // Return index immediately when found (early return)
    }
    return "not found "; // Element was not in the array
}

// Test 1: 54 is at index 4
console.log(searchArray([10, 74, 62, 64, 54], 54));

// Test 2: 57 is not in the array
console.log(searchArray([10, 74, 62, 64, 54], 57));