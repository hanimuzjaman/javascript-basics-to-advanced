/* =====================================================
   CLOSURES IN JAVASCRIPT
   Basic → Intermediate → Advanced → Real-World
===================================================== */

/* =========================
   1. BASIC CLOSURE
========================= */

// A function remembering variables from its outer scope
function outer() {
  let message = "Hello from outer";

  function inner() {
    console.log(message); // inner remembers 'message'
  }

  return inner;
}

const fn = outer();
fn(); // "Hello from outer"

/* =========================
   2. WHY CLOSURES WORK
========================= */

// Variable is not destroyed after outer function execution
function counterBase() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = counterBase();
console.log(counter1()); // 1
console.log(counter1()); // 2

/* =========================
   3. MULTIPLE INSTANCES
========================= */

// Each closure has its own lexical environment
const counter2 = counterBase();
console.log(counter2()); // 1
console.log(counter2()); // 2

// counter1 and counter2 do NOT share state

/* =========================
   4. CLOSURE WITH PARAMETERS
========================= */

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

/* =========================
   5. DATA ENCAPSULATION (PRIVATE VARIABLES)
========================= */

function createUser(name) {
  let password = "secret123"; // private variable

  return {
    getName() {
      return name;
    },
    validatePassword(input) {
      return input === password;
    },
  };
}

const user = createUser("Alex");
console.log(user.getName()); // Alex
console.log(user.validatePassword("x")); // false
console.log(user.password); // undefined

/* =========================
   6. CLOSURES IN CALLBACKS
========================= */

function delayedMessage(msg, delay) {
  setTimeout(() => {
    console.log(msg); // msg preserved via closure
  }, delay);
}

delayedMessage("Executed later", 1000);

/* =========================
   7. LOOP + CLOSURE PROBLEM
========================= */

// Using var (problematic)
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log("var:", i), 500);
}

// Using let (block-scoped, fixed)
for (let j = 1; j <= 3; j++) {
  setTimeout(() => console.log("let:", j), 500);
}

/* =========================
   8. REAL-WORLD UTILITY: ONCE
========================= */

// Function executes only once
function once(fn) {
  let executed = false;

  return function (...args) {
    if (!executed) {
      executed = true;
      return fn(...args);
    }
  };
}

const init = once(() => console.log("Initialized"));
init(); // runs
init(); // ignored

/* =========================
   9. MEMOIZATION USING CLOSURES
========================= */

function memoizedSquare() {
  const cache = {};

  return function (n) {
    if (cache[n]) {
      console.log("From cache");
      return cache[n];
    }
    console.log("Computed");
    cache[n] = n * n;
    return cache[n];
  };
}

const square = memoizedSquare();
console.log(square(4)); // Computed
console.log(square(4)); // From cache

/* =========================
   10. MODULE PATTERN (PRE-ES6)
========================= */

const calculator = (function () {
  let total = 0; // private state

  return {
    add(x) {
      total += x;
      return total;
    },
    subtract(x) {
      total -= x;
      return total;
    },
  };
})();

console.log(calculator.add(10)); // 10
console.log(calculator.subtract(3)); // 7
console.log(calculator.total); // undefined

/* =========================
   11. COMMON PITFALL
========================= */

// Closures hold REFERENCES, not copies
function referenceDemo() {
  let value = 10;

  return function () {
    console.log(value);
  };
}

const refFn = referenceDemo();
value = 100; // unrelated variable, no effect
refFn(); // 10

/* =========================
   12. INTERVIEW CLASSIC
========================= */

// Closure-based private counter
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
  };
}

const c = createCounter();
console.log(c.increment()); // 1
console.log(c.increment()); // 2
console.log(c.decrement()); // 1
