/**
 * @file assignmentadv2.js
 * @description Student Grade System — comprehensive use of all five HOFs
 *              to filter, grade, average, and search student records.
 * @concepts filter(), map() with conditional logic, reduce(), find(), findIndex()
 */

// Student dataset with IDs, names, and marks
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 },
];

// 1. filter() — Get students who passed (marks >= 40)
const passedStudents = students.filter((student) => student.marks >= 40);
console.log("Passed students:", passedStudents);

// 2. map() — Assign letter grades based on marks using conditional logic
//    A: >= 90 | B: >= 70 | C: >= 50 | D: < 50
const gradedStudents = students.map((student) => {
    let grade;
    if (student.marks >= 90) grade = "A";
    else if (student.marks >= 70) grade = "B";
    else if (student.marks >= 50) grade = "C";
    else grade = "D";

    // Return a new object with the grade property added
    return { ...student, grade: grade };
});
console.log("Graded students:", gradedStudents);

// 3. reduce() — Calculate average marks across all students
// Initial value 0 ensures accumulator starts as a number, not an object
const totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
const averageMarks = totalMarks / students.length;
console.log("Average marks:", averageMarks);

// 4. find() — Find the student who scored exactly 92
const studentWith92 = students.find((student) => student.marks === 92);
console.log("Student with 92:", studentWith92);

// 5. findIndex() — Get the index of student named "Kiran"
const kiranIndex = students.findIndex((student) => student.name === "Kiran");
console.log("Kiran's index:", kiranIndex);
