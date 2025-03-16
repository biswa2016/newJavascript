// Hoisting in JavaScript


// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope before execution. However, only the declaration is hoisted, not the initialization.


// var declarations are hoisted to the top of their function or global scope, but their initial value remains undefined.

console.log(a); // ✅ Undefined (hoisted but not initialized)
var a = 10;
console.log(a); // 10


// Internally, JavaScript treats it like this:

var a; // Declaration is hoisted
console.log(a); // Undefined
a = 10; // Initialization remains in place


// let and const are hoisted but not initialized. Accessing them before declaration causes a ReferenceError (they are in the "Temporal Dead Zone" until initialized).


console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // ✅ 20

