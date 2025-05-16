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