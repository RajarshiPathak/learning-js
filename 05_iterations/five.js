const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((item) =>{
//     console.log(item);
// })

function printMe(item){
    console.log(item)
}

//coding.forEach(printMe)
//used already declared function 

// coding.forEach((item , index, arr)=>{
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName:'javascript',
        langfileName:"js"
    },
    {
        languageName:'java',
        langfileName:"java"
    },
    {
        languageName:'python',
        langfileName:"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
