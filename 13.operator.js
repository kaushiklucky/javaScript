//Operators -- > Arithmetic Operators, Assignment Operators, Comparison Operators, Logical Operators, Bitwise Operators, Ternary Operators

//Arithmetic Operators

//Addition
let number1 = 25;
let number2 = 36;
let number3 = 56;
let sum = number1 + number2 + number3;
console.log(sum);    // 117

//Subtraction
let number4 = 25;
let number5 = 36;
let diff = number4 - number5;
console.log(diff);    // -11

//Multiplication
let number6 = 25;
let number7 = 36;
let prod = number6 * number7;
console.log(prod);    // 900

//Division
let x = 10;
let y = 4;
let ans = x/y;
console.log(ans);    // 2.5

//Exponentiation
let x1 = 5;
let y1 = 5;
let ans1 = x1 ** 3;
console.log(ans1);      // 125
ans1 = x1 ** y1;
console.log(ans1);      // 3125

//Modulus
let x2 = 10;
let y2 = 4;
let ans2 = x2 % y2;
console.log(ans2);    // 2

//Increment & decrement
let x3 = 10;
let y3 = 4;
x3++;
console.log(x3);      // 11
y3--;
console.log(y3);      // 3

//Pre-increment/decrement : Increment/decrement the value before using.
//Post-increment/decrement : Use the current value and then increment/decrement.

//Pre increment/decrement
let x4 = 10;
let y4 = 4;

console.log(++x4);    // 11
console.log(--y4);    // 3
console.log(x4);      // 11
console.log(y4);      // 3

//Post increment/decrement
let a = 10;
let b = 4;
console.log(a++);      // 10
console.log(b--);      // 4

console.log(a);        // 11
console.log(b);        // 3



//Assignment Operators
let firstName = "Lucky";
let u = 4;

console.log(firstName);      // Lucky
console.log(u);              // 4


//Comparison Operators

// Strict Equality v/s Loose Equality
// Strict equality is denoted by '==='. When we use strict equality operator, both the data-type and the value are checked to determine equality, and it returns a boolean answer.

// Loose equality is denoted by '=='. When we use loose equality operator, only the value is checked to determine equality, and it returns a boolean answer.
let u1 = "10";
console.log(typeof(u1));        // string

let v1 = 10;
console.log(typeof(v1));         // number

console.log(u1 == v1);            // true

console.log(u1 === v1);           // false


//Logical Operators
let alert1 = true;
let alert2 = false;
let alert3 = true;

console.log(alert1 && alert2);    // false
console.log(alert2 && alert3);    // false
console.log(alert1 && alert3);    // true

let num1 = 0;
let num2 = 1;
let num3 = 1;

console.log(num1 && num2);    // 0
console.log(num2 && num3);    // 1
console.log(num1 && num3);    // 0

//OR (||)

let alert4 = false;
let alert5 = false;
let alert6 = true;

console.log(alert4 || alert5);    // false
console.log(alert5 || alert6);    // true
console.log(alert4 || alert6);    // true

let num4 = 0;
let num5 = 1;
let num6 = 0;

console.log(num4 || num5);    // 1
console.log(num5 || num6);    // 1
console.log(num4 || num6);    // 0


// NOT (!)
let alert7 = false;
let alert8;
let alert9 = NaN;
let mySum = 45;
let gone = false;
let isFirst = true;

console.log(!alert7);      // true
console.log(!alert8);      // true
console.log(!alert9);      // true
console.log(!mySum);       // false
console.log(!gone);        // true
console.log(!isFirst);     // false


// Bitwise Operators

//Bitwise AND (&)
let num7 = 5;
// Binary representation of 5 : 0 1 0 1

let num8 = 7;
// Binary representation of 7 : 0 1 1 1

console.log(num7 & num8);         // 5


//Bitwise OR (|)
let num9 = 5;
// Binary representation of 5 : 0 1 0 1

let num10 = 8;
// Binary representation of 7 : 1 0 0 0

console.log(num9 | num10);         // 13



//Bitwise NOT (~)

let num11 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let num12 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

let num13 = -8;
// Binary representation of -8 : 1 1 1 1 0 0 0

console.log(~num11);    // -6
console.log(~num12);    // -9
console.log(~num13);    // 7



//Bitwise XOR (^)
let num14 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let num15 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(num14 ^ num15);     // 13


//Left Shift (<<)
let num16 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let num17 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(num16 << 3);     // 40
console.log(num17 << 2);     // 32


//Right Shift (>>)
let num18 = 5;
// Binary representation of 5 : 0 0 0 0 1 0 1

let num19 = 8;
// Binary representation of 7 : 0 0 0 1 0 0 0

console.log(num18 >> 3);     // 0
console.log(num19 >> 2);     // 2


// Ternary Operators

//SYNTAX
(condition) ? (statement1) : (statement2);

let myage = 21;

(myAge >= 18) ? (console.log("Can Drive")) : (console.log("Cannot Drive")); // Output : Cannot Drive



// and  or operator 



// if(firstName[0] === "H"){
//     console.log("your name starts with H")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }
let firstName1 = "arshit";
let age = 16;

if(firstName1[0] === "H" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
}