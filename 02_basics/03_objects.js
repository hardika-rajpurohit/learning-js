// singleton
// when we declare it as literals then it is not singleton that we are going to do now in this file

// Object.create // constructor method

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hardika", // by default name is processed (as "name") as string
    "full name": "Hardika Rajpurohit",
    [mySym]: "mykey1", // [] to refer that its a symbol
    age: 23,
    location: "Jodhpur",
    email: "hardika@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Moonday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]); // now we cannot access full name with dot

// console.log(JsUser[mySym]);

JsUser.email = "hardika@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hardika@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS User ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());