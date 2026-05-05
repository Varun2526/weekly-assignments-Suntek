/**
 * @file ExamPortalSimulator.js
 * @description Exam Portal Simulator — demonstrates sequential async
 *              operations using setTimeout for delayed message display.
 * @concepts setTimeout(), asynchronous JavaScript, callback scheduling
 */

// Step 1: Immediate feedback to the student
console.log("Exam submitted successfully");

// Step 2: Show evaluation message after 2 seconds
setTimeout(() => {
    console.log("Evaluating answers...");
}, 2000);

// Step 3: Show result after 4 seconds
setTimeout(() => {
    console.log("Result: Pass ✅");
}, 4000);