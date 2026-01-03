/**
 * Variable Declaration & Scope
 */

// var is function-scoped
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Accessible
}

// let & const are block-scoped
function testLetConst() {
  if (true) {
    let y = 20;
    const z = 30;
    console.log(y, z);
  }
  // console.log(y, z); // ❌ ReferenceError
}

testVar();
testLetConst();

/**
 * Temporal Dead Zone (TDZ)
 */
{
  // console.log(a); // ❌ TDZ
  let a = 100;
  console.log(a);
}