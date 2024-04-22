const userEmail = []

if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("don't have email");
}

//falsy values 

// false , 0 , -0 , bigInt 0n, "",null, undefined, NaN 

//truthy values 
//"0" , "false"," ", [],{},function(){} <- empty function

if(userEmail.length === 0 ){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??): null undefined <-mostly used for

let val1;
// val1 = 5??10
// val1 = null?? 10
val1 = null ?? 10 ?? 20

console.log(val1);

//terniary Operator 
 
//condition ? true: false

const iceTeaPrice = 100
iceTeaPrice <= 80? console.log("less"): console.log("more");