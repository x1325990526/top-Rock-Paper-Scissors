 function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    //Math.floor 向下取整
    //Math.random * choices.length 返回 0-2.999...之间的数
    return choices[Math.floor(Math.random() * choices.length)];
 }

console.log(getComputerChoice());

function getHumanChoice(){

    return prompt("input rock or paper or scissors","rock");
}

console.log(getHumanChoice());