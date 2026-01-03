/**
 * ITERATION IN JAVASCRIPT — BASIC → INTERMEDIATE → ADVANCED
 *
 * Loops allow repeated execution of code.
 * Incorrect loop design can lead to:
 * - Infinite loops
 * - Performance bottlenecks
 * - Memory pressure
 * - Hard-to-debug logic
 *
 * Correct loop design emphasizes:
 * - Clear termination conditions
 * - Predictable iteration
 * - Readability over cleverness
 */

/* =====================================================
   BASIC — for LOOP (Deterministic Iteration)
===================================================== */

// Use when the number of iterations is known in advance
for (let i = 0; i < 3; i++) {
  console.log("for loop index:", i);
}

/*
Characteristics:
- Initialization, condition, and update are explicit
- Most commonly used loop
- Ideal for index-based traversal
*/

/* =====================================================
   BASIC — while LOOP (Condition-Based Iteration)
===================================================== */

// Use when iteration depends on a condition
let count = 0;

while (count < 3) {
  console.log("while loop count:", count);
  count++;
}

/*
Characteristics:
- Condition checked before each iteration
- Risk of infinite loop if update is missed
*/

/* =====================================================
   BASIC — do-while LOOP (At-Least-Once Execution)
===================================================== */

// Use when logic must run at least once
let attempts = 0;

do {
  console.log("do-while attempt:", attempts);
  attempts++;
} while (attempts < 1);

/*
Characteristics:
- Executes once even if condition is false
- Common in input validation and retry logic
*/

/* =====================================================
   INTERMEDIATE — LOOP CONTROL (break & continue)
===================================================== */

// continue → skips current iteration
// break → exits loop entirely
for (let i = 0; i < 5; i++) {
  if (i === 1) continue; // skip index 1
  if (i === 4) break;    // stop loop at index 4
  console.log("controlled loop:", i);
}

/*
Use loop control carefully:
- Overuse reduces readability
- Prefer clear loop conditions when possible
*/

/* =====================================================
   INTERMEDIATE — ITERATING OVER DATA
===================================================== */

// Iterating over an array
const users = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < users.length; i++) {
  console.log("User:", users[i]);
}

/*
Best practice:
- Cache array length if loop is large
- Avoid modifying array while iterating
*/

/* =====================================================
   ADVANCED — NESTED LOOPS (PERFORMANCE CAUTION)
===================================================== */

// Nested loops multiply execution cost
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

/*
Time Complexity:
- Single loop → O(n)
- Nested loop → O(n²)

Avoid nested loops on large datasets unless necessary
*/

/* =====================================================
   ADVANCED — DEFENSIVE LOOP DESIGN
===================================================== */

// Protect against infinite loops
let safetyCounter = 0;

while (true) {
  if (safetyCounter >= 3) {
    console.log("Loop terminated safely");
    break;
  }
  safetyCounter++;
}

/*
Defensive techniques:
- Explicit exit conditions
- Safety counters
- Timeouts in async loops
*/

/* =====================================================
   ADVANCED — WHEN NOT TO USE LOOPS
===================================================== */

/*
Avoid traditional loops when:
- Array methods improve clarity (map, filter, reduce)
- Declarative style is more readable
- Functional transformations are sufficient

Loops are powerful, but not always the best abstraction.
*/