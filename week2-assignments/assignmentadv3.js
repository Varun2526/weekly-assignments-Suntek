/**
 * @file assignmentadv3.js
 * @description Employee Payroll Processor — salary calculations with
 *              department filtering and bonus computation.
 * @concepts filter() by property, map() for computed fields, reduce() for totals
 */

// Employee dataset with salary and department info
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() — Get only employees from the IT department
const itEmployees = employees.filter((emp) => emp.department === "IT");
console.log("IT employees:", itEmployees);

// 2. map() — Add netSalary field (salary + 10% bonus) to each employee
const withBonus = employees.map((emp) => {
    return {
        ...emp,
        netSalary: emp.salary + emp.salary * 0.10 // 10% bonus added
    };
});
console.log("With bonus:", withBonus);

// 3. reduce() — Calculate total salary payout for all employees
const totalPayout = employees.reduce((total, emp) => total + emp.salary, 0);
console.log("Total payout:", totalPayout);

// 4. find() — Find the employee with salary 30000
const lowSalaryEmp = employees.find((emp) => emp.salary === 30000);
console.log("Employee with salary 30000:", lowSalaryEmp);

// 5. findIndex() — Get the index of "Neha"
const nehaIndex = employees.findIndex((emp) => emp.name === "Neha");
console.log("Neha's index:", nehaIndex);