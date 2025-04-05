// Example :- 

// "" ,"" //true
// "aaz","zza" //false
// "rat","cat" // false
// "qwerty","qeywrt" // true


function anagramsCheck(val1, val2) {
    if (val1 === "" && val2 === "") return true;
    if (val1.length !== val2.length) return false;
    let obj1 = {};
    let obj2 = {};
    val1 = val1.toLowerCase();
    val2 = val2.toLowerCase();
    for (let char of val1) obj1[char] = (obj1[char] || 0) + 1
    for (let char of val2) obj2[char] = (obj2[char] || 0) + 1

    // console.log(obj1);
    // console.log(obj2);

    for (let key in obj1) {
        if (!obj2[key]) return false
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;

}

console.log(anagramsCheck("abcd", "dcab"));
console.log(anagramsCheck("cat", "rat"));

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const lookUp = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if (!lookUp[letter]) {
            return false;
        } else {
            lookUp[letter] -= 1
        }
    }
    return true
}

console.log(validAnagram("anagram","naagram"));
console.log(validAnagram("anagrams","naagram"));

