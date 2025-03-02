// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); true
// console.log("02" > 1); true


// console.log(null > 0); //false
// console.log(null == 0); // false
// console.log(null >= 0); //true


// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false



///////// memory///////////////

// stack memory (primitive) heap memory (non-primitive)

let uName = "biswa ranjan nayak"
let anotherName = uName;
anotherName = "kunu";

console.log(uName);
console.log(anotherName);


let userOne = {
    email:"user@gmail.com",
    upiId:"user@ybl"
}


let userTwo = userOne;

userTwo.email = "biswa@gmail.com";


console.log(userOne);
console.log(userTwo);








