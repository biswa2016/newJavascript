// singleton

// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    uName: "biswa",
    age:22,
    email:"biswa@gmail.com",
    location:"Odisha",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    "full name": "Biswa Ranjan",
    [mySym]: "myKey1"
}


// console.log(jsUser.uName);
// console.log(jsUser["uName"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// Object.freeze(jsUser)
jsUser.age = 20

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Google user");
}


jsUser.greetingTwo = function(){
    console.log(`Hello Google user ${this["full name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());








