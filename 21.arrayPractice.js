const prompt = require("prompt-sync")();

// let name = prompt("Enter your name: ");
// console.log("Hello, " + name);


// // prompt >> for inputs in browser
// let arr = [1, 2, 43, 57, 4];
// let a = prompt("Enter a number: ");
// a = Number.parseInt(a); // Convert string input to integer
// arr.push(a);
// console.log(arr);


// let arr1 = [1, 2, 43, 57, 4];
// let a2 = prompt("Enter a number:");
// do{
//     a2 = Number.parseInt(a2);
//     arr1.push(a2);
//     console.log(arr1);
//     a2 = prompt("Enter a number:");
// }while(a2!=0)



let arr3 = [23,56,40,30,67,89,90,10,72,10,23,40,60];
let divBy10 = arr3.filter((num) => {
    return num%10==0;
})
console.log(divBy10);


let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squaredarr = arr4.map((num)=>{
    return num*num;
})
console.log(squaredarr);


let arr5 = [1,2,3,4,5];
let factorial = arr5.reduce((x1,x2) => {
    return x1 * x2;
})
console.log(factorial); // Output: 120 (1*2*3*4*5)