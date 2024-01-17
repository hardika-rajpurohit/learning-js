const user = {
    userName: "hardika",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`Username: ${this.userName}`);
        console.log(this);
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

// const user2 = {
//     userName: "hardika",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("got user details from database");
//         // console.log(`Username: ${this.userName}`);
//         console.log(this);
//     }
// }

// const promiseOne = new Promise()
// const date = new Date() 
// new keyword is what we consider constructor function, constructor function gives us a new copy everytime

function User(userName, loginCount, signedIn) {
    this.userName = userName
    this.loginCount = loginCount
    this.signedIn = signedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // return this
}

// const userOne = User("hardika", 12, true)
// const userTwo = User("Hello", 11, false)
// console.log(userOne);

const userOne = new User("hardika", 12, true)
const userTwo = new User("Hello", 11, false)
// console.log(userOne);
// console.log(userTwo);

// whenever we use "new" keyword
// 1. an empty object is created first, and 
// 2. a constructor function is called by "new" keyword
// 3. all the arguments are injected into "this" keyword
// 4. we get the result

console.log(userOne.constructor); // khud hi ka reference hoti hai