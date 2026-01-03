# Loops in JavaScript (Intermediate → Advanced)

Loops enable repeated execution of logic and are a core building block
for data processing and control flow.

While powerful, loops are also a common source of:
- Logic errors
- Performance issues
- Infinite execution paths

Well-structured loops prioritize **clarity, safety, and predictability**.

---

## 1. for Loop

The `for` loop is best suited for **deterministic iteration**, where:
- The number of iterations is known in advance
- Index-based traversal is required
- Fine-grained control over iteration is needed

It is commonly used for:
- Array traversal
- Counter-based operations
- Iteration with explicit start, stop, and step logic

---

## 2. while Loop

The `while` loop is designed for **condition-driven iteration**.

Use it when:
- The number of iterations is not known beforehand
- Loop termination depends on dynamic or external state
- Execution should continue until a condition becomes false

Care must be taken to ensure the loop condition eventually changes.

---

## 3. do-while Loop

The `do-while` loop guarantees **at least one execution**,
regardless of the condition.

It is particularly useful for:
- Input validation
- Retry mechanisms
- Menu-driven or prompt-based flows

This construct should be used deliberately, as unconditional first execution
can introduce unintended behavior if misused.

---

## 4. Loop Control Statements

Loop control statements modify normal iteration flow:

- `break`  
  Immediately terminates the loop and exits execution

- `continue`  
  Skips the current iteration and proceeds to the next cycle

Overuse of these statements can reduce readability and should be avoided
when clearer loop conditions are possible.

---

## 5. Performance Considerations

When designing loops:
- Avoid unnecessary nested loops, especially on large datasets
- Be mindful of time complexity (e.g., O(n) vs O(n²))
- Ensure termination conditions are explicit and reachable
- Prefer declarative array methods when they improve clarity

---

## Real-World Usage

Loops are commonly used in:
- Data processing and transformation
- Pagination and batching
- Polling and retry mechanisms
- Iterating over API responses or datasets

Correct loop design directly impacts application performance
and reliability.