/**
 * @file assignment3.js
 * @description Student Marks Processor — process exam results with filtering,
 *              grace marks, finding highest mark, and searching.
 * @concepts filter(), map(), reduce() for max value, find(), findIndex()
 */

// Array of exam marks
const marks = [78, 92, 35, 88, 40, 67];

// 1. filter() — Get only passing marks (>= 40)
let passingMarks = marks.filter((mark) => mark >= 40);
console.log("Passing marks:", passingMarks);

// 2. map() — Add 5 grace marks to each student's score
let withGrace = marks.map((mark) => mark + 5);
console.log("After grace marks:", withGrace);

// 3. reduce() — Find the highest mark using ternary comparison
let highestMark = marks.reduce((max, mark) => max > mark ? max : mark);
console.log("Highest mark:", highestMark);

// 4. find() — Get the first failing mark (below 40)
let firstFail = marks.find((mark) => mark < 40);
console.log("First mark below 40:", firstFail);

// 5. findIndex() — Get the index of mark 92
let indexOf92 = marks.findIndex((mark) => mark === 92);
console.log("Index of 92:", indexOf92);