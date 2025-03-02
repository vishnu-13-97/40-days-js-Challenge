


const game=()=>{
let Choice =   prompt("Enter Rock or Paper or Scicor ");

let userchoice = Choice.toLowerCase();
console.log(userchoice);

let computerChoice = Math.floor(Math.random()*3)+1







switch(computerChoice){
case 1:
 computerChoice = "rock"
break;
case 2:
computerChoice = "paper"
break;
case 3:
    computerChoice = "sciscor"
break;    
}




console.log("User Entered",userchoice);
console.log("Computer Entered",computerChoice);



if((userchoice === "rock" && computerChoice === "sciscor") ||
(userchoice === "paper" && computerChoice === "rock")||
(userchoice === "sciscor" && computerChoice === "paper"))
{  

    console.log("Yay!! User wins");
    
}else if(
    (computerChoice === "rock" && userchoice === "sciscor")||
    (computerChoice === "paper" && userchoice === "rock")||
    (computerChoice === "sciscor" && userchoice === "paper")
){
    console.log("computer wins");
    
}else if (computerChoice===userchoice){
    console.log("Match Tied");
    
}else {
    console.log("wrong input");
    
}

const playAgainPrompt = prompt("do you want to play again");

const playAgain = playAgainPrompt?playAgainPrompt.toLowerCase():"no";

if(playAgain === "yes"){
    game()
}else{
    console.log("thanks for playing");
    
}



}

game()