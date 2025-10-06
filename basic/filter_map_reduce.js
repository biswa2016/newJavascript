// map

let arr = [1,2,3,4,5,6,7,8,9];

let mapNum = arr.map((num => num*10));
console.log(mapNum);


// filter

let filterNum = arr.filter((num) => num >5);
console.log(filterNum);


// reduce

let reduceValue = arr.reduce((acc,cur)=>{
    console.log(`acc :${acc}, curent value ${cur}`);
    return acc+cur;
},1)

console.log(reduceValue);

