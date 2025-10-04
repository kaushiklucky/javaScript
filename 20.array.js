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
let arr = ['Lucky', 'True', '5', '3.14', false];
console.log(arr[2]);
console.log(arr[0]);
console.log(arr[3]);

delete arr[1];
console.log(arr);



// array methods
// toString() >> Converts an array to a string of (comma separated)
let num = [1, 2, 3, 4, 5];
let num2 = num.toString();
console.log(num2); // Output: "1,2,3,4,5"
typeof(num2);

// join() >> Joins all elements of an array into a string, with a specified separator.
let joinedStr = num.join(" - ");
console.log(joinedStr); // Output: "1 - 2 - 3 - 4 - 5"

let joinFruits = fruits.join(" yummy ");
console.log(joinFruits); // Output: "apple yummy mango yummy grapes"

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
let slice = brr.slice(2,7); // give a part of array brr.slice(startingIndex, endingIndexWhichIsNotIncluded)
console.log(slice); //it make sallow copy


//slice >> Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let slicedArray = brr.slice(3, 6); // Returns elements from index 3 to 5
console.log(slicedArray); // Output: [6, 3, 9]
// slice can also be used to copy the entire array
let copiedArray = brr.slice(); // Copies the entire array
console.log(copiedArray); // Output: [5, 8, 4, 6, 3, 9, 0, 1, 7, 2]
// slice can also be used to copy a part of the array
let partArray = brr.slice(2, 5); // Copies elements from index 2 to 4
console.log(partArray); // Output: [4, 6, 3]
// slice can also be used to copy elements from the end of the array
let endPartArray = brr.slice(-3); // Copies the last 3 elements
console.log(endPartArray); // Output: [1, 7, 2]



//splice >> Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// It can be used to add, remove, or replace elements in an array.
brr = [5,8,4,6,3,9,0,1,7,2];
brr.splice(1,2,"dsa"); //brr.splice(starting index, no of value remove, add value)
console.log(brr);
brr.splice(3,0,"web");
console.log(brr);

// splice can also be used to add elements without removing any
brr.splice(4, 0, "newElement"); // Adds "newElement"
console.log(brr); // Output: [5, "dsa", 6, "web", "newElement", 9, 0, 1, 7, 2]

brr.splice(4, 0, 1010, 1011, 1012, 1013); // Adds multiple elements at index 4
console.log(brr);
// splice can also be used to remove elements
brr.splice(4, 2); // Removes 2 elements starting from index 4
console.log(brr); 


// slice vs splice
// slice returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// splice changes the contents of an array by removing or replacing existing elements and/or adding new elements

// concat() >> Combines two or more arrays and returns a new array.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
// concat() can also be used to combine multiple arrays
let arr5 = [7, 8, 9];
let combinedArr = arr1.concat(arr2, arr5, arr3);
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6]

// reverse() >> Reverses the order of the elements in an array.
let reversedArr = arr1.reverse();
console.log(reversedArr); // Output: [6, 5, 4, 3, 2, 1]

// delete >> Deletes an element from an array at a specified index and it does not change the length of the array.
let arr4 = [1, 2, 3, 4, 5];
delete arr4[2]; // Deletes the element at index 2
console.log(arr4); // Output: [1, 2, <1 empty item>, 4, 5]


// fill() >> Fills all elements of an array from a start index to an end index with a static value.
let filledArr = new Array(5).fill(0);
console.log(filledArr); // Output: [0, 0, 0, 0, 0]


let crr = [3,5,10,15,20,25,30,35,40,45,50];

// map >> Creates a new array by performing some operation on each element of the original array.
// It does not change the original array.
let ansArray = crr.map((number) =>{
    return number*number;
})  //Calls a defined callback function on each element of an array, and returns an array that contains the results.
console.log(ansArray);

crr.map((num, index) =>{
    console.log(index);
    console.log(num+1);
})

// filter >> Returns the elements of an array that meet the condition specified in a callback function.
// It creates a new array with all elements that pass the test implemented by the provided function.
// It does not change the original array.
let brr2 = [3,5,10,15,20,25,30,35,40,45,50];
let evenNumbers = brr2.filter((num) => {
    return num % 2 === 0; // Returns true for even numbers
});
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
// It executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// It can be used to calculate a single value from an array, such as the sum of all elements.
let arr7 = [1, 2, 3, 4, 5, 4, 1, 3, 2, 5];
let newArray = arr7.reduce((h1, h2) => {
    return h1 + h2;
}); // The second argument is the initial value for the accumulator
console.log(newArray); // Output: 30

let sum = crr.reduce((acc, curr)=>{
    return acc + curr;
},0);
console.log(sum);

//sort >> it chages original array according to the sorting order
// By default, it sorts the elements as strings in alphabetical and ascending order.
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


// Array from >> use to create an array from any other object that is iterable or array-like.
let str = "Hello";
let arrFromStr = Array.from(str);
console.log(arrFromStr); // Output: ['H', 'e', 'l', 'l', 'o']

// example of Array.from with object
let obj2 = { // Object with array-like structure
  0: "apple",
  1: "banana",
  2: "mango",
  length: 3
};
let arr6 = Array.from(obj2);// Convert to array

console.log(arr6); // ["apple", "banana", "mango"]
console.log(Array.isArray(arr6)); // true


// Array of >> Creates an array with a variable number of arguments, regardless of the number or type of arguments.
let arrOfNumbers = Array.of(1, 2, 3, 4, 5);
console.log(arrOfNumbers); // Output: [1, 2, 3, 4, 5]

// Array.isArray >> Checks if the provided value is an array.
let isArray = Array.isArray(arrOfNumbers);
console.log(isArray); // Output: true

// node 20.array.js