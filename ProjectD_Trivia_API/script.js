window.onload = sendApiRequest;

async function sendApiRequest() {
    let response = await fetch(`https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    useApiData(data);
}

var rand;
let correctButton;
let wrongButton;

function useApiData(data) {
    document.querySelector("#category").innerHTML = `Category: ${data.results[0].category}`
    document.querySelector("#difficulty").innerHTML = `Difficulty: ${data.results[0].difficulty}`
    document.querySelector("#question").innerHTML = `Question: ${data.results[0].question}`
    

    rand = Math.floor(Math.random() * 4) + 1;

    var correct = "#answer" + rand;
    console.log(correct);

    var incorrect = 0;
    for(var i = 1; i <= 4; i++) {
        if(i == rand) continue;
        document.querySelector("#answer"+i).innerHTML = data.results[0].incorrect_answers[incorrect];
        incorrect++;
    }
    document.querySelector(correct).innerHTML = data.results[0].correct_answer;
    
    correctButton = document.getElementsByClassName("dogo");

    for(var i = 0; i < 4; i++) {
        if(i + 1 === rand) {
            correctButton[i].addEventListener("click", Yes);
        }
        else {
            correctButton[i].addEventListener("click", No);
        }
    }
}

function Yes() {
    alert("정답입니다!")
    location.reload();
}

function No() {
    alert("틀렸습니다.");
    location.reload();
}