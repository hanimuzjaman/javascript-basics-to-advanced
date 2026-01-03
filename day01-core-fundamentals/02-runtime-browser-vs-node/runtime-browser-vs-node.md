# JavaScript Runtime Environments (Intermediate)

JavaScript alone cannot:
- Access files
- Manipulate the DOM
- Perform network operations

These capabilities are provided by the **runtime environment**.

---

## Browser Runtime

Provides:
- DOM (Document Object Model)
- BOM (Browser Object Model)
- Web APIs (fetch, timers, storage)

Used primarily for client-side applications.

---

## Node.js Runtime

Provides:
- File system access
- Process control
- Networking
- OS-level APIs

Used for server-side and tooling applications.

---

## Key Insight
JavaScript behavior is the result of:

**Language specification + Runtime APIs**

---

## Design Principle
Write environment-agnostic JavaScript where possible.
Abstract environment-specific logic to improve portability.