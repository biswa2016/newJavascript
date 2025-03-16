function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) return false;
        arr2.splice(correctIndex, 1);
    }
    return true
}
console.log(same([1, 2, 3, 2], [9, 4, 1, 4])); // O^n

// O(n)

/* Good Approach */

function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let counterOne = {};
    let counterTwo = {};
    for (const val of arr1) {
        counterOne[val] = (counterOne[val] || 0) + 1;
    }
    for (const val of arr2) {
        counterTwo[val] = (counterTwo[val] || 0) + 1;
    }
    console.log(counterOne, counterTwo);
    for (const key in counterOne) {
        if (!(key ** 2 in counterTwo)) return false;
        if (counterTwo[key ** 2] !== counterOne[key]) return false;
    }
    return true;

}

console.log("one", same2([1, 2, 3, 2, 5], [9, 4, 1, 4, 11]));
console.log("two", same2([1, 2, 3, 2], [9, 4, 1, 4]));


