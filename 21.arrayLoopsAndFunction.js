//forEach >> Performs the specified action for each element in an array.
brr.forEach((value, index) =>{
    console.log('Number: ', value, 'Index: ', index);
});

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


arr = [10, 20, 30];

for (let index in arr) {
  console.log(`Index: ${index}, Value: ${arr[index]}`);
}

for(let i in fruits){
    console.log(fruits[i]);
}

let object = {
    "Name" : "Lucky",
    "age" : "22yrs",
    weight : "58kg",
    height : "5ft 5inch",
};
for(let key in object){
    console.log(key, ':', object[key]);
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


for(let value of arr){
    console.log(value);
}
let fullName = 'Lucky Kaushik';
for(let i of fullName){
    console.log(i);
}

//tradistional loop
for(let index=0; index<length; index++){
    console.log(crr[index]);
}

crr = [3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// for each loop
let num2 = [1, 2, 3, 4, 5];
num2.forEach((element) => {
  console.log(element);
});

// array in function
function getSum(crr){
    let len = crr.length;
    let sum=0;
    for(let i=0; i<len; i++){
        sum = sum+crr[i];
    }
    return sum;
}
let totalSum = getSum(crr);
console.log('Total sum is: ',totalSum);