// function print(){
//     console.log("B");
//     console.log("I");
//     console.log("S");
//     console.log("W");
//     console.log("A");
    
// }

// print()   


function sum(num1,num2){  // parameter
 console.log(num1+num2);
 return num1 + num2
}  // scope


const result = sum; // reference

// console.log(result(2,4)); 


// sum(1,2) //argument 

function leggin(user){
    if(user === undefined){
        console.log("please enter a valid user");
        return
    }
    return `${user} just leggin in`
}
// console.log(leggin("kunu"));
// console.log(leggin());



function calculate(...num1){

    return num1
}

// console.log(calculate(2,4,500, 27.8)); //[ 2, 4, 500, 27.8 ]


const users = {
    name:"kunu",
    prices:10
}

function handelObject(params) {
    console.log(`UserName is ${params.name} and the price is ${params.price}`);
    
}

console.log(handelObject(users));




