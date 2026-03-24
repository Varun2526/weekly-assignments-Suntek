/**
 * Assignment 3: Student Marks Processor
 * Process exam results with filtering, mapping, and aggregation
 */

/*


Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/

const marks = [78, 92, 35, 88, 40, 67];
// 1. filter() marks ≥ 40 (pass marks)
let passmarks = marks.filter((Element)=> Element >=40)
console.log(passmarks)

// 2. map() to add 5 grace marks to each student

let gracemarks = marks.map((Element)=> Element+5)
console.log(gracemarks)

//3. reduce() to find highest mark
 let highestmark = marks.reduce((Accumulator,Element)=> Accumulator > Element ? Accumulator : Element)
    console.log(highestmark)
//4. find() first mark below 40
let firstmarkbelow40 = marks.find((Element)=> Element < 40)
console.log(firstmarkbelow40)

//5. findIndex() of mark 92

let indexof92 = marks.findIndex((Element)=> Element === 92)
console.log(indexof92)