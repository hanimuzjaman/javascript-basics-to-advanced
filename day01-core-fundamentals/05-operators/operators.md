# Operators in JavaScript (Basic → Intermediate → Advanced)

Operators are symbols that instruct JavaScript to perform operations
on one or more operands.

A strong understanding of operators is essential for:
- Writing correct business logic
- Avoiding implicit coercion bugs
- Preventing production defects

---

## BASIC — Arithmetic Operators

Arithmetic operators perform mathematical calculations.

| Operator | Description |
|--------|-------------|
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Remainder |
| `**` | Exponentiation |

### Examples
    10 + 3    // 13
    10 - 3    // 7
    10 * 3    // 30
    10 / 3    // 3.333...
    10 % 3    // 1
    2 ** 3    // 8

### Important Notes
- Division by zero results in `Infinity`
- `%` returns the remainder, not a true mathematical modulus
- Floating-point arithmetic is imprecise due to IEEE-754

---

## BASIC — Assignment Operators

Assignment operators assign values to variables.

| Operator | Description |
|--------|-------------|
| `=` | Assignment |
| `+=` | Add and assign |
| `-=` | Subtract and assign |
| `*=` | Multiply and assign |
| `/=` | Divide and assign |
| `%=` | Remainder and assign |

### Example
    let x = 10;
    x += 5; // 15
    x *= 2; // 30

---

## INTERMEDIATE — Comparison Operators

Comparison operators compare values and return boolean results.

| Operator | Description |
|--------|-------------|
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |
| `==` | Loose equality |
| `===` | Strict equality |
| `!=` | Loose inequality |
| `!==` | Strict inequality |

### Loose vs Strict Equality
    5 == "5"   // true (type coercion)
    5 === "5"  // false (no coercion)

### Best Practice
Always use strict equality (`===`, `!==`) in production code.

---

## INTERMEDIATE — Type Coercion

JavaScript automatically converts values during operations.

### Common Coercion Examples
    1 + "2"         // "12"
    "5" - 2         // 3
    true + 1        // 2
    null + 1        // 1
    undefined + 1   // NaN

### Why This Matters
Implicit coercion is a frequent source of:
- Logic bugs
- Validation failures
- Security vulnerabilities

---

## INTERMEDIATE — Logical Operators

Logical operators evaluate expressions and return values (not booleans).

| Operator | Description |
|--------|-------------|
| `&&` | Logical AND |
| `||` | Logical OR |
| `!` | Logical NOT |

### Short-Circuit Evaluation
    false && expensiveFunction(); // not executed
    true || expensiveFunction();  // not executed

### Common Use Cases
- Guard clauses
- Conditional execution
- Default values

---

## ADVANCED — Nullish Coalescing (`??`)

The nullish coalescing operator returns the right operand **only if**
the left operand is `null` or `undefined`.

    0 ?? 100      // 0
    null ?? 100   // 100

### Why It Exists
Fixes incorrect fallbacks when using `||` with valid falsy values
such as `0`, `""`, or `false`.

---

## ADVANCED — Unary Operators

Unary operators operate on a single operand.

| Operator | Description |
|--------|-------------|
| `typeof` | Returns data type |
| `delete` | Removes object property |
| `++` | Increment |
| `--` | Decrement |
| `+` | Converts value to number |

### Example
    let str = "5";
    +str; // 5

---

## ADVANCED — Ternary Operator

A compact conditional expression.

    condition ? valueIfTrue : valueIfFalse

### Usage Guidelines
- Use only for simple conditions
- Avoid nested ternaries for readability

---

## ADVANCED — Bitwise Operators

Bitwise operators work at the binary level.

| Operator | Description |
|--------|-------------|
| `&` | AND |
| `|` | OR |
| `^` | XOR |
| `<<` | Left shift |
| `>>` | Right shift |

Used in:
- Permission flags
- Low-level optimizations
- Masking and encoding

---

## Operator Precedence

JavaScript follows strict precedence rules.

    5 + 3 * 2      // 11
    (5 + 3) * 2    // 16

Use parentheses to avoid ambiguity.

---

## Production-Level Implications

Incorrect operator usage can cause:
- Authentication bugs
- Financial calculation errors
- Data validation issues
- Security vulnerabilities

---

## Summary

Operators define how JavaScript evaluates expressions.
Mastering them is mandatory before advancing to:
- Functions
- Closures
- Asynchronous programming
- Frameworks