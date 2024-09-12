let resetval = 0;

document.getElementById("myinc").onclick = function () {
    resetval++;
    document.getElementById("myh1").textContent = resetval;
};

document.getElementById("mydec").onclick = function () {
    resetval--;
    document.getElementById("myh1").textContent = resetval;
};

document.getElementById("myrst").onclick = function () {
    resetval = 0;
    document.getElementById("myh1").textContent = resetval;
};

// const decbtn = document.getElementById("mydec");
// const incbtn = document.getElementById("myinc");
// const rstbtn = document.getElementById("myrst");
// const labelval = document.getElementById("mylabel");
// let count = 0;

// decbtn.addEventListener("click", function () {
//     count--;
//     labelval.textContent = count;
// });

// incbtn.onclick = function () {
//     count++;
//     labelval.textContent = count;
// };

// rstbtn.addEventListener("click", function () {
//     count = 0;
//     labelval.textContent = count;
// });