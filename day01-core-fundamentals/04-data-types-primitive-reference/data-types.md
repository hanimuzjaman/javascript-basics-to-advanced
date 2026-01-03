# Data Types in JavaScript (Intermediate → Advanced)

JavaScript has a **dynamic and weakly typed system**.
Understanding how values are stored and passed is essential.

---

## Primitive Data Types

Primitives are immutable and stored by value.

### Types
- string
- number
- boolean
- undefined
- null
- symbol
- bigint

### Characteristics
- Stored in stack memory
- Copied by value
- Cannot be mutated

---

## Reference Data Types

Reference types store memory addresses pointing to heap-allocated data.

### Examples
- Object
- Array
- Function
- Date
- Map / Set

### Characteristics
- Mutable
- Copied by reference
- Shared state can cause bugs

---

## Memory Model

| Stack | Heap |
|-----|------|
| Fast | Slower |
| Fixed size | Dynamic size |
| Stores primitives | Stores objects |

---

## Shallow vs Deep Copy

- Shallow copy duplicates top-level properties
- Deep copy duplicates entire object graph

Improper copying is a common source of bugs in state management.

---

## typeof Pitfalls

- `typeof null === "object"` (legacy bug)
- Arrays return `"object"`
- Functions return `"function"`

Use proper type guards when necessary.

---

## Real-World Impact
- State mutation bugs
- Unexpected side effects
- Performance issues

Understanding data types is critical for:
- State management
- Debugging
- Performance