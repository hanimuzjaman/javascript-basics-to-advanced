# JavaScript Introduction (Basic → Advanced)

---

## BASIC — What is JavaScript?

JavaScript is a programming language used to make applications interactive.
It is widely used in:
- Web browsers
- Servers (Node.js)
- Desktop & mobile applications

JavaScript code is executed **line by line**.

---

## INTERMEDIATE — Language vs Runtime

JavaScript is a **high-level, dynamically typed, interpreted language**.

Important distinction:
- JavaScript (language) → syntax & rules
- Runtime (Browser / Node.js) → APIs & execution environment

JavaScript alone cannot:
- Access files
- Manipulate HTML
- Make network requests

These capabilities come from the **runtime**, not the language.

---

## ADVANCED — Execution Model

JavaScript follows a **single-threaded execution model**.

Core components:
- Call Stack
- Execution Context
- Event Loop (managed by runtime)

Concurrency is achieved **without multithreading**.
Understanding this is critical for:
- Async programming
- Debugging
- Performance optimization