
// async is used to define a function that returns a Promise, which can be resolved or rejected, like in an AJAX call. async function always returns a Promise. async solve problems of callback hell, and make the code easier to read and write.

// async function getData(){
//     setTimeout(function(){
//         console.log("I an inside set timeout block")
//     }, 3000)
// }
// getData();

// await is used to wait for a Promise to resolve or reject. It is used in async functions to ensure that the rest of the code runs only after the Promise is fulfilled or rejected.


//  FETCH API  - Fetch is a built-in JavaScript function that sends a request to a specified resource. It returns a Promise that resolves with the response to the request.

 async function getData() {

    // get request - async
    let response = fetch('https://fakestoreapi.com/products');
    // parse json - async
    console.log(response);
}
getData();
//scenario:
//prepare url / api endpoint -> sync
//await //fetch data - > network call -> async
//process data ->sync


async function getData2() {

    // get request - async
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    // parse json - async
    let data = await response.json();
    console.log( data );
}
getData2();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "Lucky Kaushik" }),
    headers: myHeaders,
  };

//apikey
async function getData3() {
    const response = await fetch(url, options);
    let data = await response.json();
    console.log("get data response: ", data);
}
getData3();

async function postData() {
    const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Lucky kaushik -> I am in love with someone.',
          userId: 5,
          /* other post data */
        })
      })
    let data = await response.json();
    console.log("post data response: ", data);
}

async function processData() {
    await postData();
    await getData();
}
processData();