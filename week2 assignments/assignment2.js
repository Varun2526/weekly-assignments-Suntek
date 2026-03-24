/**
 * Assignment 2: Online Course Processor
 * Filter, transform, and concatenate course names using array methods
 */

/*
Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"

*/

const courses = ["javascript", "react", "node", "mongodb", "express"];

//filter() courses with name length > 5

let morethan5charlength = courses.filter((Element)=> Element.length > 5)
console.log(morethan5charlength)

//map() to convert course names to uppercase

let upper = courses.map((Element)=>Element.toUpperCase())
console.log(upper)

//reduce() to generate a single string:
    //          "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let concatString = courses.reduce((Accumulator,Element)=> Accumulator+'|'+Element)
console.log(concatString.toUpperCase())

//find() the course "react"
let findele = courses.find((Element)=> Element === 'react')
console.log(findele)

//5. findIndex() of "node"

let indexofele = courses.findIndex((Element)=> Element=== 'node')
console.log(indexofele)