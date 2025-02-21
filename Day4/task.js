// Task 1
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
// output = It's a normal day.

// Task 2 ATM Cash Withdrawal System

let amount = 1000;

if (amount % 100 == 0) {
  console.log("Withdraw succesful");
} else {
  console.log("Invalid amount");
}

// Task 3 Calculator with switch-case

let firstNumber = 10;
let secondNumber = 20;
let operator = "+";

switch (operator) {
  case "+":
    result = firstNumber + secondNumber;
    console.log(result);
    break;
  case "-":
    result = firstNumber - secondNumber;
    console.log(result);
    break;
  case "*":
    result = firstNumber * secondNumber;
    console.log(result);
    break;
  case "/":
    result = firstNumber / secondNumber;
    console.log(result);
    break;
  default:
    console.log("Invalid operator");
      
}

// Task 4 movie ticket

let age = 13;

if (age < 10) {
  console.log("Ticket Price is $3");
} else if (age > 12 && age <= 60) {
  console.log("Ticket Price is $10");
} else if (age > 60) {
  console.log("Ticket Price is $8");
}

// Task 5 Horoscope Sign Checker

let month = "may";
switch(month){
    case  "march" : 
    case  "april":
    console.log("your zodiac sign is Aries");
    break;

    case  "may" : 
    case  "april":
    console.log("your zodiac sign is Taurus");
    break;
        
    case  "june" : 
    case  "may":
    console.log("your zodiac sign is Gemini");
    break;

    default:
        console.log("Invalid month");
        
        
}


// Task 6 Which Triangle

let a = 60;
let b = 60;
let c = 60;
if(a+b+c !== 180){
  console.log("Not a triangle");
  

}
else if(a===b && b===c){
  console.log("Equilateral Triangle");
  
}else if (a===b || b===c || a===c){
  console.log("Iscoceles Triangle");
  
}else{
  console.log("Scalane Triangle");
  
}