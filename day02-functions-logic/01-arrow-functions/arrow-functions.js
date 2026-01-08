/* =====================================================
   BASIC: ARROW FUNCTION SYNTAX
===================================================== */

// Implicit return (No braces needed for single-line logic)
const add = (a, b) => a + b;

// Parentheses are optional for a single parameter
const square = (x) => x * x;

// Parentheses are required for zero parameters
const greet = () => "Hello World";

console.log(add(2, 3)); // 5
console.log(square(4)); // 16
console.log(greet()); // "Hello World"

/* =====================================================
   INTERMEDIATE: MULTI-LINE & CALLBACKS
===================================================== */

// Explicit return: Braces {} require the 'return' keyword
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// Usage in functional programming (Array methods)
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log("Doubled Array:", doubled);

/* =====================================================
   CORE CONCEPT: 'THIS' BINDING
===================================================== */

const user = {
  name: "Alex",

  // Regular functions create their own 'this' context
  regularFunction() {
    setTimeout(function () {
      // 'this' here refers to the Timeout object, not 'user'
      console.log("Regular Function 'this':", this.name); // undefined
    }, 500);
  },

  // Arrow functions inherit 'this' from the parent scope (lexical)
  arrowFunction() {
    setTimeout(() => {
      // 'this' refers to the 'user' object
      console.log("Arrow Function 'this':", this.name); // "Alex"
    }, 500);
  },
};

user.regularFunction();
user.arrowFunction();

/* =====================================================
   ADVANCED: OBJECTS & HOFs
===================================================== */

// To return an object implicitly, wrap it in parentheses ()
// Otherwise, JS thinks the {} are function braces
const createUser = (name, age) => ({ name, age });

console.log(createUser("John", 25));

// Arrow functions in Higher-Order Functions (HOF)
const once = (fn) => {
  let called = false;
  return (...args) => {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
};

const init = once(() => console.log("System Booted"));
init(); // Executes
init(); // Ignored

/* =====================================================
   PITFALLS & LIMITATIONS
===================================================== */

// ❌ PITFALL 1: Methods in Objects
// Arrow functions don't bind 'this', so they look to the global scope
const badUser = {
  name: "Error",
  greet: () => `Hello, ${this.name}`,
};
console.log(badUser.greet()); // "Hello, undefined"

// ❌ PITFALL 2: Constructors
// Arrow functions cannot be used with the 'new' keyword
const Person = (name) => {
  this.name = name;
};
// const p1 = new Person("Alex"); // Throws TypeError

// ❌ PITFALL 3: Arguments Object
// Arrow functions do not have their own 'arguments' array
const noArgs = () => {
  try {
    console.log(arguments);
  } catch (e) {
    console.log("Arrow functions have no 'arguments' object");
  }
};
noArgs(1, 2);
