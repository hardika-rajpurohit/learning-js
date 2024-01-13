const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3, 1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros =[...marvel_heros, ...dc_heros] // spread, it is no more array
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usable_another_year = another_array.flat(Infinity)
// console.log(usable_another_year);


// console.log(Array.isArray("hardika"));
// console.log(Array.from("hardika"));
// console.log(Array.from({name: "hardika"})); // interesting for interviews

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
