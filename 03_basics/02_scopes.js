// {} // scope

// var c = 300 // global scope
let a = 300
if(true) {
    let a = 10
    const b =20
    // console.log("INNER: ", a);
} // block scope

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hardika"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if(true) {
    const username = "hardika"
    if (username === "hardika") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++ interesting +++++++++

console.log(addOne(5));

function addOne(num) {
    return num + 1
} // called function

addTwo(5)

const addTwo = function(num) {
    return num + 2
} // called function or expression
