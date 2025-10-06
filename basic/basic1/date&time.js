const date = new Date();

// console.log(date);
// console.log(date.toString());

// console.log('toDateString',date.toDateString());
// console.log('toISOString',date.toISOString());
// console.log('toLocaleDateString',date.toLocaleDateString());
// console.log("toLocaleString",date.toLocaleString());
// console.log("toLocaleTimeString",date.toLocaleTimeString());
// console.log("toUTCString",date.toUTCString());

// 2025-07-14T17:30:31.961Z
// Mon Jul 14 2025 23:00:31 GMT+0530 (India Standard Time)
// toDateString Mon Jul 14 2025
// toISOString 2025-07-14T17:30:31.961Z
// toLocaleDateString 7/14/2025
// toLocaleString 7/14/2025, 11:00:31 PM
// toLocaleTimeString 11:00:31 PM
// toUTCString Mon, 14 Jul 2025 17:30:31 GMT

let myCreateDate = new Date(2023,0,23);
console.log(myCreateDate);


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());




