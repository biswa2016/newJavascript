let hero = ["thor","iron man", "spider man"]
const dc = ["superman", "flash", "batman"]


// hero.push(dc); //[ 'thor', 'iron man', 'spider man', [ 'superman', 'flash', 'batman' ] ]
let allHero = hero.concat(dc)
// console.log(hero);  // [ 'thor', 'iron man', 'spider man', 'superman', 'flash', 'batman' ]
// console.log(allHero);  // [ 'thor', 'iron man', 'spider man', 'superman', 'flash', 'batman' ]

// console.log([...hero,...dc]); //[ 'thor', 'iron man', 'spider man', 'superman', 'flash', 'batman' ]

const arr = [1,2,3,4,5,9,6,7,[2,5,8],45, [7,2,6]]
// const newArr = arr.flat(Infinity)

// console.log(arr.flat(Infinity)); //   [1, 2, 3, 4, 5, 9, 6, 7, 2, 5, 8, 45, 7, 2, 6]



console.log(Array.isArray("biswa"));  // false
console.log(Array.from("biswa"));  // [ 'b', 'i', 's', 'w', 'a' ]
console.log(Array.from({name:"kunu"})); // []


let score = 100;
let score2 = 200;
let score3 = 300;


console.log(Array.of(score,score2,score3)); //[ 100, 200, 300 ]


