
    /*
      Demo JavaScript
      Filename: demo.js
      Author:   khoo jing jie
      Date:     16/7/18
      HTML5 and CSS3 
    */


var hi = "Hello";
var num = 113;
num += 10;

console.log(num);
console.log("Hello, Welcome to javascript");
console.log("error here"+num);
console.log("line 3");
//call a function
f1();

//access divChange
var divChange = document.querySelector("#divChange");
// just for checking
console.log(divChange);
divChange.textContent = hi + num;

//create function
function f1() {
    console.log("Hello, Welcome to javascript");
    console.log("error here"+num);
    console.log("line 3");
}

// add event listener to my special link
var clickMe = document.querySelector(".clickMe");
console.log(clickMe);
clickMe.addEventListener("click",f1);