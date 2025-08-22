

let age = 22; 
let firstName = "Lucky";

console.log(typeof age);
console.log(typeof firstName);

// convert number to string. 
// 22 -> "22"
age = age + "";
console.log(typeof age ); //"22"


// convert string to number. 

let myStr = +"34";
console.log(typeof myStr);

// let age = "18";
// age = Number(age);
// console.log(typeof age);


let a = "8";
console.log(typeof a); // string
a = Number.parseInt(a); // converting string to number
console.log(typeof a); // number


let b = 73567856197561746517567561056175;
console.log(typeof b); // number
b = b.toString(); // number → string
console.log(typeof b); // string
console.log(b); // "73567856197561746517567561056175"