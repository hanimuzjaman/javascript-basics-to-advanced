# Data Types in JavaScript (Intermediate → Advanced)

JavaScript’s type system is **dynamic**, **weakly typed**, and **runtime-evaluated**.
Understanding how values are stored and passed is essential for writing correct,
efficient, and predictable programs.

---

## 1. Primitive Data Types

Primitive values are **immutable** and **stored by value**.

### List of Primitive Types
- string
- number
- boolean
- undefined
- null
- symbol
- bigint

### Characteristics
- Stored directly in stack memory
- Cannot be modified (new value is created)
- Copying creates independent values

### Example
```js
let a = 10;
let b = a;
b = 20;