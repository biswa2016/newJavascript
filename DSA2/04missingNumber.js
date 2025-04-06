let missingNumber = function (arr) {
    if (arr.length === 0) {
        return arr.length;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return arr.length * (arr.length + 1) / 2 - sum
}


let missingNumber1 = function (arr) {
    if (arr.length === 0) {
        return arr.length;
    }
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }
    return arr.length * (arr.length + 1) / 2 - arr.reduce((acc, num) => num + acc);
}

console.log(missingNumber1([3, 0, 1]));
console.log(missingNumber1([3, 0, 1, 2, 6, 5, 4, 9, 7]));
