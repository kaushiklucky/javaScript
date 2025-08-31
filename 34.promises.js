// The promises object reprresents the eventual compilation(or failure) of an asynchronous operation and its resulting value 

// promises is in one of these states:
// 1. Pending: The initial state, the promise is not fulfilled or rejected yet.
// 2. Fulfilled: The operation completed successfully, the promise holds the resolved value.
// 3. Rejected: The operation failed, the promise holds the rejected reason.

// Syntax:
// new Promise((resolve, reject) => {
    // Your asynchronous code goes here
    // When the operation is completed, call either resolve(value) or reject(reason)
// });

let firstPromise = new Promise((resolve, reject) => {
    console.log("Kaushik");
    resolve(1001);
});

let sPromise = new Promise((resolve, reject) => {
    console.log("Lucky");
    reject(new Error("Internal Server Error"));
});


let tpromises = new Promise((resolve, reject) => {
    setTimeout(function sayMyName() {
        console.log("My name is Lucy");
    }, 1000); 
});


tpromises = new Promise((resolve, reject) => {
    setTimeout(function sayMyName() {
        console.log("My name is Lucky");
    }, 2000);
    return 1;  // in pending state
});

tpromises = new Promise((resolve, reject) => {
    setTimeout(function sayMyName() {
        console.log("My name is Kaushik");
    }, 3000);
    resolve(1);  // in fulfilled state
});


// then and catch
// then() is used to handle the fulfilled promise
// catch() is used to handle the rejected promise

let promise1 = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve("Promise fulfilled");
    } else {
        reject("Promise rejected");
    }
});

promise1.then ((message) => {
    console.log("Then ka message is " + message);
}).catch((error) => {
    console.log("Error: "+ error);
});



let promise2 = new Promise((resolve, reject) => {
    let success = false;
    if(success) {
        resolve("Promise fulfilled");
    } else {
        reject("Promise rejected");
    }
});
/**Promise {<fulfilled>: 'Promise fulfilled'} */
promise2.then ((message) => {
    console.log("Then ka message is " + message);
}).catch((error) => {
    console.log("Error: "+ error);
});
/**Promise {<rejected>: 'Promise rejected'} */


// Multiple .then()
let prom = Promise.resolve(10);
prom.then(result => {
    console.log("Step 1:", result); // 10
    return result * 2;
}).then(result => {
    console.log("Step 2:", result); // 20
    return result + 5;
}).then(result => {
    console.log("Step 3:", result); // 25
});

// Multiple .catch()
let p = Promise.reject("Error happened!");
p.catch(err => {
    console.log("Caught in first catch:", err);
    throw "New error";  // rethrowing
}).catch(err => {
    console.log("Caught in second catch:", err);
});


// Combining .then() and .catch()
let p1 = Promise.resolve(5);
p1.then(val => {
    console.log("Step 1:", val); // 5
    throw "Something broke!";
}).then(val => {
    console.log("Step 2:", val); // skipped because of error
}).catch(err => {
    console.log("Handled error:", err);
    return 100; // recover
}).then(val => {
    console.log("Step 3 after recovery:", val); // 100
});



let promise3 = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve("Promise fulfilled");
    } else {
        reject("Promise rejected");
    }
});
promise3.then((message) => {
    console.log("first msg " + message);
    return 20;
}).then((message) => {
    console.log("second msg " + message);
    return 30;
}).then((message) => {
    console.log("third msg " + message);
}).catch((error) => {
    console.log("Error: "+ error);

}).finally((message) => {
    console.log("Mai to finally hu chalunga pakka");
});

// Promise chaining
let p4 = new Promise((resolve, reject) => {
    resolve(10);
});

p4.then(result => {
    console.log("Step 1:", result); // 10
    return result * 2;
}).then(result => {
    console.log("Step 2:", result); // 20
    return result + 5;
}).then(result => {
    console.log("Step 3:", result); // 25
}).catch(err => {
    console.log("Error:", err);
}).finally(() => {
    console.log("Finally block");
});



// Promise.all()
let p5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "first");
})
let p6 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "second");
})
let p9 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "fifth");
})
Promise.all([p5, p6, p9]).then((values) => {
    console.log(values);
})
.catch((errors) => {
    console.error(errors);
});


let p10 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "second");
})
let p11 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "fifth");
})
let p12 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "third");
})
let p13 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "forth");
})

Promise.all([p10, p11, p12, p13]).then((values) => {
    console.log(values);
})
.catch((errors) => {
    console.error(errors);
});