// "use strict";
// alert(3 + 2)
// datatypes :- number, string, boolean, null (standalone datatype), undefined, symbol, object.
// typeof -> null, gives object. typeof -> undefined, gives undefined.
const PI = 3.14;
let radius;
let circumference;

document.getElementById("mybtn").onclick = function () {
    radius = document.getElementById("mytxt").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
// console.log(`The circumference of a circle with radius ${radius} is ${circumference} units`);
    document.getElementById("myh3").textContent = circumference;
};