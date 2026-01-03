/**
 * CONDITIONAL EXECUTION — BASIC → INTERMEDIATE → ADVANCED
 *
 * Conditionals determine how code flows based on data.
 * Poor conditional design leads to:
 * - Deep nesting
 * - Duplicate logic
 * - Hard-to-maintain code
 * - Hidden edge-case bugs
 */

/* =====================================================
   BASIC — Simple Conditions
===================================================== */

// Basic if statement
const age = 20;

if (age >= 18) {
  console.log("User is an adult");
}

// if–else
const isLoggedIn = false;

if (isLoggedIn) {
  console.log("Show dashboard");
} else {
  console.log("Redirect to login");
}

/* =====================================================
   INTERMEDIATE — Range-Based Conditions
===================================================== */

// Realistic grading system
const score = 78;

let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 75 && score < 90) {
  grade = "B";
} else if (score >= 60 && score < 75) {
  grade = "C";
} else if (score >= 0 && score < 60) {
  grade = "Fail";
} else {
  grade = "Invalid score"; // defensive programming
}

console.log("Grade:", grade);

/* =====================================================
   INTERMEDIATE — Value-Based Conditions (switch)
===================================================== */

// Role-based access control (RBAC)
const role = "admin";

let permissions;

switch (role) {
  case "admin":
    permissions = ["read", "write", "delete"];
    break;
  case "editor":
    permissions = ["read", "write"];
    break;
  case "viewer":
    permissions = ["read"];
    break;
  default:
    permissions = [];
}

console.log("Permissions:", permissions);

/* =====================================================
   INTERMEDIATE — Conditional Expressions
===================================================== */

// Ternary for simple decisions
const isVerified = true;
const badge = isVerified ? "Verified User" : "Unverified User";
console.log(badge);

/* =====================================================
   ADVANCED — Guard Clauses (Best Practice)
===================================================== */

/**
 * Processes a withdrawal request
 * Demonstrates early exits instead of nested conditions
 */
function withdraw(amount, balance) {
  if (typeof amount !== "number") return "Invalid amount type";
  if (amount <= 0) return "Amount must be greater than zero";
  if (amount > balance) return "Insufficient balance";

  return "Withdrawal successful";
}

console.log(withdraw(500, 1000));
console.log(withdraw(1500, 1000));

/* =====================================================
   ADVANCED — Avoiding Deep Nesting (Anti-Pattern vs Fix)
===================================================== */

// ❌ Anti-pattern: deeply nested conditions
function loginUserBad(user) {
  if (user) {
    if (user.isActive) {
      if (user.isVerified) {
        return "Login successful";
      }
    }
  }
  return "Login failed";
}

// ✅ Improved version using guard clauses
function loginUserGood(user) {
  if (!user) return "User not found";
  if (!user.isActive) return "User inactive";
  if (!user.isVerified) return "User not verified";

  return "Login successful";
}

const user = { isActive: true, isVerified: true };
console.log(loginUserGood(user));

/* =====================================================
   ADVANCED — Conditional Logic as Data (Scalable Pattern)
===================================================== */

// Replacing large switch/if-else chains
const roleAccessMap = {
  admin: "Full access",
  editor: "Edit access",
  viewer: "Read-only access",
};

function getAccessLevel(role) {
  return roleAccessMap[role] ?? "No access";
}

console.log(getAccessLevel("admin"));
console.log(getAccessLevel("guest"));