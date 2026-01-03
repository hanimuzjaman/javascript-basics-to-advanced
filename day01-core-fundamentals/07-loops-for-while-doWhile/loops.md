# Loops in JavaScript (Intermediate → Advanced)

Loops are fundamental for iteration but are also a common source of bugs.

---

## 1. for Loop
Use when:
- Iteration count is deterministic
- Index-based traversal is required

---

## 2. while Loop
Use when:
- Termination condition is dynamic
- Loop depends on external state

---

## 3. do-while Loop
Guarantees **at least one execution**.
Useful for input validation loops.

---

## 4. Loop Control Statements

- `break` → exits loop immediately
- `continue` → skips current iteration

---

## 5. Performance Considerations
- Avoid unnecessary nested loops
- Prefer array methods when clarity improves
- Watch for infinite loops

---

## Real-World Usage
- Data processing
- Pagination
- Polling mechanisms
- Retry logic