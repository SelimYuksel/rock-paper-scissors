const buttons = document.querySelectorAll(".rps-buttons");
const results = document.querySelector("#results");

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    /* This returns a random number between 1 and 3 so 1,2,3 */
    if(randomNumber === 1) {
        return "rock";
        // I'm gonna make it case-insensitive here
    } else if (randomNumber === 2) {
        return "paper";
    } else if(randomNumber === 3) {
        return "scissors";
    }
}

// console.log(getComputerChoice());

// const getHumanChoice = () => {
//     const userInput = prompt("Rock, Paper, Scissors?");
//     // Ask user for an input
//     const modifiedInput = userInput.toLowerCase();
//     // Convert user input to lowercase 
//     if(modifiedInput === "") {
//         alert("Please enter something.");
//         // Check if user input is empty
//     } else if(modifiedInput !== "rock" && modifiedInput !== "paper" && modifiedInput !== "scissors") {
//         alert("Please enter a valid response.");
//         // Check if user input is valid ie "Rock or paper or scissors"
//     }
//     else {
//         return modifiedInput;
//         // return the input
//     }
// }

const restartGame = () => {
    results.textContent = "";
    humanScore = 0;
    computerScore = 0;
    buttons.forEach(btn => {
        btn.disabled = false;
    })
}

const winningConditions = {
    rock: 'scissors',
    paper: 'rock', 
    scissors: 'paper'
};

const para = document.createElement("p");
para.classList.add("result-para");
results.appendChild(para);
    
const scorePara = document.createElement("p");
scorePara.classList.add("score-para");
results.appendChild(scorePara);

const playRound = (humanChoice, computerChoice) => {
    computerChoice = getComputerChoice();

    if(winningConditions[humanChoice] === computerChoice) {
        alert(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if(winningConditions[computerChoice] === humanChoice) {
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else {
        alert("It's a tie.");
    }
    
    if(humanScore === 5 || computerScore === 5) {
        para.textContent = `Your score ${humanScore} : Computer score ${computerScore}`;
        const restartBtn = document.createElement("button");
        restartBtn.classList.add("restart-btn");
        restartBtn.textContent = "Restart";
        results.appendChild(restartBtn);
        buttons.forEach(button => {
            button.disabled = true;
        })
        restartBtn.addEventListener("click", restartGame);
    }

    if(humanScore === 5) {
        scorePara.textContent = "You win :)";
    }
    if(computerScore === 5) {
        scorePara.textContent = "You lose :(";
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice);
    })
});








// console.log(getHumanChoice());

