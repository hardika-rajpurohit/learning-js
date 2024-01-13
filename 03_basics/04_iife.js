// Immediately Invoked Function Expressions (IIFE)

(function check() {
    // named iife
    console.log(`CONNECTED`);
})();

// ()() - 1st is for definition of fucntion and 2nd is for execution, to wrap both
// we do this cause global scope k pollution se problem se hatane k liye IIFE ka use hota hai

// ( () => {} )() denoting IIFE as arrow function

( (name) => {
    console.log(`CONNECTED TWO ${name}`);
} )('hardika')