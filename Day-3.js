// Objective
// In this challenge, we learn about conditional statements. Check out the Tutorial tab for learning materials and an instructional video.
// Task
// Given an integer, , perform the following conditional actions:

// If n is odd, print Weird
// If n is even and in the inclusive range of 2 to 5, print Not Weird
// If n is even and in the inclusive range of 6 to 20, print Weird
// If n is even and greater than 20, print Not Weird
// Complete the stub code provided in your editor to print whether or not n is weird.

// Input Format

// A single line containing a positive integer, .

// Constraints
// 1<=n<=100

// Output Format

// Print Weird if the number is weird; otherwise, print Not Weird.

// Sample Input 0

// 3
// Sample Output 0

// Weird
// Sample Input 1

// 24
// Sample Output 1

// Not Weird

// Explanation

// Sample Case 0: n=3
// n is odd and odd numbers are weird, so we print Weird.

// Sample Case 1: n=24
// n is even and n is greater than 20, so it is not weird. Thus, we print Not Weird



// **SOLUTION**

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  if (n > 1 && n < 100) {
    if (n % 2 !== 0) {
      console.log("Weird");
    } else if (n % 2 === 0 && n >= 2 && n <= 5) {
      console.log("Not weird");
    } else if (n % 2 === 0 && n >= 6 && n <= 20) {
      console.log("weird");
    } else if (n % 2 === 0 && n > 20) {
      console.log("Not Weird");
    }
  }
}

