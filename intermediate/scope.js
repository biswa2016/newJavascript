// Global Scope

// Variables declared outside any function or block are globally scoped. They can be accessed anywhere in the script.


let globalVar = "I'm global!";

function test() {
    console.log(globalVar); // Accessible
}

test();
console.log(globalVar); // Accessible


// Function Scope

//  Variables declared inside a function are scoped to that function. They cannot be accessed outside the function.


function test() {
    let functionVar = "I'm inside a function!";
    console.log(functionVar); // Accessible inside
}

test();
console.log(functionVar); // ❌ Error: functionVar is not defined


//   Block Scope (ES6 - let and const)

// Variables declared with let or const inside {} are only accessible within that block. var does not have block scope. var ignores block scope


{
    let blockVar = "I'm inside a block!";
    console.log(blockVar); // Accessible here
}

console.log(blockVar); // ❌ Error: blockVar is not defined


{
    var notBlockScoped = "I'm not block scoped!";
}

console.log(notBlockScoped); // ✅ Accessible (var is function-scoped)


//   Lexical Scope (Closures)

// Inner functions can access variables of their parent functions.

function outer() {
    let outerVar = "I'm from outer function";
  
    function inner() {
      console.log(outerVar); // ✅ Accessible
    }
  
    inner();
  }
  
  outer();


  
//   Dynamic Scope (this)

//  this refers to different things depending on how a function is called.


const obj = {
  name: "Alice",
  sayName: function () {
    console.log(this.name);
  },
};

obj.sayName(); // ✅ "Alice" (this refers to obj)

const sayNameFn = obj.sayName;
sayNameFn(); // ❌ Undefined (this refers to global object or undefined in strict mode)

