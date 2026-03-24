/**
 * Advanced Assignment 3: Employee Payroll Processor
 * Salary calculations with department filtering
 */

/*
ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"

*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

 //1. filter() employees from IT department
const itemployee= employees.filter((Element)=> Element.department === "IT")
console.log(itemployee)

// 2. map() to add:
           // netSalary = salary + 10% bonus
const updatedsalary = employees.map((element)=>{
   return {
        id: element.id,
        name: element.name,
        salary: element.salary,
        department: element.department,
        netSalary: element.salary + element.salary * 0.10}
   })
console.log(updatedsalary)

// 3. reduce() to calculate total salary payout
const totalsalary = employees.reduce((Accumulator,element)=> Accumulator + element.salary,0)
console.log(totalsalary)

// 4. find() employee with salary 30000

const findemployee = employees.find((element)=> element.salary === 30000)
console.log(findemployee)

//5. findIndex() of employee "Neha"
const findingIndexOfNeha = employees.findIndex((element)=>element.name ==='Neha')
console.log(findingIndexOfNeha)