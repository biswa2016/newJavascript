// for of

let arr = [
  { name: "tom", age: 28 },
  { name: "sam", age: 30 },
  { name: "joye", age: 29 },
  { name: "sanju", age: 21 },
  { name: "peehbe", age: 29 },
];

for (const obj of arr) {
  //   console.log("user :", obj.name);
}

let str = "Welcome to world";
for (const obj of str) {
  // console.log("char :", obj);
}

//  Maps

const map = new Map();
map.set('IN',"INDIA")
map.set('USA',"UNITED STATE OF AMERICA")
map.set('UK',"UNITED KINGDOM")

// console.log(map);

for (const [key , val] of map){
    // console.log(key,":-", val);
}

let obj = { name: "tom", age: 28, city:"mumbai", occupation:"IT" };

for (const val in obj){
//    console.log('val',val);
//    console.log(obj[val]);  
}

// for(const val in map){
//     console.log(val);
    
// }


arr.forEach((val,ind,arr)=>{
    // console.log(val,ind,arr);  
    console.log("name :-",val.name);
})
