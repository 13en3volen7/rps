function getComputerChoice() {
    switch (Math.floor(Math.random() * 10) % 3) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    };
}

function getHumanChoice() {
    return prompt("Enter your choice:").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore++;
                console.log("You lose! Paper beats Rock");
            } else if (computerChoice === "scissor") {
                humanScore++;
                console.log("You win! Rock beats Scissor");
            } else {
                console.log("Tie! Both chose Rock");
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissor") {
                computerScore++;
                console.log("You lose! Scissor beats Paper");
            } else if (computerChoice === "rock") {
                humanScore++;
                console.log("You win! Paper beats Rock");
            } else {
                console.log("Tie! Both chose Paper");
            }
        } else if (humanChoice === "scissor") {
            if (computerChoice === "rock") {
                computerScore++;
                console.log("You lose! Rock beats Scissor");
            } else if (computerChoice === "paper") {
                humanScore++;
                console.log("You win! Scissor beats Paper");
            } else {
                console.log("Tie! Both chose Paper");
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === computerScore) {
        console.log(`The game has ended in a tie!`);
    } else {
        console.log(`The game has ended! The winner is ${(humanScore > computerScore) ? "human" : "computer"}!`);
    }
}

playGame();