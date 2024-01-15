// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "hello world!"

// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }

// Maps

const map = new Map()
map.set('In', "India")
map.set("USA", "United States of India")
map.set("Fr", "France")
// map.set('In', "India") // map takes unique values

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }