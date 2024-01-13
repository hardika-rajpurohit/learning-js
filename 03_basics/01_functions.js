function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("D");
    console.log("I");
    console.log("K");
    console.log("A"); 
}

// sayMyName // reference
// sayMyName() // execution

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result // return k baad kuch bhi execute nahi hoga
    // console.log("hardika");
    return num1 + num2
}

const result = addTwoNumbers(3, 4)
// console.log("Result: ", result);


function loginUserMessage(username = "sam") { // same is default value that we can add
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hardika"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage("hardika")) // when we dont pass any argument then we get undefined and not null

function calculateCartPrice(val1, val2, ...num1) { //... here, it is rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "hardika",
    price: "199"
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "HR",
    price: 200
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 100, 400]));