/**
 * JavaScript Introduction – Runtime & Language Characteristics
 *
 * JavaScript is a high-level, interpreted language executed by a JavaScript engine
 * (V8, SpiderMonkey, JavaScriptCore).
 *
 * It follows:
 * - Single-threaded execution model
 * - Event-driven architecture
 * - Prototype-based object system
 */

// JavaScript execution is synchronous by default
console.log("Start execution");

// Function execution is pushed to the call stack
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("JavaScript"));

console.log("End execution");

/**
 * JavaScript is:
 * - Dynamically typed (types resolved at runtime)
 * - Weakly typed (implicit coercion allowed)
 */

// Dynamic typing example
let value = 10;
value = "ten";
value = true;

console.log("Dynamic value:", value);