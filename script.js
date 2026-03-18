function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    //Math.floor 向下取整
    //Math.random * choices.length 返回 0-2.999...之间的数
    return choices[Math.floor(Math.random() * choices.length)];
 }


function getHumanChoice(){

    return prompt("input rock or paper or scissors","rock");
}




function playRound(humanChoice, computerChoice) {

    if(!humanChoice){
        console.log("You cancelled the input!")
        return "Invalid input";
    }

    humanChoice = humanChoice.toLowerCase();

    if (!["paper","scissors","rock"].includes(humanChoice)){

        console.log("Please input rock or paper or scissors");
        return "Invalid input";
    } 

    if((humanChoice === "rock" && computerChoice === "scissors") ||
       (humanChoice === "scissors" && computerChoice === "paper") || 
       (humanChoice === "paper" && computerChoice === "rock")){

        return "win";

    }else if(humanChoice === computerChoice){

        return "tie";
        
    }else{

        return "lose";
    }

}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    const display = document.querySelector("p");

    const selections = document.querySelector("#selections");

    
        selections.addEventListener("click",(event) =>{


            let humanSelection = event.target.id;
            let computerSelection = getComputerChoice();

            const feedback = document.createElement("p");            

            const final = document.createElement("p");

            const result = playRound(humanSelection, computerSelection);



            if(result === "tie"){

            feedback.textContent = `It's a tie! ${humanSelection} tied ${computerSelection}`;
            }
            
            if(result === "win"){

                humanScore++;
                feedback.textContent = `You win! ${humanSelection} beats ${computerSelection}`;
                
            }
            
            if(result === "lose"){

                feedback.textContent = `You lose! ${computerSelection} beats ${humanSelection}`;

                computerScore++;
            }

            
            display.textContent = `Human vs Computer : ${humanScore} : ${computerScore}`;
            display.appendChild(feedback);

            if(humanScore >= 5 || computerScore >= 5){
                if(humanScore > computerScore){

                    final.textContent = `Final result: You win!(You ${humanScore} : ${computerScore} Computer)`;

                }else if(humanScore < computerScore){

                    final.textContent =`Final result: You lose!(You ${humanScore} : ${computerScore} Computer)`;
                }else{

                    final.textContent = `Final result: Tie!(You ${humanScore} : ${computerScore} Computer)`;
                }

                display.appendChild(final);
                humanScore = 0;
                computerScore = 0;
                
            }
        });

    



}

playGame();