/* =====================================================
   BASIC — Variable Declaration
===================================================== */

var a = 10;
let b = 20;
const c = 30;

console.log(a, b, c);

/* =====================================================
   INTERMEDIATE — Scope Behavior
===================================================== */

function varScope() {
  if (true) {
    var x = 100;
  }
  console.log(x); // accessible
}
varScope();

function blockScope() {
  if (true) {
    let y = 200;
    const z = 300;
    console.log(y, z);
  }
}
blockScope();

/* =====================================================
   ADVANCED — Hoisting & TDZ
===================================================== */

console.log(hoisted); // undefined
var hoisted = 50;

{
  // console.log(tdz); // ReferenceError
  let tdz = "safe";
  console.log(tdz);
}