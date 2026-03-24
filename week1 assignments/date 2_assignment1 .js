/**
 * Assignment 1: Employee Marks Analysis
 * Process employee records and calculate their average marks using array methods
 */

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
    marks:[90, 85, 87],
  },
];




// Insert new Emp at 2nd position
    employees.splice(2,0,{
        eno: 112,
        name: 'varun',
        marks :[65,68,89]

    })
    console.log(employees)
// Remove an emp with name "Kiran"
    // employees.pop("kiran")
    //employees.splice(4,1)
    //console.log(employees)

    for(a of employees)
    {
      if (a.name =="kiran")
      {
        a.employees.pop()
      }
      
    }
console.log(employees)
    

//3.Change the last mark 95 to 75 of emp  "Sneha"
    employees.splice(3,1,
      {eno :103,
      name : 'Sneha' ,
      marks:[88,92,95]
      }
    )
  console.log(employees)

