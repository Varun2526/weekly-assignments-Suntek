/**
 * @file OTPSimulator.js
 * @description OTP Countdown Simulator — demonstrates setInterval for
 *              periodic countdown and clearInterval to stop the timer.
 * @concepts setInterval(), clearInterval(), timer management
 */

// Step 1: Simulate OTP being sent
console.log("OTP sent successfully 📱");

// Step 2: Start a 10-second countdown using setInterval
let seconds = 10;

const timerId = setInterval(() => {
    seconds--;
    console.log(`OTP can be resent in ${seconds} seconds`);

    // Step 3: When countdown reaches 0, stop the timer and allow resend
    if (seconds === 0) {
        clearInterval(timerId); // Stop the repeating interval
        console.log("You can now resend the OTP ✅");
    }
}, 1000); // Execute every 1000ms (1 second)