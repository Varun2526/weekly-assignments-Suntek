/**
 * Module 1: Named Exports
 * Exports data, objects, and strings for use in other modules
 * Demonstrates ES6 module export syntax
 */

    //named export 
export let data = [65,75,8549,237,753,752,652,]
export let person ={
    name : "varun",
    age : 24,
    city : "hyderabad"
}
export let username = "bhanu"
//export
    //default export 
    // export default {data,person,username}

    //named export 


//circular export is a situation where two or more modules depend on each other directly or indirectly, creating a loop in the dependency graph.
//This can lead to issues such as infinite loops, memory leaks, and unexpected behavior in the application.
//To avoid circular exports, it's important to design the module structure carefully and ensure that modules do not have circular dependencies on each other.