let userScore= 0;
let compScore= 0;
const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice = () => {                  //modular programming(using functions to do each small work)
    const options = ["rock", "paper", "scissors"];
    // Math.random(); between 0 and 1
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame =() => {
    msg.innerText= "Game was Draw, play again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner= (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText= `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText= `You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.backgroundColor = "red";
    }
}

const playGame= (userChoice) => {              
    const compChoice= genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // comp choice ~ scissors/paper, it cant be rock here, since if it was rock it would have been drawn and we would have called drawGame() in above if condition.
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // comp choice ~ rock/scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            // comp choice ~ rock/paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})