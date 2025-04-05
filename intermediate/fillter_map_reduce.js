let lang = ["js", "ruby", "java", "python", "cpp", "pc"];

// forEach not return undefined

let val = lang.forEach((item) => {
    // console.log(item);
    return item
});

// console.log(val); //undefined


// filter

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let fil = arr.filter((item) => item > 50);
// let fil = arr.filter((item) => {
//    return item > 50;
// });

let newNum = [];
arr.forEach((item) => {
    if (item > 50) {
        newNum.push(item)
    }
});
console.log(newNum);


const array = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]


// map

let add = arr.map((num) => {
    return num + 10
})

console.log("add", add);


// chining


const addNum = arr.map((num) => num + 10).map((num) => num + 1).filter((num) => num > 50)

console.log('addNum', addNum);

// reduce

let arr1 = [1, 2, 3, 4]


const red = arr1.reduce((pre, cur, arr) => {
    console.log(pre, cur);

    return pre + cur
}, 0)

console.log(red);


const shoping = [
    {
        item: "js",
        price: 2999
    },
    {
        item: "java",
        price: 999
    },
    {
        item: "mobile dev",
        price: 5999
    },
    {
        item: "data science",
        price: 12999
    },
]

let totalShoping = shoping.reduce((pre,cur)=>{
     return pre + cur.price
},0)

console.log('total', totalShoping);






