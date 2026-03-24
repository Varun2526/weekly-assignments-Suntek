/**
 * Assignment 1: Daily Temperature Analyzer
 * Process weather data using modern array methods.
 * Filter above threshold, convert units with map, calculate averages with reduce.
 */

/* Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
    
    */

const temperatures = [32, 35, 28, 40, 38, 30, 42]

//filter
let r1 =[]
 r1 =temperatures.filter((element)=>element > 35)
 console.log(r1)

 //map
 const r2 = temperatures.map((element) => ((element*1.8)+32))
 console.log(r2)

 //reduce
    const sum = temperatures.reduce((acc,element) => acc + element)
    const avg = sum/temperatures.length

    console.log(avg)
// find() first temperature above 40
 let mintemp = temperatures.find((element)=> element >40)
 console.log(mintemp)

//findIndex() of temperature 28

let tempindex = temperatures.findIndex((element)=> element===28 )
console.log(tempindex)