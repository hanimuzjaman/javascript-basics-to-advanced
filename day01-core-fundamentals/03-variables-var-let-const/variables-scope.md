# Variables & Scope (Intermediate)

## var
- Function scoped
- Hoisted with undefined
- Error-prone in large codebases

## let
- Block scoped
- Exists in Temporal Dead Zone
- Preferred for mutable bindings

## const
- Block scoped
- Binding is immutable
- Object mutation allowed

---

## Best Practice
- Use `const` by default
- Use `let` when reassignment is required
- Avoid `var`