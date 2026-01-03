/**
 * ITERATION IN JAVASCRIPT
 *
 * Loops execute code repeatedly.
 * Incorrect loop usage can cause:
 * - Infinite loops
 * - Performance bottlenecks
 * - Memory leaks
 */

/* -----------------------------------------
   FOR LOOP
----------------------------------------- */

for (let i = 0; i < 3; i++) {
  console.log("for:", i);
}

/* -----------------------------------------
   WHILE LOOP
----------------------------------------- */

let count = 0;
while (count < 3) {
  console.log("while:", count);
  count++;
}

/* -----------------------------------------
   DO-WHILE LOOP
----------------------------------------- */

let index = 0;
do {
  console.log("do-while:", index);
  index++;
} while (index < 1);

/* -----------------------------------------
   LOOP CONTROL
----------------------------------------- */

for (let i = 0; i < 5; i++) {
  if (i === 1) continue; // skip iteration
  if (i === 4) break;    // exit loop
  console.log("control:", i);
}

/* -----------------------------------------
   NESTED LOOP (CAUTION)
----------------------------------------- */

for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}