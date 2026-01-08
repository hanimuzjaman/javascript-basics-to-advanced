/* =====================================================
   1. FUNCTION DECLARATION
   Hoisted to the top of their scope. Can be called
   before they are defined in the code.
===================================================== */
function add(a, b) {
  return a + b;
}
console.log("Add:", add(2, 3));

/* =====================================================
   2. FUNCTION EXPRESSION
   Stored in a variable. Not hoisted; must be defined
   before being called.
===================================================== */
const subtract = function (a, b) {
  return a - b;
};
console.log("Subtract:", subtract(5, 2));

/* =====================================================
   3. NAMED FUNCTION EXPRESSION
   Useful for recursion and better stack traces
   during debugging.
===================================================== */
const factorial = function computeFactorial(n) {
  if (n === 0) return 1;
  // 'computeFactorial' is only available inside this function
  return n * computeFactorial(n - 1);
};
console.log("Factorial:", factorial(5));

/* =====================================================
   4. ARROW FUNCTION
   Short syntax. Does not have its own 'this',
   making it ideal for array methods and callbacks.
===================================================== */
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(3, 4));

/* =====================================================
   5. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
   Runs as soon as it is defined. Used to create
   private scopes and avoid global variable pollution.
===================================================== */
(function () {
  const privateVar = "I am hidden";
  console.log("IIFE: Module initialized.");
})();

/* =====================================================
   6. CALLBACK FUNCTION
   A function passed as an argument to another function
   to be executed later.
===================================================== */
function processUserInput(name, callback) {
  callback(`Hello, ${name}`);
}

processUserInput("Alex", function (message) {
  console.log("Callback:", message);
});

/* =====================================================
   7. HIGHER-ORDER FUNCTION
   A function that takes a function as an argument
   OR returns a new function.
===================================================== */
function withLogging(fn) {
  return function (x) {
    console.log(`Executing with input: ${x}`);
    return fn(x);
  };
}

const square = withLogging((n) => n * n);
console.log("Square (HOF):", square(5));

/* =====================================================
   8. REST PARAMETERS
   Allows a function to accept an indefinite
   number of arguments as an array.
===================================================== */
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum All:", sumAll(1, 2, 3, 4, 5));

/* =====================================================
   9. DEFAULT PARAMETERS
   Provides fallback values if an argument
   is undefined or omitted.
===================================================== */
function greetUser(name = "Guest") {
  return `Welcome, ${name}`;
}
console.log("Default Param:", greetUser());

/* =====================================================
   10. GENERATOR FUNCTION
   Can pause execution using 'yield' and resume
   later. Great for handling large datasets or iterators.
===================================================== */
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++; // Pauses here until .next() is called
  }
}

const gen = idGenerator();
console.log("Gen ID 1:", gen.next().value);
console.log("Gen ID 2:", gen.next().value);

/* =====================================================
   11. ASYNC FUNCTION
   Handles asynchronous operations cleanly using
   Promises behind the scenes.
===================================================== */
async function fetchData() {
  // Simulates an API call
  return "Data received from server";
}

fetchData().then((data) => console.log("Async:", data));

/* =====================================================
   12. RECURSIVE FUNCTION
   A function that calls itself until it hits
   a 'base case' (exit condition).
===================================================== */
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci (Recursive):", fibonacci(6));

/* =====================================================
   13. METHOD (OBJECT FUNCTION)
   A function defined as a property of an object.
===================================================== */
const person = {
  firstName: "John",
  sayHi() {
    return `Hi, I'm ${this.firstName}`; // 'this' refers to 'person'
  },
};
console.log("Method:", person.sayHi());

/* =====================================================
   14. CONSTRUCTOR FUNCTION
   Used with the 'new' keyword to create
   multiple instances of an object type.
===================================================== */
function Car(model) {
  this.model = model;
}

const myCar = new Car("Tesla");
console.log("Constructor:", myCar.model);

/* =====================================================
   15. PURE FUNCTION
   Always returns the same output for the same input
   and has no side effects (doesn't change external vars).
===================================================== */
function pureAdd(a, b) {
  return a + b;
}

/* =====================================================
   16. IMPURE FUNCTION
   Depends on or modifies state outside its scope.
===================================================== */
let globalCount = 0;
function impureIncrement() {
  globalCount++; // Modifies external variable
  return globalCount;
}

/* =====================================================
   17. CLOSURE
   A function that "remembers" its lexical scope
   even when the function is executed outside that scope.
===================================================== */
function createCounter() {
  let count = 0; // "Private" variable
  return function () {
    return ++count;
  };
}

const increment = createCounter();
console.log("Closure 1:", increment()); // 1
console.log("Closure 2:", increment()); // 2

/* =====================================================
   18. CURRIED FUNCTION
   Translates a function with multiple arguments into
   a sequence of functions, each taking one argument.
===================================================== */
const curryAdd = (a) => (b) => a + b;

const addFive = curryAdd(5);
console.log("Curried:", addFive(3)); // 8

/* =====================================================
   19. "ONCE" UTILITY (HOC Pattern)
   Ensures a function can only be run one time,
   preventing duplicate actions (like clicking "Submit").
===================================================== */
function runOnce(fn) {
  let hasRun = false;
  return function (...args) {
    if (!hasRun) {
      hasRun = true;
      return fn(...args);
    }
    console.warn("Blocked: This function can only run once.");
  };
}

const initializeApp = runOnce(() => console.log("App Initialized!"));
initializeApp();
initializeApp(); // This call will be ignored

/* =====================================================
   20. FACTORY FUNCTION (Function Returning Function)
   Creates specialized versions of a function based
   on the initial input.
===================================================== */
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const triple = createMultiplier(3);
console.log("Factory (Triple 10):", triple(10));
