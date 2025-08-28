let fpara = document.getElementById("fpara");
fpara.textContent = "This is changed by JavaScript";

function changeText() {
    let spara = document.getElementById("spara");
    spara.textContent = "This is changed by JavaScript using a function --> click event is triggered";
}

let spara = document.getElementById("spara");

spara.addEventListener("click", changeText); // addEventListener is used to add event listeners to HTML elements

// spara.removeEventListener("click", changeText); // removeEventListener is used to remove event listeners from HTML elements


/*
event flow in the DOM

1. Capturing Phase (a.k.a. trickling phase): The event starts from the top/root element (document) and moves down through parent elements until it reaches the target element.
Think of it like the event "travels downward."
Example path:
document → <html> → <body> → <div> → <button>

2. Target Phase: The event reaches the actual element where the interaction happened.
Example: You clicked a <button>, so now the event is at the button.

3. Bubbling Phase : After the target is handled, the event bubbles back up from the target element to its ancestors.
Example path:
<button> → <div> → <body> → <html> → document
*/

// Attach event listener in CAPTURING phase
// spara.addEventListener("click", changeText, true); // true = capturing

// element.addEventListener("click", handler, false); // false = bubbling



function changeText2(event){
    console.log("Text changed by event listener");
    let tpara = document.getElementById("tpara");
    tpara.textContent = "This is changed by JavaScript using event listener --> click event is triggered";
}
let tpara = document.getElementById("tpara");
tpara.addEventListener("click", changeText2); // add event listener in target phase

function changeText3(event){
    console.log("Text changed by event listener");
    let fourpara = document.getElementById("4para");
    fourpara.textContent = "This is changed by JavaScript using event listener --> mouseover event is triggered";
}
let fourpara = document.getElementById("4para");
fourpara.addEventListener("mouseover", changeText3); // add event listener in target phase
// fourpara.addEventListener("mouseout", changeText3);

// Jab bhi koi event trigger hota hai (jaise click, key press, mouse move), browser uske saath ek event object banata hai.
// Ye event object automatically aapke listener function ko pass kar diya jata hai.
// Isliye listener function ke andar aapko event ke details mil jaate hain (kis element par hua, konsa key press hua, mouse kaha tha, etc.).


let anchorElement = document.getElementById("fanchor");

anchorElement.addEventListener("click", function(event){
    event.preventDefault(); // prevents the default action of the event (e.g., following the link));
    anchorElement.textContent = "clicked done bhai, preventing default behavior"
});


// let paras = document.querySelectorAll("#para1, #para2, #para3, #para4");

// let i = 1;
// function alertParas(event){
//     alert("you have clicked on para" + " " + i++  + " " + event.target.textContent);
// }

// method 1
// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener("click", alertParas);
// }

//method 2
// let myDiv = document.getElementById("wrapper");
// document.addEventListener("click", alertParas);



function alertParas2(event){
    if(event.target.nodeName === "SPAN"){
        alert("you have clicked on para" + " " + event.target.textContent);
    }
}
let myDiv2 = document.getElementById("wrapper2");
document.addEventListener("click", alertParas2);