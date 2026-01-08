/* =====================================================
   ARGUMENTS / DEFAULT / REST / SPREAD
   Basic → Intermediate → Advanced
===================================================== */

/* =========================
   1. arguments (LEGACY)
========================= */

// Available only in regular functions
function showArguments() {
  console.log("arguments:", arguments);
  console.log("First argument:", arguments[0]);
}

showArguments(10, 20, 30);

// arguments is NOT available in arrow functions
const arrowArgs = () => {
  try {
    console.log(arguments);
  } catch {
    console.log("Arrow functions do not have 'arguments'");
  }
};

arrowArgs(1, 2);

/* =========================
   2. DEFAULT PARAMETERS
========================= */

// Basic default parameter
function greet(name = "Guest") {
  return `Hello ${name}`;
}

console.log(greet());
console.log(greet("Alex"));

// Default parameters are only applied for undefined
function testDefaults(x = 10) {
  console.log(x);
}

testDefaults(undefined); // 10
testDefaults(null); // null

/* =========================
   3. REST PARAMETERS
========================= */

// Collect unlimited arguments into an array
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4));

// Rest must be the LAST parameter
function log(level, ...messages) {
  console.log(`[${level}]`, messages.join(" "));
}

log("INFO", "Server", "started", "successfully");

/* =========================
   4. SPREAD OPERATOR
========================= */

// Spread in function calls
function multiply(a, b, c) {
  return a * b * c;
}

const values = [2, 3, 4];
console.log(multiply(...values));

// Spread with arrays (copy & merge)
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

// Spread with objects (shallow copy & merge)
const user = { name: "Alex", age: 25 };
const updatedUser = { ...user, role: "admin" };

console.log(updatedUser);

/* =========================
   5. REST vs SPREAD (REAL-WORLD)
========================= */

// REST: collect parameters
const logger = (...args) => {
  console.log("Logged values:", args);
};

logger("Error", 404, "Not Found");

// SPREAD: expand values
const data = [10, 20, 30];
logger(...data);

/* =========================
   6. ADVANCED PATTERNS
========================= */

// Using defaults + rest together
function createUser(name = "Anonymous", ...skills) {
  return { name, skills };
}

console.log(createUser("John", "JS", "Node", "React"));

// Function cloning arguments immutably
function cloneAndAdd(arr, value) {
  return [...arr, value];
}

console.log(cloneAndAdd([1, 2, 3], 4));

/* =========================
   7. COMMON PITFALL DEMO
========================= */

// ❌ Rest parameter not last
// function bad(a, ...b, c) {} // SyntaxError

// ❌ Expecting default to override null
function demo(x = 5) {
  console.log(x);
}

demo(null); // null (default NOT applied)
demo(); // 5
