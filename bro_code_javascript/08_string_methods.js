let user = `Samyak Pandey`;
// user.charAt(i) gives ith character in string.
user.charAt(3); // kuch nai dikhega :) . Log to karo.
console.log(user.charAt(6));

// user.slice(start, end) gives substring from start to end-1.
let newuser = user.slice(3, 6); // "yak"
console.log(newuser);


const email = "samyak@gmail.com"
let mailname = email.slice(0, email.indexOf("@"));
let extension1 = email.slice(email.indexOf("@") + 1, email.length);
let extension2 = email.slice(email.indexOf("@")); // By default pura last tak dega.
console.log(mailname);
console.log(extension);


// user.length gives length of string.
console.log(user.length); // 10

// user.indexOf(searchString) gives index of first occurrence of searchString.
user.indexOf("am"); // 4
console.log(user.indexOf("a"));

// user.lastIndexOf(searchString) gives index of last occurrence of searchString.
user.lastIndexOf("am"); // 10

// user.toUpperCase() gives string in uppercase.
console.log(user.toUpperCase()); // SAMYAK PANDEY

// user.toLowerCase() gives string in lowercase.
console.log(user.toLowerCase()); // samyak pandey

// user.replace(oldString, newString) replaces oldString with newString in string.
console.log(user.replace("am", "e")); // Samyak Pandeye

// user.split(separator) gives array of strings split by separator.
console.log(user.split(" ")); // ["Samyak", "Pandey"]

// user.concat(string1, string2, ...) gives concatenated string.
console.log(user.concat(" ", "Patel")); // Samyak Pandey Patel

// user.trim() gives string with leading and trailing whitespaces removed.
console.log("   Samyak Pandey   ".trim()); // "Samyak Pandey"

// user.startsWith(searchString) gives true if string starts with searchString.
console.log(user.startsWith("Sam")); // true

// user.endsWith(searchString) gives true if string ends with searchString.
console.log(user.endsWith("Pandey")); // true

// Bohot saare hain. See internet and learn as much as you can.