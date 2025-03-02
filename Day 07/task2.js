

const guess = ()=>{
   
    
    let computerChoice = Math.floor(Math.random()*10)+1;
  
      let attempt =10
    
while(attempt>0){
    let userchoice = parseInt(prompt("Enter a nummber between 1-10"));
    if(userchoice>=1 && userchoice<=10){
        if(userchoice < computerChoice){
            console.log("Too low");
            
        }else if(userchoice > computerChoice){
            console.log("Too High");
            
        }else if(userchoice===computerChoice){
            console.log("Yah your prediction correct");
            return;
        }

    }else{
    console.log("Invalid number");
    
     }
       continue;

     attempt--

    }
    if(attempt === 0 ){
        console.log("game over");
        
    }
    

     
    

}


guess()