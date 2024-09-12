let a = 33;
let b = 44;
let sum1 = a + b;
let sum2 = String(a + b);
let sum3 = String(a) + String(b);
console.log(a);
console.log(b);
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(typeof sum1);  //pehla tareeka
console.log(typeof(sum2)); //dusra tareeka
// 33 -> "33" by String
// "33abc" -> NaN by Number
// "33" -> 33 by Number
// true -> 1 by Number & 1 -> true, 0 -> false by Boolean
let v; // v = 0, v = ""-> also give false
v = Boolean(v);
console.log(v);
console.log(typeof v);