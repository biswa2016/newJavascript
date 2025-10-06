const score = 400;

const balance = new Number(100);

console.log(balance);
console.log(score);


console.log(balance.toString().length);

console.log(balance.toFixed(2));


const otherNumber = 23.8966;
const otherNumbers = 123.8966;

console.log(otherNumber.toPrecision(3));
console.log(otherNumbers.toPrecision(3));

const num = 10000000;

console.log(num.toLocaleString('en-IN'));



/**------------MATH--------------------------- */


console.log(Math.PI);

console.log(Math.abs(-4)); // negative to positive

console.log(Math.round(4.4));
console.log(Math.round(4.6));


console.log(Math.ceil(4.3));
console.log(Math.floor(4.6));


console.log(Math.min(4,3,6,8,1));
console.log(Math.max(4,3,6,8,3));



console.log(Math.floor(Math.random()*10)+1);


let min = 1;
let max = 7;

console.log(Math.floor(Math.random()*(max-min+1)));













