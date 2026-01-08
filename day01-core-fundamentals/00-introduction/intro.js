/* =====================================================
   BASIC — Output & Sequential Execution
===================================================== */

// JavaScript executes statements sequentially
console.log("Hello JavaScript");
console.log("Execution is synchronous by default");

/* =====================================================
   INTERMEDIATE — Functions & Runtime Awareness
===================================================== */

// Function definition
function greet(name) {
  return "Hello, " + name;
}

// Function invocation
console.log(greet("World"));

/*
JavaScript does not execute directly on hardware.
It runs inside a runtime:
- Browser
- Node.js
*/

/* =====================================================
   ADVANCED — Execution Order & Dynamic Typing
===================================================== */

console.log("Start");

function task() {
  console.log("Task executed");
}

task();

console.log("End");

// Dynamic typing
let value = 10;
console.log(typeof value);

value = "ten";
console.log(typeof value);

value = true;
console.log(typeof value);
