// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.



function areThereDuplicates(...arg) {
    let param = arg;
    let obj = {};
    for (let val of param) {
        obj[val] = (obj[val] || 0) + 1
    }
    console.log(obj);

    for (let val of param) {
        if (obj[val] >= 2) {
            return true
        }
        console.log(obj[val]);
    }
    return false;
}
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
