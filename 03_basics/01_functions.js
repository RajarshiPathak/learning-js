function syMyName(){
    console.log("h")
    console.log("h")
    console.log("h")
    console.log("h")
    console.log("h")

}

//syMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

//addTwoNumbers()
//empty parenthesis means execution
// addTwoNumbers(1,3)

function addTwoNumbers(number1, number2){
    // let result = number1 +number2
    // return result
    return number1+number2
}

const result = addTwoNumbers(4,5)

//console.log("Result",result)

function loginUserMessage(username = "sam"){
    // if(!username){
    //     console.log("Please enter a username")
    //     return
    // }
    return`${username}just logged in `
}

//console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());
//yaha sam as a default value ayega 

function calculateCartPrice(val1,val2, ...num1){
    return num1
}




