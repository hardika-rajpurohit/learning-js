const user = {
    username: "hardika",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);

        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "hardika"
//     console.log(this.username);
// }

// chai()

// arrow function
const chai = () => {
    let username = "hardika"
    console.log(this);
}

// chai()

// () => {} // arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // in curly braces, return keyword is compulsory, i.e., explicit return

// const addTwo = (num1, num2) => num1 + num2 // implicit return, no return is keyword is necessary
//or, const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => {username: "hardika"} // undefined as result

const addTwo = (num1, num2) => ({username: "hardika"}) // paranthesis is necessary to return object

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => {})