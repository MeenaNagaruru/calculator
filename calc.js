"use strict";
const input = document.getElementById("input");
const operators = document.querySelectorAll(".operators div");
const numbers = document.querySelectorAll(".numcss div");
const equal = document.querySelector(".equal");

let string = "";

numbers.forEach((Element) => {
  Element.addEventListener("click", function (e) {
    if (e.target.innerText == "=") {
      string = String(eval(string));
      input.innerHTML = string;
    } else if (e.target.innerText == "C") {
      string = " ";
      input.innerHTML = string;
    } else {
      string = string + e.target.innerText;
      input.innerHTML = string;
    }
  });
});
