let user = window.prompt("Enter your username :");
user = user.trim();
let letter = user.charAt(0);
letter = letter.toUpperCase();
let extrachars = user.slice(1);
extrachars = extrachars.toLowerCase();
username = letter + extrachars;
console.log(user);