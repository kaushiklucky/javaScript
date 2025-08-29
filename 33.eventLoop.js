//Synchronous code runs step by step, one task at a time, meaning the next line won’t start until the current one finishes (like standing in a queue). In contrast, Asynchronous code allows tasks to run in the background without blocking the main program; once the task completes (like fetching data from a server or a timer), it notifies the program using callbacks, promises, or async/await so other code can keep running meanwhile.

//👉 In short: Synchronous = blocking, sequential; Asynchronous = non-blocking, parallel-friendly.

// Blocking code means execution stops and waits until the current task is fully finished before moving to the next one. It’s usually synchronous. If a task takes a long time (e.g., file read, network request), the program is “blocked” and can’t do anything else in the meantime.


// EVENT LOOP:

/*
Callback: A function passed to another function, to be executed later.
Browser (Web APIs): Handle things like timers, DOM events, AJAX in the background.
Callback Queue: Place where finished async tasks wait to run.
Event Loop: Bridge between queue and call stack → keeps pushing callbacks to execution when stack is free.
*/


// CODE 1
console.log('start');

setTimeout(function timeout() {
    console.log("Lucky Kaushik")
}, 5000);

console.log('end');

/*
🔎 Step-by-step explanation

Call Stack (main JS execution):
console.log('start') → runs immediately.
setTimeout(...) → browser timer is started, callback (timeout) is registered.
console.log('end') → runs immediately.

Browser APIs (Web APIs):
The browser handles the timer (5 sec) in the background.
JavaScript doesn’t wait → continues running other code.

Callback Queue:
After 5 sec, the callback function timeout is moved into the callback queue (waiting to run).

Event Loop:
The event loop keeps checking: “Is the call stack empty?”
Once the stack is empty (after start and end logs are done), it takes the callback from the queue and pushes it into the call stack.

Execution:

Finally, console.log("Lucky Kaushik") runs.
*/


// CODE 2
document.querySelector("button").addEventListener("click", function onClick() {
    console.log("You clicked the button!");
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("clicked the button!");
}, 5000);

console.log("Welcome to loupe!");
/*
Hi!
Welcome to loupe!
(clicked the button!  → after 5 sec)
(You clicked the button!  → whenever user clicks)
*/



//CODE 1 AND CODE 2 COMBINED RUN TIME LINE
/**
start
end
Hi!
Welcome to loupe!
(Lucky Kaushik → after 5 sec)
(clicked the button! → after Lucky Kaushik)
(You clicked the button! → whenever user clicks if its clicked before 'Lucky Kaushik' runs than it will excute before 5000 ms)

 */