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
