// string concatenation 

let string1 = "20";
let string2 = "10";

let firstString = string1 + string2;
console.log(firstString);

let secondString = string1 + string2;
console.log(typeof secondString);

let newString = +string1 + +string2;
console.log(typeof newString);


let first = "Lucky";
let second = "Kaushik";

let first1 = first + " " + second;
console.log(first1);

// My name is Lucky Kaushik, my age is 20 years
let aboutMe = "My name is " + first + " " + second + ", my age is " + string1 + " years";
console.log(aboutMe);

console.log("Second methord");
let aboutMe2 = `My name is ${first} ${second}, my age is ${string1} years`;
console.log(aboutMe2);