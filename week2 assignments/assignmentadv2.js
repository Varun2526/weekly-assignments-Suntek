/**
 * Advanced Assignment 2: Student Performance Dashboard
 * Grade assignment and performance analysis
 */

/*
ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"

*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter () students who passed marks (marks >= 40 )
const passedStudents = students.filter((element)=> element.marks>=40)
console.log(passedStudents)

//2. map() to add a grade field
//              ≥90 → A
//              ≥75 → B
//              ≥60 → C
//              else → D
 let grade 
const gradedstudents = students.map((element)=> {
   
    if (element.marks >= 90)
         grade ='A'  /// 1 iteration was return A it gave a new array , 2 nd itteration was return grade='a' once it returned
                    // it  is not checking other conditions because it already returned the value once 
                        // then 3 rd itteration when it was retured with id : element.id it says undefined
    else if (element.marks >=75)
        grade ='B'
    else if (element.marks >= 60)
        grade ='C'
    else 
         grade ='D' 
    
    return {
        id : element.id,
        name : element.name,
       marks :element.marks,
        grade :grade //we should keep grade:grade because  we do not have a key with name grade in global
                        // so we create one variable named grade and assign the value to it and return it in new array - map always creates new array 
    }
})

console.log(gradedstudents)
/*
output :
  { id: 1, name: 'Ravi', marks: 78, grade: 'B' },
  { id: 2, name: 'Anjali', marks: 92, grade: 'A' },
  { id: 3, name: 'Kiran', marks: 35, grade: 'D' },
  { id: 4, name: 'Sneha', marks: 88, grade: 'B' },
  { id: 5, name: 'Arjun', marks: 40, grade: 'D' }
*/

// 3.reduce() to calculate average marks
const sum =students.reduce((accumulator,element)=> accumulator+element.marks,0) 
// we do not  keep ,0 it will print NaN  if we keep ,0 it will start from 0 and add marks and give some of marks 
const avg = sum /students.length
console.log(avg)

//4. find() the student who scored 92
const Studentwith92score = students.find((element)=> element.marks=== 92)
console.log(Studentwith92score)

//5. findIndex() of student "Kiran"

const findingIndexOfKiran = students.findIndex((element)=> element.name === 'Kiran')
console.log(findingIndexOfKiran)
