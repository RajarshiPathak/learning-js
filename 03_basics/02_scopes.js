//var c = 300
//resist using this it changes everytime 
let a = 300
if(true){
    let a = 10
     c = 20
    //console.log("Inner:" , a );
}

//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()
if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website)
    }
    //console.log(website)
}

//console.log(username)

//++++++++++++++++++++++ interesting ++++++++++++++++

console.log(addone(5))
function addone(num){
    return num +1
}

//addTwo(5)
const addTwo = function(num){
    return num + 2
}
//this is another way of declaring function under variable
//but cant access it before initialization