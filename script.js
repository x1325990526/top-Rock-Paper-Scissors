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

  humanChoice = humanChoice.toLowerCase();

  if (!["paper","scissors","rock"].includes(humanChoice)){
    
    console.log("Please input rock or paper or scissors");
    return "Invalid input";
  } 

  if(humanChoice === "rock" && computerChoice === "scissors" ||
     humanChoice === "scissors" && computerChoice === "paper" || 
     humanChoice === "paper" && computerChoice === "rock"){

    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return "win";

  }else if(humanChoice === computerChoice){

     console.log(`It's a tie! ${humanChoice} tied ${computerChoice}`);
     return "tie"
     
  }else{

    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return "lose";
  }

}




function playGame(){
    const roundNumber = 5;
    let humanScore = 0;
    let computerScore = 0;

    for(let i=0;i<roundNumber;i++){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        if(result === "win")humanScore++;
        if(result === "lose")computerScore++;
        

    }

    if(humanScore > computerScore){
        console.log(`Final result: you win!Your scores ${humanScore} bigger than computer scores ${computerScore}`);
    }else if(humanScore < computerScore){
        console.log(`Final result: you lose!Your scores ${humanScore} smaller than Computer scores ${computerScore}`);

    }else{
        console.log(`Final result: tie!Your scores: ${humanScore} equl computer scores ${computerScore}`);
        
    }

}

playGame();