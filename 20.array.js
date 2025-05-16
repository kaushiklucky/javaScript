// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));

// array indexing 
let arr = ['Lucky', 'True', '5', '3.14'];
console.log(arr[2]);
console.log(arr[0]);
console.log(arr[3]);

//push
arr.push("Kaushik");  //Appends new elements to the end of an array, and returns the new length of the array.
console.log(arr);

//pop
arr.pop();  //Removes the last element from an array and returns it
console.log(arr);

//shift
arr.shift() //Removes the first element from an array and returns it
console.log(arr);

//unshift
arr.unshift("Lal Babu") //Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr);

let brr = [5,8,4,6,3,9,0,1,7,2];
let slice = brr.slice(2,7); // gie a part of array brr.slice(startingIndex, endingIndexWhichIsNotIncluded)
console.log(slice); //it make sallow copy

//splice
brr.splice(1,2,"dsa"); //brr.splice(starting index, no of value remove, add value)
console.log(brr);
brr.splice(3,0,"web");
console.log(brr);

let crr = [3,5,10,15,20,25,30,35,40,45,50];

// map
let ansArray = crr.map((number) =>{
    return number*number;
})  //Calls a defined callback function on each element of an array, and returns an array that contains the results.
console.log(ansArray);

crr.map((num, index) =>{
    console.log(index);
    console.log(num+1);
})

// filter >> Returns the elements of an array that meet the condition specified in a callback function.
let evenArray = crr.filter((num) =>{
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
});
console.log(evenArray);

let oddArray = crr.filter((num) =>{
    if(num%2!=0){
        return true;
    }
    else{
        return false;
    }
});
console.log(oddArray);

let drr = [5,'dsa',6,'web',3,9,0,1,7,'ds',2];

let stringArray = drr.filter((value) =>{
    if(typeof(value) === 'string'){
        return true;
    }
    else{
        return false;
    }
});
console.log(stringArray);

let numArray = drr.filter((value) =>{
    if(typeof(value) === 'number'){
        return true;
    }
    else{
        return false;
    }
});
console.log(numArray);

// reduce >> Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
let sum = crr.reduce((acc, curr)=>{
    return acc + curr;
},0);
console.log(sum);

//sort
crr.sort();
console.log(crr);

crr.sort((a, b) => a - b); // this is correctly working
console.log(crr);

crr.sort((a, b) => b - a); // Sort in descending order
console.log(crr);

crr = [3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

let result = crr.find(num => num < 30);
console.log(result); // Output: 3

result = crr.find(num => num > 30);
console.log(result); // Output: 35

//length
let length = brr.length;
console.log('length: ', length);


//forEach >> Performs the specified action for each element in an array.
brr.forEach((value, index) =>{
    console.log('Number: ', value, 'Index: ', index);
});

// for-in
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


//for of

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

// node 20.array.js