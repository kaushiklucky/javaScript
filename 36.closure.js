// A closure is formed when a function “remembers” the variables from its outer scope, even after that outer function has finished running.
// A closure lets a function remember and use variables from the place where it was created, even if called somewhere else.

function init() {
    let name = "Lucky";
    function displayName() {
        console.log(name); // use variable declared in the parent fuction
    }
    displayName();
}
init();

function outerFunction() {
    let name = "Kaushik";

    function innerFunction() {
        console.log(name);
    }

    return innerFunction;
}
let inner = outerFunction();

inner();



function outer() {
  let count = 0;   // variable in outer scope

  function inner() {
    count++;
    return count;
  }

  return inner;
}

const counter = outer(); 

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


/*
🏃 Step-by-step Dry Run
Step 1: Function Declaration Phase
outerFunction is stored in memory.
Nothing is executed yet.

Step 2: Call outerFunction()
A new Execution Context for outerFunction is created.
Variable name = "Kaushik" stored in its scope.
innerFunction is created and has a reference to outerFunction’s scope (this is closure!).
outerFunction returns innerFunction.

📌 Now inner points to the returned innerFunction.
But innerFunction still “remembers” variable name because of closure

Step 3: Execute inner()
A new Execution Context for innerFunction is created.
It looks for name:
Not inside innerFunction.
Goes to parent scope (outerFunction).
Finds name = "Kaushik".

Prints:
Kaushik

🗂️ Memory Diagram (Simplified)
Global Scope
-------------
outerFunction  -> fn()
inner          -> fn innerFunction (closure with { name: "Kaushik" })


Heap (Closure Environment)
---------------------------
name = "Kaushik"


✅ So the output is:
Kaushik
*/