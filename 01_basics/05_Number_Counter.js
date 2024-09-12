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