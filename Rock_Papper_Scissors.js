let humanScore = 0;
let computerScore = 0;
let result = document.createElement("div");
let theWinner = document.createElement("div");
let anotherRound = document.createElement("div");
let score = document.createElement("div") 
function getComputerChoice(randomChoice){
        return randomChoice.at(Math.floor(Math.random()*3))
    }

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button .addEventListener("click", function playRound(){
        let computerSelection = getComputerChoice(["Rock", "Papper", "Scissors"]);
        theWinner.textContent = " " ;
        anotherRound.textContent = " "
        switch (button.id){
            case "Papper" :
                if (computerSelection == "Rock"){
                    ++ humanScore;
                    result.textContent = `YOU WIN! You: ${button.id} Vs Computer: ${computerSelection}`;
                    score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
                    break
                }
                else if(computerSelection == "Scissors"){
                    ++ computerScore;
                    result.textContent = `YOU LOSE! You: ${button.id} Vs Computer: ${computerSelection}`;
                    score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
                    break
                }
                else{
                    result.textContent = `DRAW  You: ${button.id} Computer: ${computerSelection}`;
                    score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
                    break
                }

            case "Scissors": 
                if (computerSelection == "Papper"){
                    ++ humanScore;
                    result.textContent = `YOU WIN  You: ${button.id} Vs Computer: ${computerSelection}`; 
                    score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
                    break
                }
                else if(computerSelection == "Rock"){
                    ++ computerScore;
                    result.textContent = `YOU LOSE! You: ${button.id} Vs Computer: ${computerSelection}`; 
                    score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
                    break
                }

                else{
                    result.textContent = `DRAW You: ${button.id} Vs Computer: ${computerSelection}`;
                    score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
                    break
                }


            case "Rock": 
                if (computerSelection == "Scissors"){
                    ++ humanScore;
                    result.textContent = `YOU WIN! You: ${button.id} Computer: ${computerSelection}`;
                    score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
                    break
                }
                else if (computerSelection == "Papper"){
                    ++ computerScore;
                    result.textContent = `YOU LOSE! You: ${button.id} Computer: ${computerSelection}`;
                    score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
                    break
                    }
                else{
                    result.textContent = `DRAW  You: ${button.id} Computer: ${computerSelection}`;
                    score.textContent = `Score: You: ${humanScore} Computer: ${computerScore}`;
                    break
                }
            }
        if (humanScore === 5){
            theWinner.textContent = "You Win";
            theWinner.style.cssText = "color : blue";
            anotherRound.textContent = "Wanna Play Again ? "
            humanScore = 0;
            computerScore = 0;
        }
        else if (computerScore === 5){
            theWinner.textContent = "Game Over";
            theWinner.style.cssText = "color : red";
            anotherRound.textContent = "Wanna Play Again ? "
            humanScore = 0;
            computerScore = 0;
        }
const container = document.querySelector("#container");
container.appendChild(result);
container.appendChild(score);
container.appendChild(theWinner);
container.appendChild(anotherRound);
    })
});