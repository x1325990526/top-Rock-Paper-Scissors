 console.log(getComputerChoice());
 function getComputerChoice(){
    let n = Math.random();
    if(n<0.33) return "rock";
    if(n>=0.33 && n<0.66) return "paper";
    if(n>=0.66) return "scissors";
 }