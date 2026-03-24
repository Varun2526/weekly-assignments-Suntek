/**
 * OTP Countdown Simulator
 * Demonstrate setInterval and setTimeout coordination
 */

// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends


// console.log("OTP sent successfully")
// let count=10
// let intervalId=setInterval(()=>{console.log(count--); if(count===0)clearInterval(intervalId)},1000)
// setTimeout(()=>{
//     console.log("Resend OTP")
// },10000)


////sir////
console.log("OTP sent successfully")
let seconds=10
let timerId=setInterval(()=>{
    seconds--;
    console.log(`OTP can resended in ${seconds} seconds`)
    if(seconds===0){
        clearInterval(timerId)
        console.log("Resend OTP")
    }},1000);