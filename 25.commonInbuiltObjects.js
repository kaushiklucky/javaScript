console.log(Math.PI);


console.log(Math.max(50,23,40,60,90,80,15,46));

let arr = [50,23,40,60,90,80,15,46];
console.log(Math.max(...arr)); // Math.max() function does not directly accept an array as its argument. Instead, you need to spread the array into individual elements using the spread operator (...).

let arr1 = [50,23,40,60,90,80,15,46];
console.log(Math.min(...arr1));

console.log(Math.round(1.4));

console.log(Math.floor(2.9)); // print smallest integer
console.log(Math.floor(4.5));

console.log(Math.ceil(4.8)) //// print largest integer
console.log(Math.ceil(9.1));

console.log(Math.abs(9));

console.log(Math.abs(-9));

console.log(Math.random());

console.log(Math.sqrt(12));

console.log(Math.pow(2,10));

console.log(Math.E); //Math.E represents Euler's number, approximately 2.71828.

console.log(Math.LN2); // Math.LN2 is used to calculate the natural logarithm of 2, approximately 0.693

console.log(Math.LN10); // Math.LN10 is used to calculate the natural logarithm of 10, approximately 2.303

console.log(Math.LOG2E); // Math.LOG2E is used to calculate the Base-2 logarithm of E, approximately 1.443

console.log(Math.LOG10E); // Math.LOG10E is used to calculate the Base-10 logarithm of E, approximately 0.434


let x = 1
console.log(Math.sin(x));

let value = Math.sin(Math.PI/2);
console.log(value);

value = Math.sin(Math.PI/6);
console.log(value);

value = Math.cos(Math.PI/3);
console.log(value);

value = Math.cos(Math.PI/6);
console.log(value);

value = Math.tan(Math.PI/3);
console.log(value);

// DATA OBJECTS

let curr = new Date();
console.log(curr);

let date = new Date("Feb 11 2000 05:30");
console.log(date);

console.log(date.getFullYear());

console.log(date.setFullYear(2003));
console.log(date);