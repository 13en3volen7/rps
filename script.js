function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    };
}

function playGame() {
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
    const humanScore = document.querySelector(".human > .score");
    const computerScore = document.querySelector(".computer > .score");
    choices.addEventListener("click", (e) => {
        const target = e.target;
        const humanSelection = target.textContent.toLowerCase();
        const computerSelection = getComputerChoice();
        const currentRoundWinner = getRoundWinner(humanSelection, computerSelection);
        switch (currentRoundWinner) {
            case "human":
                +humanScore.textContent++;
                break;

            case "computer":
                +computerScore.textContent++;
                break;
        }
    });
}

playGame();