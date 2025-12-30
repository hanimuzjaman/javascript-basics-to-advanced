# 10 Days of JavaScript: Fundamentals to Architecture

A rigorous, 10-day intensive curriculum designed to take developers from core syntax to advanced architectural patterns. This repository contains structured modules, technical deep-dives, and industry-standard practice exercises.

---

## 📑 Curriculum Roadmap

| Phase | Day | Focus Area | Key Learning Objective |
| :--- | :--- | :--- | :--- |
| **Foundations** | 01-03 | Core & Data | Mastering execution context, closures, and data structures. |
| **Interaction** | 04-05 | DOM & Engines | Understanding browser runtimes and the prototype chain. |
| **Advanced** | 06-08 | Async & Meta | Orchestrating non-blocking code and design patterns. |
| **Production** | 09-10 | Engineering | Tooling, TypeScript, and Full-stack architecture. |

---

## 🗓️ Daily Modules

### Day 1: Core Fundamentals
**Concepts:**
* **Runtime Environments:** Browser (V8) vs. Node.js (libuv).
* **Memory Management:** Scope, Shadowing, and Temporal Dead Zones (TDZ).
* **Type System:** Primitives vs. Reference types; coercion logic.
* **Control Flow:** Declarative vs. Imperative logic.

**Practice:**
* Implement a robust Prime Number algorithm.
* Solve mathematical series (Fibonacci, Factorial) using iterative logic.

### Day 2: Functions & Functional Logic
**Concepts:**
* **First-Class Citizens:** Function expressions vs. declarations.
* **Scope & Closures:** Practical application of lexical environments.
* **Modern Syntax:** Arrow functions, rest/spread parameters, and default values.
* **Higher-Order Functions:** Introduction to callbacks and abstraction.

**Practice:**
* Polyfill for standard library methods (e.g., custom `.map()` and `.filter()`).
* Build a lexical-scope based counter factory.

### Day 3: Data Structures & Manipulation
**Concepts:**
* **Functional Methods:** Deep dive into `.reduce()`, `.find()`, and `.sort()`.
* **Object Composition:** Destructuring, property shorthand, and computed keys.
* **Data Integrity:** Shallow vs. Deep cloning; Immutability patterns.

**Practice:**
* Build a data-processing engine to normalize and filter nested JSON API responses.
* Implement a multi-level array flattener without using `.flat()`.

### Day 4: Browser Orchestration & DOM
**Concepts:**
* **DOM API:** Efficient selection, fragment rendering, and style manipulation.
* **Event Architecture:** The propagation model (Bubbling vs. Capturing) and Delegation.
* **Web Storage:** Managing state via `localStorage` and `sessionStorage`.

**Practice:**
* Develop a state-persistent Task Manager.
* Build a performant "Live Search" component with dynamic DOM updates.

### Day 5: Deep JavaScript & OOP
**Concepts:**
* **The Engine:** Execution Context, Call Stack, and Hoisting mechanics.
* **Binding Context:** Mastering `this` via `.call()`, `.apply()`, and `.bind()`.
* **Prototypal Inheritance:** The `__proto__` chain vs. the `prototype` property.
* **Class Syntax:** Private fields (`#`), static methods, and inheritance.



**Practice:**
* Refactor procedural code into a Class-based UI framework.
* Create a custom Event Emitter using prototypes.

### Day 6: Asynchronous JavaScript
**Concepts:**
* **Event Loop:** Understanding the Macro-task and Micro-task queues.
* **Promises:** States, chaining, and concurrency with `Promise.allSettled`.
* **Async/Await:** Syntactic sugar and robust `try/catch/finally` error handling.
* **Streams:** Introduction to fetch AbortController and WebSockets.



**Practice:**
* Build an API client with auto-retry logic and timeout handling.
* Create a real-time notification system using the Observer pattern.

### Day 7: Meta Programming & Design Patterns
**Concepts:**
* **Reactive JS:** Using the `Proxy` and `Reflect` APIs for data binding.
* **Optimization:** Memoization, Currying, and Partial Application.
* **Design Patterns:** Singleton, Factory, and Strategy patterns.

**Practice:**
* Build a mini-state management library (Redux-lite) using Proxies.
* Implement a memoization decorator for expensive calculations.

### Day 8: Performance & Security
**Concepts:**
* **Optimization:** Debouncing vs. Throttling; Layout thrashing prevention.
* **Security:** Defending against XSS, CSRF, and Prototype Pollution.
* **Complexity:** Big-O analysis for common JS operations.

**Practice:**
* Optimize a "virtual scroll" or large-list filter for 10,000+ items.
* Implement a secure input sanitizer for user-generated content.

### Day 9: Production Engineering
**Concepts:**
* **Type Safety:** Introduction to TypeScript (Interfaces, Generics, Unions).
* **Quality Assurance:** Unit testing with Jest; TDD methodologies.
* **DevOps:** Module bundling (Vite), Linting (ESLint), and Formatting (Prettier).

**Practice:**
* Convert a core utility library to TypeScript.
* Write a test suite for an existing business logic module.

### Day 10: Capstone Project
**Objective:** Architect and deploy a modular, tested, and documented application.

**Project Options:**
1.  **Real-time Collaboration Dashboard:** (WebSockets, Proxies, and Vite).
2.  **Financial Portfolio Tracker:** (Complex Math, API Integration, and TypeScript).
3.  **Headless CMS Client:** (Advanced Async, Caching, and Error Boundaries).

---

## 🚀 Usage Instructions
1. **Clone & Install:** `git clone <repo-url>`
2. **Daily Routine:** Review the `/notes` for the day, then complete the exercises in `/practice`.
3. **Validate:** Run `npm test` to verify your implementations against the provided test cases.

## 🎓 Learning Outcomes
By Day 10, you will be capable of:
* Architecting scalable front-end logic independent of frameworks.
* Debugging low-level memory leaks and asynchronous race conditions.
* Writing enterprise-grade TypeScript code.
* Implementing security-first development practices.

---
**License:** MIT | **Maintainer:** HANIMUZ JAMAN