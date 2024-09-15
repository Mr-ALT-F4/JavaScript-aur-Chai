const p1 = document.getElementById("charizard");
const p2 = document.getElementById("squirtle");
const p3 = document.getElementById("bulbasaur");
const p4 = document.getElementById("pikachu");
let btn = document.getElementById("mybtn");
let outp = document.getElementById("mypara");
btn.onclick = function () {
    if(p1.checked){
        outp.textContent = `Congratulations! You have chosen Fire type Charizard.`
    }
    else if(p2.checked){
        outp.textContent = `Congratulations! You have chosen Water type Squirtle.`
    }
    else if(p3.checked){
        outp.textContent = `Congratulations! You have chosen Grass type Bulbasaur.`
    }
    else if(p4.checked){
        outp.textContent = `Congratulations! You have chosen Electric type Pikachu.`
    }
    else{
        outp.textContent = "Don't you want to start your journey ?"
    }
}