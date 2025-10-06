// singleton (constructor)
// Object.create

// object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "kunu",
  "full name": "Biswa Ranjan",
  [mySym]: "myKey1",
  age: 25,
  location: "bbsr",
  email: "biswa@google.com",
  isLoggedIn: false,
  lastLoginDate: ["Monday", "Saturday"],
};
jsUser.email = "biswa.ranjan@google.com"
console.log(jsUser.name);
console.log("II",jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
// Object.freeze(jsUser);
jsUser.email = "biswa@gamil.com"
console.log("i",jsUser["email"]);

jsUser.greeting = function(){
    console.log(`hello js user ${this.name}`);
  return "hello"   
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());


