# All Functions in JavaScript — Complete Guide

JavaScript functions are first-class objects.
Understanding them means understanding JavaScript itself.

---

## 1. Function Declaration

- Fully hoisted
- Stored in memory during creation phase
- Callable before definition

Used for:

- Core utilities
- Global logic

---

## 2. Function Expression

- Stored in variables
- Not hoisted as functions
- Executed only when reached

Used for:

- Callbacks
- Closures
- Async logic

---

## 3. Arrow Functions

- Lexical `this`
- No `arguments`
- Cannot be constructors

Used heavily in:

- React
- Array methods
- Async callbacks

---

## 4. IIFE (Immediately Invoked Function Expression)

- Executes immediately
- Creates private scope
- Avoids global pollution

Used before ES6 modules.

---

## 5. Callback Functions

- Functions passed as arguments
- Enable async behavior

Problem:

- Callback hell

Solution:

- Promises
- async/await

---

## 6. Higher-Order Functions

A function that:

- Accepts a function OR
- Returns a function

Examples:

- map, filter, reduce
- Middleware

---

## 7. Generator Functions

- Pausable execution
- Uses `yield`

Used in:

- Iterators
- Infinite sequences

---

## 8. Async Functions

- Always return a Promise
- Cleaner async syntax

Built on top of Promises.

---

## 9. Recursive Functions

- Call themselves
- Require base case

Risk:

- Stack overflow

---

## 10. Constructor Functions

- Used with `new`
- Create object instances

Modern alternative:

- ES6 Classes

---

## 11. Pure vs Impure Functions

### Pure Function

- Same input → same output
- No side effects

### Impure Function

- Modifies external state

Functional programming prefers pure functions.

---

## 12. Closures

A function remembering its lexical scope.

Used for:

- Data privacy
- Memoization
- Hooks
- Middleware

---

## 13. Currying

Transform function with multiple arguments into sequence of functions.

Used in:

- Functional programming
- Partial application

---

## 14. Execution Model (VERY IMPORTANT)

### Creation Phase

- Memory allocated
- Function declarations hoisted
- Variables initialized as `undefined`

### Execution Phase

- Code runs line by line

---

## 15. Interview Red Flags

- Arrow function misuse in object methods
- Calling function expressions before declaration
- Forgetting base case in recursion

---

## Final Summary

| Concept      | Importance     |
| ------------ | -------------- |
| Declarations | Hoisting       |
| Expressions  | Control        |
| Arrow        | Lexical `this` |
| Closures     | Memory         |
| Async        | Real-world JS  |

---

> If you understand functions, you understand JavaScript.
