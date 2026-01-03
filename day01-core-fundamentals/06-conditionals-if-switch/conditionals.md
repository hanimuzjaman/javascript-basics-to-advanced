# Conditional Statements (Intermediate → Advanced)

Conditionals determine **control flow**.
Choosing the wrong structure reduces readability and maintainability.

---

## 1. if / else

Best used when:
- Conditions involve ranges
- Conditions depend on multiple variables
- Logic is non-discrete

---

## 2. switch

Best used when:
- Comparing one variable against fixed values
- Values are known at design time

---

## 3. Guard Clauses

Instead of deeply nested conditionals:

```js
if (!valid) return;