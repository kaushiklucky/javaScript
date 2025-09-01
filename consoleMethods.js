// console object methods
console.log(console); // Displays the console object and its methods

console.log("Hello, World!"); // Logs a message to the console

console.error("This is an error message!"); // Logs an error message to the console

console.warn("This is a warning message!"); // Logs a warning message to the console

console.assert(5>55); // Asserts a condition; if false, logs an error message
console.assert(5<55); // Asserts a condition; if true, does nothing
//console.clear(); // Clears the console output

console.table([{name: "Alice", age: 25}, {name: "Bob", age: 30}]); // Displays data in a table format

obj = {
    name: "John",
    age: 30,
    city: "New York"
};
console.table(obj); // Displays the object in a table format

console.dir(obj); // Displays the object with its properties and methods

console.info("This is an info message!"); // Logs an informational message

console.group("Group Title"); // Starts a new group in the console
console.log("This is inside the group.");
console.log("Another message inside the group.");
console.groupEnd(); // Ends the group in the console

console.time("t"); // Starts a timer
console.timeEnd("t"); // Ends the timer and logs the elapsed time
