// Variable Hoisting : means declarations are moved to the top of their scope during the compile phase, but not their initializations.

// Hoisting affects declarations, not initializations:

// Only the declaration is hoisted, not the initialization. This means a variable can be referenced before its declaration, but its value will be undefined until the code assigns a value.

// Applies to var, let, const, and functions:

// var: Declaration is hoisted to the top of its function or global scope.

// let and const: Also hoisted but remain in a "temporal dead zone" until the code reaches their declaration. Accessing them before declaration results in a ReferenceError.

// Function declarations: Entire function is hoisted (body included).

// var: Hoisted, initialized to undefined.
console.log(x); // undefined
var x = 5;

console.log(y); // undefined
var y = 10;
console.log(y); // 5


// let/const: Hoisted but in a "temporal dead zone" (TDZ). Access before declaration throws a ReferenceError.
//console.log(z); // ReferenceError: Cannot access 'z' before initialization
let z = 20;


// class hoisting
// var obj = new Human();
// class Human{ //ReferenceError: Cannot access 'Human' before initialization
//}


// function hoisting 
sayMyName("Lucky Kaushik");

function sayMyName(fullName){
    console.log(fullName);
}

// Functions: Declarations are fully hoisted (body included).
hello(); // "Hello"
function hello() { console.log("Hello"); }

// Function Expressions: Variable is hoisted, but assignment happens later.
console.log(greet); // undefined
var greet = function() { console.log("Hi"); };

// function call stack >> work on principle of LIFO -> Last In First Out


//simple function >> but greet is not function
let Greet = function(){
    console.log("Good Morning");
}
Greet();

//simple function
function Greet1(){
    console.log("How are you??");
}
Greet1();
console.log(typeof(Greet1));

// passing function in function
function greetMe(Greet1, name){
    console.log("Hello", name)
    Greet();
    Greet1();
}
greetMe(Greet1, "Lucky")

// return a function
function solve(number){
    return function(number){
        return number*number;
    }
}
let ans = solve(5);
let finalAns = ans(10);
console.log(finalAns);

const arr = [
    function(a, b) {
        return a + b;
    },
    function(a, b) {
        return a - b;
    },
    function(a, b) {
        return a * b;
    },
    function(a, b) {
        return a / b;
    }
];

let first = arr[0];
let answer = first(5, 10);
console.log("Sum:", answer);

first = arr[1];
answer = first(5, 10);
console.log("Subtraction:", answer);

first = arr[2];
answer = first(5, 10);
console.log("Multiplication:", answer);

first = arr[3];
answer = first(5, 10);
console.log("Division:", answer);


let obj = {
    age:22,
    wt:56,
    ht:164,
    greet: ()=>{
        console.log("Hello Duniya");
    }
}
console.log(obj.age);
obj.greet();

// undefined
var greeet;
console.log(greeet);
var greeet = function(){
    console.log("Hii");
}

// // ReferenceError: Cannot access 'grt' before initialization
// console.log(grt);
// let grt = function(){
//     console.log("Hii");
// }


// node 22.variableFunctionHoisting.js