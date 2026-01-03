/**
 * JavaScript Runtime Differences
 *
 * Language is same.
 * Environment APIs differ.
 */

// Browser runtime provides:
// - DOM
// - Web APIs
// - Event handling

// Node.js runtime provides:
// - File system
// - Networking
// - Process control

// Example: Global object difference
console.log("Global object exists");

// Browser: window
// Node.js: global

/**
 * Writing portable JavaScript means:
 * - Avoid relying on environment-specific APIs
 * - Abstract environment-dependent logic
 */