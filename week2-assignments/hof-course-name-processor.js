/**
 * @file assignment2.js
 * @description Online Course Name Processor — filter, transform, and concatenate
 *              course names using higher-order array methods.
 * @concepts filter(), map(), reduce() for string concatenation, find(), findIndex()
 */

// Array of course names (all lowercase)
const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() — Keep only courses with name length > 5 characters
let longCourses = courses.filter((course) => course.length > 5);
console.log("Courses with length > 5:", longCourses);

// 2. map() — Convert all course names to UPPERCASE
let upperCourses = courses.map((course) => course.toUpperCase());
console.log("Uppercase courses:", upperCourses);

// 3. reduce() — Join all course names into a single pipe-separated string
let courseString = courses.reduce((acc, course) => acc + " | " + course);
console.log("Joined:", courseString.toUpperCase());

// 4. find() — Find the course "react"
let reactCourse = courses.find((course) => course === "react");
console.log("Found course:", reactCourse);

// 5. findIndex() — Get the index of "node"
let nodeIndex = courses.findIndex((course) => course === "node");
console.log("Index of 'node':", nodeIndex);