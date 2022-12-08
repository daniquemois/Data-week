// const { quantize } = require("d3");

var answers = document.querySelectorAll("form input[type=radio]");
var submit = document.querySelector("form .submit");
var achtergrond = document.querySelector(".test");
var startbutton = document.querySelector(".starttest")
var test = document.querySelector(".quiz")
var intro = document.querySelector(".intro section")
var start = document.querySelector(".start")

var score = 0;

function checkAnswers() {
    score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            var value = parseInt(answers[i].value);
            score = score + value;
        }
        else {
            // Niks doen
        }
    }
    submitAnswers(score);
    console.log(score)
}
function startFunctie(){
    intro.classList.remove("hide");
}
start.addEventListener("click", startFunctie)

function submitAnswers() {
    if (score < 7){ 
        achtergrond.classList.remove("backgroundtest");
		achtergrond.classList.add("winstmik");
	}
	else if (score > 7){ 
        achtergrond.classList.remove("backgroundtest");
		achtergrond.classList.add("winstdanique");
	}
}

submit.addEventListener("click", checkAnswers);

function starttest(){
    test.classList.remove("hide");
    intro.classList.add("hide")
}
startbutton.addEventListener("click", starttest)

