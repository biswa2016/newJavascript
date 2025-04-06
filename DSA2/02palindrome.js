/*
  find the number is palindrome or not
*/

function isPalindrome(num) {
    if (num < 0) return false;
    let copyNum = num;
    let dup = 0;
    while (copyNum > 0) {
        const lastDigit = copyNum % 10;
        dup = dup * 10 + lastDigit;
        copyNum = Math.floor(copyNum / 10);
    }
    console.log(num, dup);

    return num === dup
}

console.log(isPalindrome(121));   // true
console.log(isPalindrome(123));   // false
console.log(isPalindrome(-121));  // false

