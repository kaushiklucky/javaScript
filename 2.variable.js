"use strict";
// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// variable is named memory location

// declare a variable 

var firstName = "Lucky";

// use a variable 
console.log(firstName);

// change value 

firstName = "Kaushik";

console.log(firstName);


// var is function scoped - When we declare a variable using var inside a function, we canot access the variable outside the function.

var age = 22;
if(true){
    console.log(age);
}

// function example() {
//     var x = 10;
//     console.log(x);
// }

// example();       // 10
// console.log(x);       // Throws ReferenceError: x is not defined ```

var x = 10;
var x = 20; // chal jayega lekin debaging me problem aayegi

// let is the block scop, cant accecible out side the block
{
    let a = 50;
    console.log(a)  // accecible
}

{
    let b = 100;
}
// console.log(b) //not accecible

let c = 40;
// let c = 30; // not possible in let
c = "Lucky Kaushik";  // possible

// let is dynamically typed datatype >> datatype can change on runtime

const y = 25;
// redeclaring, redefining and reassining are not possible in const data type
console.log(y);


// var vs let vs const in javascipt
// var is globally scoped while let and cost are block scoped

// var can be updated and redeclared within its scope

// let can be updated but not redeclared

// const cannot be updated or redeclared

// var can be redeclared and reassigned, while let can be reassigned but not redeclared in the same scope, and const cannot be redeclared or reassigned.

// var variable are initialized with undefined whereas let and const variable are not initialized

// const must be initialized during declaration unlike var and let 