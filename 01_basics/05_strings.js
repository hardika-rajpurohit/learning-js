const name = "hardika"
const repoCount = 1

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hardika-hr")

// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // did not change the original value
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "    hardika  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https//hardika.com/hardika%72rajpurohit/"
console.log(url.replace('%72','-'));
console.log(url.includes('hardika'));
console.log(url.split('%'));