/**
 * DATA TYPES IN JAVASCRIPT
 *
 * JavaScript has two broad categories of data types:
 * 1. Primitive Types   → Immutable, stored by value
 * 2. Reference Types   → Mutable, stored by reference
 *
 * Understanding this distinction is critical for:
 * - Memory management
 * - Bug prevention
 * - Performance optimization
 * - Interview problem solving
 */

/* ---------------------------------------------------
   PRIMITIVE DATA TYPES
--------------------------------------------------- */

// string
let str1 = "JavaScript";
let str2 = str1;
str2 = "ECMAScript";

console.log(str1); // JavaScript (unchanged)
console.log(str2); // ECMAScript

// number (IEEE 754 double precision)
let num1 = 0.1 + 0.2;
console.log(num1); // 0.30000000000000004 (floating point precision issue)

// boolean
let isLoggedIn = false;

// undefined (declared but not initialized)
let notAssigned;
console.log(notAssigned);

// null (intentional absence of value)
let emptyValue = null;

// symbol (unique and immutable)
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false

// bigint (for numbers beyond safe integer range)
const bigNumber = 9007199254740991n + 10n;
console.log(bigNumber);

/* ---------------------------------------------------
   REFERENCE DATA TYPES
--------------------------------------------------- */

// Object (stored in heap, referenced via pointer)
let user1 = { name: "Alice" };
let user2 = user1;

user2.name = "Bob";

console.log(user1.name); // Bob
console.log(user2.name); // Bob

// Array (also an object)
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);
console.log(arr1); // [1,2,3,4]

// Function (callable object)
function greet() {
  return "Hello";
}
console.log(typeof greet); // function

/* ---------------------------------------------------
   COPY TECHNIQUES
--------------------------------------------------- */

// Shallow copy
let shallowCopy = { ...user1 };
shallowCopy.name = "Charlie";
console.log(user1.name); // Bob

// Deep copy (structuredClone – modern)
let deepCopy = structuredClone(user1);
deepCopy.name = "David";
console.log(user1.name); // Bob

/* ---------------------------------------------------
   TYPE CHECKING & QUIRKS
--------------------------------------------------- */

console.log(typeof null);       // "object" (legacy bug)
console.log(Array.isArray(arr1)); // true
console.log(Object.prototype.toString.call(arr1)); // [object Array]