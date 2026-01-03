# Conditional Statements in JavaScript (Basic → Intermediate → Advanced)

Conditional statements control the **flow of execution** in a program.
They determine **which code runs, when, and under what conditions**.

Poorly designed conditionals lead to:
- Deep nesting
- Duplicate logic
- Hidden edge-case bugs
- Difficult maintenance

Well-designed conditionals improve:
- Readability
- Testability
- Scalability

---

## BASIC — if Statement

The `if` statement executes code when a condition evaluates to `true`.

Used for:
- Simple decision making
- Binary conditions (true / false)

Example:
    if (isLoggedIn) {
      showDashboard();
    }

Key points:
- Condition is coerced to boolean
- Truthy / falsy values matter

---

## BASIC — if / else

Adds an alternative execution path when the condition is false.

Example:
    if (age >= 18) {
      allowAccess();
    } else {
      denyAccess();
    }

Use when:
- Exactly one of two paths should execute

---

## INTERMEDIATE — if / else if / else (Range-Based Logic)

Used when decisions depend on **ranges or ordered conditions**.

Example:
    if (score >= 90) grade = "A";
    else if (score >= 75) grade = "B";
    else if (score >= 60) grade = "C";
    else grade = "Fail";

Best suited for:
- Numerical ranges
- Priority-based rules
- Conditions that must be checked in sequence

Important:
- Order matters
- First matching condition exits the chain

---

## INTERMEDIATE — switch Statement (Value-Based Logic)

The `switch` statement compares a single value against known cases.

Example:
    switch (role) {
      case "admin":
        grantFullAccess();
        break;
      case "editor":
        grantEditAccess();
        break;
      default:
        denyAccess();
    }

Best used when:
- Comparing one variable
- Values are discrete and known
- Readability matters more than flexibility

Avoid switch when:
- Conditions involve ranges
- Conditions require complex expressions

---

## INTERMEDIATE — Ternary Operator (Conditional Expression)

A compact form of conditional logic.

Syntax:
    condition ? valueIfTrue : valueIfFalse

Example:
    const status = isActive ? "Active" : "Inactive";

Use only when:
- Logic is simple
- Expression is readable in one line

Avoid:
- Nested ternaries
- Business logic in ternaries

---

## ADVANCED — Guard Clauses (Best Practice)

Guard clauses exit early when conditions are not met.

Instead of:
    if (valid) {
      if (authorized) {
        if (balance > 0) {
          process();
        }
      }
    }

Prefer:
    if (!valid) return;
    if (!authorized) return;
    if (balance <= 0) return;
    process();

Benefits:
- Reduces nesting
- Improves readability
- Makes failure paths explicit

---

## ADVANCED — Avoiding Conditional Anti-Patterns

### ❌ Deep Nesting
- Hard to read
- Hard to debug
- Error-prone

### ❌ Duplicate Conditions
- Multiple checks for same condition
- Increases maintenance cost

### ❌ Large if-else or switch blocks
- Indicates logic should be refactored
- Often replaced by:
  - Lookup objects
  - Strategy pattern
  - Polymorphism

---

## ADVANCED — Conditionals as Data (Scalable Design)

Instead of large condition chains:

    const accessMap = {
      admin: "Full access",
      editor: "Edit access",
      viewer: "Read only"
    };

    function getAccess(role) {
      return accessMap[role] ?? "No access";
    }

Benefits:
- Easy to extend
- Less error-prone
- Cleaner logic

---

## Design Guidelines (Summary)

Use:
- `if / else` → ranges and complex conditions
- `switch` → fixed known values
- Guard clauses → early exits and validation
- Lookup objects → scalable decision logic

Rule of thumb:
> If your conditional logic is hard to read, it is already wrong.

---

## Why This Matters in Real Projects

Conditional logic directly affects:
- Authentication & authorization
- Payments & validation
- Feature toggles
- Business rules

Most production bugs are **logic bugs**, not syntax bugs.