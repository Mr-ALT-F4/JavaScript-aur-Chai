console.log(1 + 3);
console.log("1" + 3);
console.log(1 + "3");
console.log("1" + "3");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
console.log(1 + "2" + 3);
console.log(1 + (2 + "3"));
// Javascript is a left to right language. Also, brackets ka use is important (understood by above examples).
console.log(+true);
console.log(+"");

let n1, n2, n3 = 2 + 2;
let b1, b2, b3;
b1 = b2 = b3 = 2 + 2;
console.log([n1, n2, n3, b1, b2, b3]);

console.log(b1++);
console.log(++b1);