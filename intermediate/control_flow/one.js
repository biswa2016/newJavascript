// if else

const isUserLoggedIn = true

if (isUserLoggedIn) {
    console.log('execute');
}

// <, > <=, >=, == , != , ===

if (3 != 2) {
    console.log('log');
}


if (3 == 2) {
    console.log('log0');
}

if (3 == '3') {
    console.log('log1');
}


if (3 === '3') {
    console.log('log2');
}

const temp = 40;

// if (temp > 20) {
//     const power = 'fly';
//     console.log(power);
// }

// console.log(power); 


if (temp) console.log('test');


if (temp > 50) {
    console.log("yes less 50");
} else if (temp < 45) {
    console.log("yes less then 45");
} else {
    console.log("temp is less than 41");
}


let userLoggedIN = true;
let debitCard = true;

if (userLoggedIN && debitCard && 2 == 3) {
    console.log("allow to room");
}


let loggedInFromFacebook = false;
let loggedInFromGoogle = true;

if (loggedInFromFacebook || loggedInFromGoogle) {
  console.log("logged in ");
  
} 
