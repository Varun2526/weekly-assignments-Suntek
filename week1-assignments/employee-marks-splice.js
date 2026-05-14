/**
 * @file day2-employee-marks.js
 * @description Employee records manipulation using array methods.
 *              Tasks: insert, remove, and modify employee objects using splice.
 * @concepts Objects, arrays, splice(), for...of loop
 */

// Employee dataset — each employee has an ID, name, and marks array
const employees = [
  {
    eno: 101,
    name: "Ravi.",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

// --- Task 1: Insert a new employee at the 2nd position (index 2) ---
// splice(startIndex, deleteCount, newItem) — 0 deletes, inserts at position 2
employees.splice(2, 0, {
    eno: 112,
    name: 'varun',
    marks: [65, 68, 89]
});
console.log("After insertion:", employees);

// --- Task 2: Remove employee with name "Kiran" ---
// Using for...of to find and remove by name
for (let emp of employees) {
    if (emp.name === "Kiran") {
        const index = employees.indexOf(emp);
        employees.splice(index, 1); // Remove 1 element at the found index
        break;
    }
}
console.log("After removing Kiran:", employees);

// --- Task 3: Change the last mark of "Sneha" from 95 to 75 ---
// Find Sneha and update her last mark directly
for (let emp of employees) {
    if (emp.name === "Sneha") {
        emp.marks[emp.marks.length - 1] = 75; // Update the last element
        break;
    }
}
console.log("After updating Sneha's mark:", employees);
