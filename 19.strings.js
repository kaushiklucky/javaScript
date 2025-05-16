// strings --> sequence of characters
let firstName = "Lucky";
let lastName = "Kaushik";
console.log(firstName);
console.log(lastName);

name = `Lucky kaushik.
hello,
hi,
how are you`;
console.log(name);

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

// My name is Lucky Kaushik, my age is 22 years
let aboutMe = "My name is " + first + " " + second + ", my age is " + string1 + " years";
console.log(aboutMe);

console.log("Second methord");
let aboutMe2 = `My name is ${first} ${second}, my age is ${string1} years`;
console.log(aboutMe2);


// uppercase and lowercase
let op1 = 'HINDI';
let op2 = 'english';
console.log(op1.toLowerCase());
console.log(op2.toUpperCase());

// substring
let str = "LuckyKaushik";
console.log(str.substring(2));
console.log(str.substring(3,6));
console.log(str.substring(1,8));


let sentence = "Hello jee kaise ho saare";
let words = sentence.split(' ');
console.log(words);

let sentence1 = "Hello jee \"kaise\" ho saare";
console.log(sentence1);

let sentence2 = "Hello \\jee \\kaise \\ho \\saare";
let words2 = sentence2.split('\\');
console.log(words2);


console.log(words.join(','));