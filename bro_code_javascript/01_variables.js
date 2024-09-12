const accID = 1445
let accEmail = "sample@gmail.com"
var accPass = "12345"
accCity = "Jaipur"
// accCity = "Jaipur" -- bad practice.
// var -- Prefer not to use var because of issue in block scope and functional scope.
console.log(accID);
console.table([accID, accEmail, accPass, accCity]);