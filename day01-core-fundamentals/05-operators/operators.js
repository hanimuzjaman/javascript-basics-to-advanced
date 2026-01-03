/**
 * OPERATORS IN JAVASCRIPT
 *
 * Operators are not just syntax — they define how values are evaluated,
 * coerced, compared, and short-circuited.
 *
 * Misunderstanding operators leads to:
 * - Logic bugs
 * - Security issues
 * - Performance problems
 */

/* -----------------------------------------
   ARITHMETIC OPERATORS
----------------------------------------- */

let a = 10;
let b = 3;

console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // remainder

// Increment / Decrement
let counter = 0;
counter++;
counter--;
console.log(counter);

/* -----------------------------------------
   COMPARISON OPERATORS
----------------------------------------- */

// Loose equality (performs type coercion)
console.log(5 == "5"); // true

// Strict equality (NO coercion)
console.log(5 === "5"); // false

// Relational comparisons
console.log(10 > 5);
console.log(10 >= 10);

/* -----------------------------------------
   TYPE COERCION EXAMPLES
----------------------------------------- */

console.log(1 + "2");    // "12"
console.log("5" - 2);    // 3
console.log(true + 1);   // 2
console.log(null + 1);   // 1
console.log(undefined + 1); // NaN

/* -----------------------------------------
   LOGICAL OPERATORS & SHORT CIRCUIT
----------------------------------------- */

function expensiveOperation() {
  console.log("Expensive operation executed");
  return true;
}

// Short-circuit prevents function execution
false && expensiveOperation();

// Common real-world pattern
const username = null;
const displayName = username || "Guest";
console.log(displayName);

/* -----------------------------------------
   NULLISH COALESCING
----------------------------------------- */

const score = 0;
console.log(score || 100);  // 100 (undesired)
console.log(score ?? 100);  // 0 (correct)

/* -----------------------------------------
   TERNARY OPERATOR
----------------------------------------- */

const age = 19;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);