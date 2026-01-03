
/**
 * CONDITIONAL EXECUTION
 *
 * Conditionals control program flow.
 * Poor conditional design leads to:
 * - Hard-to-read code
 * - Logical duplication
 * - Bugs in edge cases
 */

const score = 78;

/* -----------------------------------------
   RANGE-BASED CONDITIONS (if-else)
----------------------------------------- */

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

/* -----------------------------------------
   VALUE-BASED CONDITIONS (switch)
----------------------------------------- */

const role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("Edit access");
    break;
  case "viewer":
    console.log("Read-only access");
    break;
  default:
    console.log("No access");
}

/* -----------------------------------------
   CONDITIONAL RETURN (GUARD CLAUSE)
----------------------------------------- */

function withdraw(amount) {
  if (amount <= 0) return "Invalid amount";
  return "Processing withdrawal";
}

console.log(withdraw(100));