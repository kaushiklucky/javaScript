// if else condition 

let age = 17;

if(age>=18){
    console.log("User can play ddlc");
}else {
    console.log("User can play mario");
}

let num = 13;

if(num%2===0){
    console.log("even");
}else{
    console.log("odd");
}

// falsy values 


// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

let firstName= 0;

if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty");
}


// ternary operator 

age = 4;
let drink;

if(age>=5){
    drink = "coffee";
}else{
    drink = "milk";
}

console.log(drink);

// ternary operator / conditional operator 

age = 3;
drink = age >= 5 ? "coffee" : "milk";
console.log(drink);


let a = "Hey, what's your age?";
a = Number.parseInt(a); // converting string to number
console.log(a);

if (a > 0) {
    console.log("This is a valid age");
} else {
    console.log("This is not a valid age");
}
