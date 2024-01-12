// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const value = 100 // Number
// const scoreValue = 100.3 // Number

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 23483743838838191377n

// Reference (non primitive))
// Array, Objects, Functions

const heros = ["abc", "bcd", "cde"];
let myObj = {
    name: "hardika",
    age: 23,
}

const myFunction = function() {
    console.log("Hello World!");
}

console.log(bigNumber); //undefined
console.log(myFunction); //function