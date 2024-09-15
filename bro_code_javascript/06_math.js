// Math is a built-in object that provides a collection of properties and methods.
// console.log(Math.PI);
// console.log(Math.E);
// let u = -69;
// let v = 45;
// let w = 81;
// let x = 3.99;
// let y = 2;
// let z = Math.round(x);
// let z = Math.floor(x);
// let z = Math.ceil(x);
// let z = Math.trunc(x);
// let z = Math.pow(x, y);
// let z = Math.sqrt(w);
// let z = Math.log(x);
// let z = Math.sin(v);
// let z = Math.cos(v);
// let z = Math.tan(v);
// let z = Math.abs(u);
// let z = Math.max(u, v, w);
// let z = Math.min(u, v, w);
// let z = Math.random();
// let z = Math.floor(Math.random() * 10);
// let z = Math.floor(Math.random() * (w - u + 1)) + u;
// let z = Math.floor(Math.random() * x) + 1; gives number between 1 and x.
// let z = Math.sign(x);
// let z = Math.exp(x);
// let z = Math.log10(x);
// let z = Math.log2(x);
// let z = Math.hypot(u, v, w);

// let diceroll = Math.floor(Math.random() * 6);
// if (diceroll == 0) {
//     console.log(1);
// } else {
//     console.log(diceroll);
// }
// Still, this gives answer between 1 to 5 (inclusive) only because
// Math.random() gives a number b/w 0 and 1 (0, 1 exclusive). We need to do + 1 to get all till 6.
// let diceroll = Math.floor(Math.random() * 6) + 1;
// console.log(diceroll);

let x = 50;
let y = 100;
// Not efficient method (as more towards the 100 side (as many numbers are >100)) :-
// let z = Math.floor(Math.random() * y) + x;
// if(z > y){
//     console.log(y);
// }
// else{
//     console.log(z);
// }
// More efficient method :-
// document.getElementById("rnd").onclick = function () {
//     let x = 1;
//     let y = 100;
//     let z = Math.floor(Math.random() * (y - x + 1)) + x;
//     let p = document.getElementById("inpt");
//     p.value = z;
// };
let p1 = document.getElementById("inpt1");
let p2 = document.getElementById("inpt2");
let p3 = document.getElementById("inpt3");
document.getElementById("rnd").onclick = function () {
    let x = 1;
    let y = 100;
    let z = Math.floor(Math.random() * (y - x)) + x;
    p1.value = z;
    z = Math.floor(Math.random() * (y - x)) + x;
    p2.value = z;
    z = Math.floor(Math.random() * (y - x)) + x;
    p3.value = z;
};