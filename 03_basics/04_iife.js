//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    //named IIFE
    console.log(`DB CONNECTED ${name}`);
})('hitesh')