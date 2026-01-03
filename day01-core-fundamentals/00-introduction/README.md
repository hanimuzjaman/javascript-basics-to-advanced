# JavaScript — Introduction (Intermediate)

## What JavaScript Actually Is
JavaScript is a **high-level, dynamically typed, interpreted programming language**
designed to execute inside **runtime environments** such as browsers and Node.js.

The language itself is **runtime-agnostic**.  
Capabilities come from the **environment**, not the language.

---

## Key Architectural Properties

### 1. Single-Threaded
JavaScript executes one call stack at a time.
Concurrency is achieved via the **event loop**, not multithreading.

### 2. Event-Driven
Execution reacts to:
- User events
- Network responses
- Timers
- Promises

### 3. Non-Blocking
I/O operations are delegated to environment APIs and executed asynchronously.

---

## JavaScript vs ECMAScript
- **ECMAScript** → language specification
- **JavaScript** → ECMAScript + runtime APIs

---

## Typical Use Cases
- Web applications
- Backend services
- CLI tools
- Mobile & desktop applications