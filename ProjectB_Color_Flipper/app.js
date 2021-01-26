const colors = ["green", "red", "yellow", "blue", "black"];

const btn = doucment.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    //get random number betweeon 0 - 3 colors[]

    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    doucment.body.style.backgroundColor = colors[randomNumber];

    color.textContent = color[randomNumber];
});

function getRandomNumber() {
    return Math.random();
}