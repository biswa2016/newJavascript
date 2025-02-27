/**
 * JavaScript has eight data types, which are categorized into primitive and non-primitive (reference) types
 */

// Primitive Data Types
// These types are immutable (cannot be changed) and are stored by value.

// Number

let num1 = 10;
let num2 = 10.5;
let num3 = Infinity;
let num4 = -Infinity;
let nun5 = NaN

console.table([typeof num1, num2, num3, typeof num4, nun5]);


// BigInt

let bigNum = 123456789012345678901234567890n;
console.table([bigNum, typeof bigNum]);

//  String

/**
 * Represents textual data.
 *  Can be declared using single ('), double (") or 
 *  template literals (` `).
 */

let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello, ${str2}`;

console.table([str1, str2, str3]);


//  Boolean

let isLoggedIn = true;
let hasPermission = false;

console.table([isLoggedIn, hasPermission]);

// Undefined

/**
 * A variable that has been declared but not assigned a value.
 */

let x;
console.log(x); // undefined

// Null

/**
 * Represents an intentional absence of any value.
 */

let y = null;

console.log("n", y);


// Symbol (ES6)

/**
 * Used for unique values (mainly for object properties).
 */

let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // false


/**
 * Non-Primitive (Reference) Data Types
 *  These are mutable and stored by reference.
 */

// Object

/**
 * Collection of key-value pairs.
 */

let person = {
    name: "John",
    age: 30,
    isAdmin: true
};

console.log(person);


//   Array
/**
 * Ordered collection of elements.
 */

let fruits = ["apple", "banana", "cherry"];


// Function

/**
 * A special type of object that can be called.
 */

function greet() {
    return "Hello!";
}


// Date

/**
 * Used to work with dates and times.
 */

let now = new Date();

//RegExp

/**
 * Used for pattern matching.
 */

let pattern = /hello/i;


//  Type Conversion

/**
 * Implicit
 * Explicit
 */

console.log("5" + 2); // "52" (number converted to string)
console.log("5" - 2); // 3 (string converted to number)



console.log(Number("42"));  // 42
console.log(String(42));    // "42"
console.log(Boolean(1));    // true

