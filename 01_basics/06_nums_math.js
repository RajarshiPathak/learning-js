const score = 400
//console.log(score)

const balance = new Number(100)
//console.log(balance)

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));
// mostly used in ecommerce websites to precise the value after decimal 


const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(4))
// toPrecision decimal ke pehle vale character bhi count karta hai 
// or roundoff bhi 

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'))
//to put commas in btw 0s
//en-IN indian currency ke liye 

//+++++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++

//console.log(Math)
//console.log(Math.abs(-4))
//makes value absolute pos will be pos but neg will become pos
//console.log(Math.round(4.4))
//it will roundoff the value
//console.log(Math.ceil(4.2))
//roundoff to upper value 5
//console.log(Math.floor(4.9))
//roundoff to lower value 4
// console.log(Math.min(4,3,6,8))
// console.log(Math.max(4,3,6,8))

// console.log(Math.random())
//random value from 0-1
// console.log((Math.random()*10)+1)
// console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min+1))+min)

