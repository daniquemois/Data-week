var answers = document.querySelectorAll("form input[type=radio]");
var submit = document.querySelector("form .submit");
var achtergrond = document.querySelector(".test");

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
}

function submitAnswers() {
    if (score < 7){ 
		achtergrond.classList.add("winstmik");
	}
	else if (score > 7){ 
		achtergrond.classList.add("winstdanique");
	}
}

submit.addEventListener("click", checkAnswers);

