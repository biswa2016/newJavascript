const name = "biswa";
const repoCount = 50


// console.log(name +repoCount +" Value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("biswa");

console.log(gameName);


// console.log(gameName[0]);
// console.log(gameName.__proto_);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); // s
// console.log(gameName.indexOf('i')); //1


const newString = gameName.substring(0,4);
// console.log(newString); // bisw
// const newString2 = gameName.slice(0,4);
const newString2 = gameName.slice(-8,4);
// console.log(newString2); // biswa


let newString3 = "  biswa  ";
// console.log(newString3); //   biswa  
// console.log(newString3.trim()); //biswa



const url = "https://googole.com/biswa%20nayak";

// console.log(url.replace('%20','-')); //https://googole.com/biswa-nayak

// console.log(url.includes('biswa'));  // true


console.log(gameName.split('')); //[ 'biswa' ]
console.log(gameName.split('')); //[ 'b', 'i', 's', 'w', 'a' ]



