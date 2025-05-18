//global scope >> accesible everywhere

const age = 22;
console.log(age);

if(true){
    console.log(age);
}

for(let i=0; i<2; i++){
    console.log(age);
}

function sayHello(){
    console.log("hi ", age);
}
sayHello()

function sayHello2(){
    var name = "Earth";
    console.log("Hello ", name);
}
sayHello2()

// console.log(name); //ReferenceError: name is not defined

{
    var height = 164;
}
console.log(height);

{
    let height2 = 180;
}
// console.log(height2); // ReferenceError: height2 is not defined

{
    const height3 = 200;
}
// console.log(height3); // ReferenceError: height3 is not defined


// The Temporal Dead Zone (TDZ) in JavaScript refers to the period of time during which a let, const, or class variable is declared but not yet initialized. Accessing the variable during this period results in a ReferenceError

// console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5; // Declaration and initialization
console.log(x); // 5


function example() {
  // console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 10;
  console.log(a); // 10
}
example();

// console.log(marks); // ReferenceError: Cannot access 'marks' before initialization
console.log("Lucky");
console.log("Kaushik");
const marks = 100;
console.log(marks);
