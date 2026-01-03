# Variables & Scope (Intermediate)

JavaScript variables determine **where data lives** and **how long it exists**.

---

## var

- Function scoped
- Hoisted with `undefined`
- Can be redeclared
- Prone to bugs in large codebases

Avoid using `var` in modern JavaScript.

---

## let

- Block scoped
- Exists in Temporal Dead Zone (TDZ)
- Allows reassignment
- Preferred for mutable variables

---

## const

- Block scoped
- Binding is immutable
- Value itself may be mutable (objects)

Use `const` by default.

---

## Temporal Dead Zone (TDZ)

Variables declared with `let` and `const` cannot be accessed
before their declaration is evaluated.

This prevents accidental usage of uninitialized variables.

---

## Best Practices
- Use `const` by default
- Use `let` only when reassignment is required
- Avoid `var`