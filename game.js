let round = 0;
let humanScore = 0;
let computerScore = 0;
let replay = document.querySelector("#replay");
let gameOptions = document.querySelectorAll(".options");
let gameStatus = document.querySelector("#gameStatus");

replay.addEventListener('click', () => {
    round = 0;
    humanScore = 0;
    computerScore = 0;
    gameStatus.textContent = "Keep playing!";
});

gameOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        let target = e.target;
        switch (target.id) {
            case 'rock':
                playRound('rock', getComputerChoice());
                break;
            case 'paper':
                playRound('paper', getComputerChoice());
                break;
            case 'scissors':
                playRound('scissors', getComputerChoice());
                break;
        }
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
    if (humanScore === 5 || computerScore === 5) {
        gameStatus.textContent = `Game Over! You ${humanScore} - Computer ${computerScore}`;
        return;
    }

    if (humanChoice === computerChoice) {
        round++;
        gameStatus.textContent = `round: ${round} - It's a tie!`;
        return;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
               humanChoice === 'paper' && computerChoice === 'rock' ||
               humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        round++;
        gameStatus.textContent = `round: ${round} - You win!`;
        return;
    } else {
        computerScore++;
        round++;
        gameStatus.textContent = `round: ${round} - You lose!`;
    }
}