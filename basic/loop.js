// iterations

// for

// for (let i = 0; i <= 5; i++) {
//   console.log("i", i);
//   for (let j = 0; j <= 5; j++) {
//     const element = j;
//     console.log("ele", element);
//   }
// }

// break and Continue

for (let i = 0; i < 20; i++) {
  if (i == 5) {
    console.log(`detected five`);
    break;
  }
  console.log(`Value of i is ${i}`);
}

for (let i = 0; i < 20; i++) {
  if (i == 5) {
    console.log(`detected five`);
    // break;
    continue;
  }
  console.log(`Value of i is ${i}`);
}
