// const userEmail = "ab@gamil.com"; //Got user email
const userEmail = ""; //Don't have a user email


if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have a user email");
}


// Falsy value

/* false, 0 , -0, BigInt 0n, "" , null, undefined, NaN */

// truthy 

/* "0", 'false', " ", [], {}, function(){}, */

let arr = [];
let obj = {};

if (arr.length === 0) {
    console.log("array is empty");
}

if (Object.keys(obj).length === 0) {
    console.log("object is empty");
};

console.log( false == 0);


// Nullish coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15

console.log(val1);


// Ternary Operator

// condition ? true : false
let teaPrice = 5
teaPrice >= 10 ? console.log("less than 5") : console.log("grater than 5 ");





