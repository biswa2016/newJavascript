function constructNote(str1, str2) {
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    let obj = {}
    for (let val of arr2) {
        obj[val] = (obj[val] || 0) + 1;
    }
    for (let val of arr1) {
        if (!obj[val]) return false;
        obj[val]--;
    }
    return true

}

console.log(constructNote('abc', 'dcba'));
console.log(constructNote('aa', 'abc'));
console.log(constructNote('aabbcc', 'bcabcaddff'));

