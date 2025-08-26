// Types of loop in javascript
// for loop - loop through a block of code a number of times
// for...in loop - loop through the properties/keys of an object
// for...of loop - loop through the values of an iterable object
// while loop - loop through a block of code while a specified condition is true
// do...while loop - loop through a block of code once, and then repeat the loop


// for loop
// for loop is used to iterate over a block of code a number of times
// syntax:
//for(insialization; condition; increment/decrement) 
// initialization is executed once before the loop starts
// condition is evaluated before each iteration, if true, the loop continues. if false, the loop terminates
// increment/decrement is executed after each iteration

let total = 0;

let number = 100;

for (let i = 1; i <= number; i++) {
  total = total + i;
}

console.log(total);


// break keywork

// continue keyword 

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }
console.log("hello there");



// for...in loop
// for...in loop is used to iterate over the properties/keys of an object
// syntax:
// for(variable in object)
// variable is a variable that will hold the key of the object
// object is the object whose properties/keys you want to iterate over

let person = {
  name: "Lucky",
  age: 22,
  city: "Delhi"
};
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
for(let a in person){
  console.log(a);
}
for (a in person){
  console.log(person[a]);
}


// for...of loop
// for...of loop is used to iterate over the values of an iterable object
// syntax:
// for(variable of iterable)
// variable is a variable that will hold the value of the iterable
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(value);
}

for (let value of "hello") {
  console.log(value);
}



// while loop 

// 0 se 9 
// dry don't repeat yourself
let i = 0; // 1 2 3 4

while (i <= 9) {
  console.log(i);
  i++;
}
console.log(`current value of i is ${i}`);
console.log("hello");


// while loop example 
let num = 100;
// let total = 0; //1 + 2 +3
// let i = 0;


// while(i<=100){
//     total = total + i;
//     i++;
// }


// console.log(total);

// let total = (num*(num+1))/2;
// console.log(total);


// intro to for loop 
// print 0 to 9

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// console.log("value of i is ",i);

// do while loop

// while(i<=9){
//     console.log(i);
//     i++;
// }

// let i = 10;
// do{
//     console.log(i);
//     i++;
// }while(i<=9);

// console.log("value of i is ", i);




// for each loop
// forEach loop is used to iterate over the elements of an array
// syntax:
// array.forEach(callback(currentValue, index, array))
// callback is a function that is called for each element in the array
let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",  "kiwi", "lemon"];
fruits.forEach((fruit, index) => {
  console.log(`Index: ${index}, Fruit: ${fruit}`);
});

// example

let num2 = [1, 2, 3, 4, 5];
num2.forEach((element) => {
  console.log(element);
});

// forEach loop with an object
let personObj = {
  name: "John",
  age: 30,
  city: "New York"
};
Object.keys(personObj).forEach((key) => {
  console.log(`${key}: ${personObj[key]}`);
});