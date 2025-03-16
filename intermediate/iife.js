// Immediately Invoked Function Expressions  (IIFE)


// function one() {
//     console.log(`DB connected`);
// }
// one()


/* IIFEs are mainly used to encapsulate code, avoid polluting the global scope, and execute code immediately. */

(function one() {
    console.log(`Db Connected`);
})();  // named iffe

((name) => {
    console.log(`DB connected Two ${name}`);
})('biswa') // unnamed iffe 

