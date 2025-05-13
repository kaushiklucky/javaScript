// 2 type of data types are there --> 1) primitive datatype let, var and const stores number, strings, boolean, bigInt, symbol, null etc ,        2) non-primitive datatype --> user defined data type --> array, stings

let marks = 75;
marks = 78;
console.log(marks);

let x = 100;
x = "Lucky";
x = true;
console.log(x);

let y;
console.log(y); // undefined

let value = null;
console.log(value);

let z = "Lucky Kaushik";
console.log(z);

let a = 7263976258714659476517845604759610475610756147514796519847514736057104976512907561972569172467182651078256; 
// big int stores 2 to the power 53 to -1  --> (2^53)-1
console.log(a);

let b = null;

const c = 34;

console.log(typeof(marks));
console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(z));
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));


// Symbol->   primitive data type
// ->  used to represent unique values, that can be used as keys for objects

// PROS-> Being both unique and immutable, serve effectively as distinctive identifiers within objects and classes
// ->  They enable the creation of private properties and methods within classes, enhancing encapsulation and security
// ->  Are advantageous for establishing constants that are easily shared across various segments of your codebase

// CONS->  limited usability
// ->  complex debugging

// For example,
const value1 = Symbol('hi');
const value2 = Symbol('hi');

console.log(value1 == value2); // false
// Each Symbol is unique, even if the description is identical.
// Hence, value1 and value2 are not equal.

