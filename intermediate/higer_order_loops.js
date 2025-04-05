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
    console.log(key, ":-", obj[key]);

}

for (const key in arr) {
    console.log(key, ":-", arr[key]);

}

for (const key in map) {
    console.log(key);

}


let lang = ["js", "ruby", "java", "python", "cpp", "pc"];

// 1st way

// lang.forEach((ele) => {
//     console.log(ele);
// })

// 2nd way

// lang.forEach(function (ele) {
//     console.log(ele);
// })

// 3rd way

// function language(lan){
//     console.log(lan);
    
// }
// lang.forEach(language)


// lang.forEach((iteam,ind,array)=>{
//     console.log(iteam,ind,array);
// })

const myCoding = [
    {
        lanName:"JavaScript",
        lanFileName:"JavaScript"
    },
    {
        lanName:"Java",
        lanFileName:"Java"
    },
    {
        lanName:"Python",
        lanFileName:"Python"
    }
]

myCoding.forEach((iteam)=>{
    console.log(iteam.lanName);
    
})

