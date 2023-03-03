const computerChoiseDisplay = document.getElementById("computer-choise")
const UserChoiseDisplay = document.getElementById("user-choise")
const ResultDisplay = document.getElementById("result")
const possibleChoises = document.querySelectorAll("button")
let UserChoise
possibleChoises.forEach(possibleChoise => possibleChoise.addEventListener("click", (e) => {
    UserChoise = e.target.id
    UserChoiseDisplay.innerHTML = UserChoise
    generateComputerChoise()
    getResult()
}));

function generateComputerChoise() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // possibleChoises.length or you can use  

    if (randomNumber === 1) {
        computerChoise = "rock"
    }

    if (randomNumber === 2) {
        computerChoise = "scissors"
    }

    if (randomNumber === 3) {
        computerChoise = "paper"
    }
    computerChoiseDisplay.innerHTML = computerChoise

}


function getResult() {
    if (computerChoise === UserChoise) {
        result = "it's a draw"
    }
    if (computerChoise === "rock" && UserChoise === "paper") {
        result = "you win!"
    }
    if (computerChoise === "rock" && UserChoise === "scissors") {
        result = "you lose!"
    }
    if (computerChoise === "paper" && UserChoise === "scissors") {
        result = "you win!"
    }
    if (computerChoise === "paper" && UserChoise === "rock") {
        result = "you lose!"
    }
    if (computerChoise === "scissors" && UserChoise === "rock") {
        result = "you lose!"
    }
    if (computerChoise === "scissors" && UserChoise === "paper") {
        result = "you lose!"
    }
ResultDisplay.innerHTML = result;
};
