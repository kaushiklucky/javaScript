// function functionName(parameter1, parameter2, ...) {
//     // Function body
//     // Code to be executed
//     return value; // Optional
// }

//Function Declaration:
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Lucky!"));


//Function Expression:
const greet1 = function(name1) {
    return `Hello, ${name1}!`;
};
console.log(greet1("Kaushik!"));


//Arrow Functions
const greet2 = (name2) => {
    return `Hello, ${name2}!`;
};
console.log(greet2("LuckyKaushik"));


let add = (a,b) => {
    return a+b;
}
let result = add(10,20);
console.log(result);


let add2 = (a,b) => a+b; // implecite return
let result2 = add2(20,30);
console.log(result2);

let printNum = a => console.log(a);
printNum(10);


// not argument object in arrow function

function add3(){ //regular function
    console.log(arguments);
}
add3(10,20,30,40,50);

// let add4 = () => console.log(arguments) // cant use will give error
// add4(10,20,30,40,50);


const person = {
    name: 'John',
    greet: function(){
        console.log("greet", this)
        console.log(`Hello, my name is ${this.name}`)
    },
    greetTwo: () => { // arrow function ke pas kud ka this nhi hota woo lexicaly le leta hai global se, arrow function taking this from window and this.name is not defined in window so nothing will print
        console.log("greetTwo", this)
        console.log(`Hello, my name is ${this.name}`)
    }
}

// we cant use arrow function as a cunstructor
function RegularFunction(name){
    this.name = name;
}
const regularObj = new RegularFunction('Lucky')
console.log(regularObj)


const ArrowFunction = (name) => {
    this.name = name
}
// const arrowObj = new ArrowFunction("Kaushik");
// console.log(arrowObj);  // this give error

//Callback Functions --> functions can be passed as arguments to other functions, commonly known as callback functions. They're extensively used in asynchronous programming and event handling.
function fetchData(callback) {
    // Simulated asynchronous operation
    setTimeout(() => {
        const data = "Data fetched successfully";
        callback(data);
    }, 2000);
}
function processData(data) {
    console.log(`Processing data: ${data}`);
}
fetchData(processData); // Output: Processing data: Data fetched successfully




//Returning Functions --> functions can return other functions, enabling the creation of higher-order functions.
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10


//Built-in Functions --> JavaScript comes with several built-in functions, such as setTimeout, setInterval, and addEventListener, which take functions as arguments.
setTimeout(() => {
    console.log("Delayed function");
}, 1000);


function getAverage(num1, num2){
    let avg = (num1+num2)/2;
    console.log("Average: ", avg);
}
getAverage(3,7);


// return function 
function getSum(a,b,c){
    let sum = a+b+c;
    return sum;
}
let ans = getSum(2,7,4);
console.log("Printing Sum: ", ans);

function getFullName(firstName, middleName, lastName){
    let fullName = firstName + " " + middleName + " " + lastName;
    return fullName;
}

let finalname = getFullName("Maharana", "pratap", "Singh");
console.log(finalname);


function getMultiplication(x,y){
    let answer = x*y;
    return answer;
}
let finalAns = getMultiplication(7,6);
console.log(finalAns);



let solve = function(x1,y1){
    let answer1 = x1*y1;
    return answer1;
}
f = solve(4,6);
console.log(f);



let solve1 = function(x2,y2){
    return x2*y2;
}
a = solve1(4,8);
console.log(a);


let getExp = (p,q) => {
    let s = p**q;
    return s;
}
console.log(getExp(2,10));



let compare = (a,b) => {
    return a-b;
}
let num = [56, 34, 12, 78, 90, 23, 45, 67, 89, 11];
num.sort(compare);
console.log(num); // Output: [11, 12, 23, 34, 45, 56, 67, 78, 89, 90]


let compare2 = (a,b) => {
    return b-a;
}
let num2 = [56, 34, 12, 78, 90, 23, 45, 67, 89, 11];
num.sort(compare2);
console.log(num2); // Output: [90, 89, 78, 67, 56, 45, 34, 23, 12, 11]