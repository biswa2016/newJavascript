function countUniqueValue(arr) {
    var i = 0;
    for (j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}
console.log(countUniqueValue([1, 1, 1, 1, 1, 2]));
//2
console.log(countUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));//7
console.log(countUniqueValue([]));//0
console.log(countUniqueValue([-2, -1, -1, 0, 1])); //4