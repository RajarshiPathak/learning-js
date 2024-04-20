const user = {
    username : "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this)

// function chai(){
//     let username = "hitesh"
//     console.log(this.username)

// }
//here this is not working as in object

//chai()

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username)

// }
// chai()
//now declaring arrow function 

const chai = () => {
    let username = "hitesh"
    console.log(this)
} 

chai()
 
// explicite arrow function 
// const addTwo = (num1, num2) => {
//     return num1 +num2
// }

//implicite arrow function ,don't have to write riturn
 //const addTwo = (num1 , num2) => num1 + num2
 //another way
//  const addTwo = (num1 , num2) => (num1 + num2)

// to return object we have to use parenthesis like below

const addTwo = () => ({username :"hitesh"})

 console.log(addTwo(3,4))

 const myArray = [2,5,3,7,8]

 myArray.forEach()
