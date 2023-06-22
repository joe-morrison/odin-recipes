function getComputerChoice() {
    return "paper"
}

function playRound(playerSelection, computerSelection) {
 console.log(`${playerSelection} beats ${computerSelection}`)
 alert(`${playerSelection} beats ${computerSelection}`)
}

function playGame() {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    

}

const button = document.querySelector("button");
button.addEventListener("click", playGame);

   