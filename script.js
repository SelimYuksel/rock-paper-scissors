const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    /* This returns a random number between 1 and 3 so 1,2,3 */
    if(randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else if(randomNumber === 3) {
        return "Scissor";
    }
}

// console.log(getComputerChoice());



