//for of 

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello World!"
for (const greet  of greetings) {
    //console.log(`${greet}`);

}

//Maps

const map = new Map()
map.set('IN', "India")
map.set("USA", "United States of america")
map.set("fr","france")
map.set("IN","India")

//console.log(map);

for (const [k,v] of map) {
    //console.log(k,':-',v);
}

const myObject = {
    game1:'NFS',
    game2:'Spiderman'
}
for (const [k,v] of myObject) {
    console.log(k,':-',v);
}


