// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'
import '../scripts/quiz.js'
import "../scripts/music.js"

var startbutton = document.querySelector(".startbutton")
var testVak = document.querySelector(".quiz")

function startFunctie(){
    window.scroll(0, 800)
    testVak.classList.remove("hide")
}
startbutton.addEventListener("click", startFunctie)
