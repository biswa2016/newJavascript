const name = "Biswa";
const repoCount = 20;

// console.log(name+ repoCount + " value");

console.log(
  `hello my name is ${name.toUpperCase()}, my repo count ${repoCount}`
);

const gameName = new String("biswa-hc");
console.log(gameName);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);

console.log(newString);


const antherString = gameName.slice(-8,4)

console.log(antherString);


const newStringOne ="   Biswa   ";
console.log(newStringOne);
console.log('trim',newStringOne.trim());

const url ="https://biswa.com/biswa%20ranjan";

console.log(url.replace('%20','-'));


console.log(url.includes('sunder'));


console.log(gameName.split('-'));





