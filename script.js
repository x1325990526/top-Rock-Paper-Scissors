function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    //Math.floor 向下取整
    //Math.random * choices.length 返回 0-2.999...之间的数
    return choices[Math.floor(Math.random() * choices.length)];
 }


function getHumanChoice(){

    return prompt("input rock or paper or scissors","rock");
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();
  if (humanChoice != "rock" && humanChoice != "scissors" && humanChoice != "paper"){
    console.log("Please input rock or paper or scissors");
    return 1;
  } 

  if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock"){

    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);

  }else if(humanChoice === computerChoice){

     console.log(`It's a tie! ${humanChoice} tied ${computerChoice}`);
     
  }else{

    computerScore++;
     console.log(`You lose! ${computerChoice} beats ${humanChoice}`);

  }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
