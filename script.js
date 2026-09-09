function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    };
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getRoundWinner(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            switch (computerChoice) {
                case "paper": return "computer";
                case "scissor": return "human";
                case "rock": return "none";
            }
        } else if (humanChoice === "paper") {
            switch (computerChoice) {
                case "scissor": return "computer";
                case "rock": return "human";
                case "paper": return "none";
            }
        } else {
            switch (computerChoice) {
                case "rock": return "computer";
                case "paper": return "human";
                case "scissor": return "none";
            }
        }
    }

    const choices = document.querySelector(".choices");
    choices.addEventListener("click", (e) => {
        const target = e.target;
        const humanSelection = target.textContent.toLowerCase();
        const computerSelection = getComputerChoice();
        const currentRoundWinner = getRoundWinner(humanSelection, computerSelection);
    });

    if (humanScore === computerScore) {
        console.log(`The game has ended in a tie!`);
    } else {
        console.log(`The game has ended! The winner is ${(humanScore > computerScore) ? "human" : "computer"}!`);
    }
}

playGame();