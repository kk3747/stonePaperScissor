let yourscore = 0;
let compscore = 0;
let userScore = document.querySelector("#user-score");
let computerScore = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked" , userChoice);
        // console.log(choice);
        playGame(userChoice);
    })
})
const drawGame = () => {
    console.log("Game was drawn");
    msg.innerText = "Game drawn";
    msg.style.backgroundColor = "#081b31";
}
const winner = (userWin,userChoice,compChoice,yourscore,compscore) => {
    if(userWin) 
    {
        console.log("winner is user");
        yourscore++;
        userScore.innerText++;
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
    }
    else
    {
        console.log("winner is computer");
        compscore++;
        computerScore.innerText++;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
}
const genCompChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randChoice = Math.floor(Math.random() * 3);
    return options[randChoice];
}
const decide = (userChoice ,  compChoice) => {
    let userWin = true;
    if(userChoice === "rock")
    {
        userWin = compChoice === "scissors" ? true : false;
    }
    if(userChoice === "scissors")
    {
        userWin = compChoice === "paper" ? true : false;
    }
    if(userChoice === "paper")
    {
        userWin = compChoice === "rock" ? true : false;
    }
    return userWin;
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        winner(decide(userChoice , compChoice),userChoice,  compChoice);
    }
}