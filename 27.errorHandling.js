//compile time error
// console.log(1;  // syntax error

// runtime error 
// console.log(x); // reference error

try{
    console.log("try block start here");
    console.log(x);
    console.log("try block ends here");

    // code
    // code
}
catch(error){
    //define krte h, error k sath aap kya karna chahte hai
    // retry logic
    // fallback mechanism
    // logging
    // custom error

    console.log("I AM INSIDE CATCH BLOCK");
    console.log("Your error is here: ", error);
}
finally{
    console.log("I will run everytime, as I am finally block")
}

// lets create a custom error
try{
    // reference error
    console.log(x);
}
catch(e){
    throw new Error("Bhai phle declare karo, fir print karna");
}

let errorCode = 100;
if(errorCode == 100){
    throw new Error("invalid JSON");
}