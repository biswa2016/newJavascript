// for of

let arr = [1, 2, 3, 4, 5, 6, 7];
let str = "greeting";

for (let num of arr) {
    console.log(num);
}
for (let s of str) {
    console.log(s);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("JP", "Japan");
map.set("FR", "France");
map.set("IN", "India");

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);

}


let obj = {
    userName: "biswa",
    lastName: "Ranjan",
    age: 27
}

for (const key in obj) {
    console.log(key,":-", obj[key]);

}

for (const key in arr) {
    console.log(key,":-",arr[key]);

}

for (const key in map) {
    console.log(key);

}