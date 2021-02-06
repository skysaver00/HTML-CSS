window.onload = sendApiRequest;

async function sendApiRequest() {
    let response = await fetch(`https://opentdb.com/api.php?amount=1&type=multiple`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    useApiData(data);
}

function useApiData(data) {
    document.querySelector("#category").innerHTML = `Category: ${data.results[0].category}`
    document.querySelector("#difficulty").innerHTML = `Difficulty: ${data.results[0].difficulty}`
    document.querySelector("#question").innerHTML = `Question: ${data.results[0].question}`
    

    var rand = Math.floor(Math.random() * 4) + 1;

    var correct = "#answer" + rand;
    console.log(correct);

    var incorrect = 0;
    for(var i = 1; i <= 4; i++) {
        if(i == rand) continue;
        document.querySelector("#answer"+i).innerHTML = 
    }
    document.querySelector("#answer1").innerHTML = data.results[0].correct_answer
    document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers[0]
    document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answers[1]
    document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answers[2]    
}

let correctButton = document.querySelector("#answer1")

correctButton.addEventListener("click", () => {
    alert("정답입니다! 와 짝짝짝짝짝 X 5")
    sendApiRequest()
})