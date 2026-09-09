function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    };
}

function toTitle(string) {
    return string[0].toUpperCase() + string.slice(1);
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

    function updateRoundInformation(roundInfo, humanChoice, computerChoice, currentRoundWinner, endGame) {
        roundInfo.textContent = `
        Human chose ${toTitle(humanChoice)} while Computer chose ${toTitle(computerChoice)}. 
        `;
        
        if (!endGame) {
            if (currentRoundWinner === "none") {
                roundInfo.textContent += "It's a tie, so no one won this round.";
            } else {
                roundInfo.textContent += `${toTitle(currentRoundWinner)} won this round!`;
            }
        } else {
            roundInfo.textContent +=  `
            The game has ended and the winner is ${toTitle(currentRoundWinner)}!`;
        }
    }

    function resetGame(humanScore, computerScore, roundInfo) {
        humanScore.textContent = 0;
        computerScore.textContent = 0;
        roundInfo.textContent = "";
    }

    const choices = document.querySelector(".choices");
    const humanScore = document.querySelector(".human > .score");
    const computerScore = document.querySelector(".computer > .score");
    const roundInfo = document.querySelector(".round-info");
    choices.addEventListener("click", (e) => {
        const target = e.target;
        const humanSelection = target.textContent.toLowerCase();
        if (humanSelection === "reset") {
            resetGame(humanScore, computerScore, roundInfo);
            return;
        }
        if (+humanScore.textContent === 5 || +computerScore.textContent === 5) {
            return;
        }
        const computerSelection = getComputerChoice();
        const currentRoundWinner = getRoundWinner(humanSelection, computerSelection);
        switch (currentRoundWinner) {
            case "human":
                +humanScore.textContent++;
                updateRoundInformation(roundInfo, humanSelection, computerSelection, currentRoundWinner, +humanScore.textContent === 5);
                break;

            case "computer":
                +computerScore.textContent++;
                updateRoundInformation(roundInfo, humanSelection, computerSelection, currentRoundWinner, +computerScore.textContent === 5);
                break;

            default:
                updateRoundInformation(roundInfo, humanSelection, computerSelection, currentRoundWinner, false);
                break;
        }
    });
}

playGame();