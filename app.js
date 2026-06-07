let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreParah = document.querySelector("#userScore");
const compScoreParah = document.querySelector("#compScore");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
};

const drawGame = () => {
    
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31"
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScoreParah.innerText = userScore;
        msg.innerText = `You won!...,congrats ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }  else{
        compScore++;
        compScoreParah.innerText = compScore;
        msg.innerText = `you loseee ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "brown";
    };
};
const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice =",compChoice);

    if(userChoice == compChoice) {
        drawGame();
    }else {
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false: true;
        } else{
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    };
}; 
choices.forEach((choice) =>{
    choice.addEventListener("click" , () => {
        const choiceId = choice.getAttribute("id");
        console.log("choice was clicked & its", choiceId);
        playGame(choiceId);   // <-- call the function

    });
});