// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "   Lucky Kaushik   ";
let second = 'Mohit jhangard';

console.log(firstName.length);
firstName = firstName.trim(); //  "Lucky Kaushik"
console.log(firstName)
console.log(firstName.length);

second = second.toUpperCase();
firstName = firstName.toLowerCase();
console.log(second);
console.log(firstName);

// start index 
// end index

let newString = firstName.slice(0, 5); // hars
console.log(newString);

let secondString = second.slice(6, 14);
console.log(secondString);