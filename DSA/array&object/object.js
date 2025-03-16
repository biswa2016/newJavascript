let obj ={
    name:"biswa",
    age:24,
    language:[1,2,3,4,5]
}

 console.log(Object.keys(obj)); // O(n)
 console.log(Object.values(obj)); // O(n)

 console.log(Object.entries(obj));  // O(n)

 console.log(obj.hasOwnProperty("name")); // O(1)



 
 
 