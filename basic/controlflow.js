// if

if (true) {
  // execute
}

if (false) {
  // not execute
}

const temp = 30;

if (temp === 21) {
  console.log(`less than 30`);
} else {
  console.log(`greated than 30`);
}

// sort hand

let balance = 1000;

// if(balance > 500) console.log("yes you have minimum balance");     sort hand notation

if (balance < 500) {
  console.log(`balance is less than 500`);
} else if (balance < 750) {
  console.log(`balance is less than 750`);
} else if (balance < 900) {
  console.log(`balance is less than 900`);
} else {
  console.log(`balance is grater than  999`);
}


let month = 6;

switch(month){
    case 1:
        console.log(`january`);
        break;
    case 2:
        console.log(`february`);
        break;
    case 3:
        console.log(`mar`);
        break;
    case 4:
        console.log(`apr`);
        break;
    default:
        console.log(`no result found`);
        break;
}


// falsy value

// false , 0, -0 , BigInt )navigator, null, undefined , NaN

//  truthy value

// true, "0" , 'false',  " ", [] , {}, function(){},  

