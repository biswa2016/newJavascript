let score = "33abc";
let score1 = null;
let score2 = undefined;
let score3 = true;
console.log(typeof score);
console.log(typeof score);


let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

console.table([Number(score1),Number(score2),Number(score3)])


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0


let isLoggedIn=1;
console.log("isLoggedIn",Boolean(isLoggedIn));

let emptyString ="";
let filedString ="biswa";
console.log("emptyString",Boolean(emptyString));
console.log("filedString",Boolean(filedString));



// 1 => true; 0 => false
// "" => true; "biswa" => true