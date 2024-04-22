// for in 
const myObject = {
    js :'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift'

}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java"]
for (const key in programming) {
    //console.log(programming[key]);
    // console.log(key);
}

const map = new Map()
map.set('IN', "India")
map.set("USA", "United States of america")
map.set("fr","france")
map.set("IN","India")

for (const key in map) {
    console.log(key);
}

// for of is for maps 
// for in is for objects
//and both for array
