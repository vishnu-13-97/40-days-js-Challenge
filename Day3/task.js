//  Odd or  Even
let number = 10;
let result = number%2 == 0 ? "Even Number" : "Odd Number";
console.log(number,"is",result);

// Do you have a driving License
let age = 18;
let eligible  = age >= 18 ? "you are eligible" : "you are not eligible"
console.log(eligible);

// CTC Calculator
let monthlySalary = 12300;
let annualSalary = monthlySalary*12;
let bonus = 0.20 *annualSalary;
let CTC = annualSalary+bonus;

console.log("CTC Per Annum with a bonus ",CTC);

let light = "Green" 

let traffic =  light === "Red" ? "Stop" : "Go"
console.log(traffic);


// Electricity Bill Calculator

let units = 10;
let costperUnits = 150;
let costperMonth = units*costperUnits*30;
let costperYear = (costperMonth*12)*0.80;

console.log("cost per month",costperMonth);
console.log("cost per year with 20% discount",costperYear);







// Leap Year Checker

let year = 2025;
let leapYear = ((year%4 ==0)&& (year%100!==0)||(year%400==0))?"Leap Year" :"Not Leap year";
console.log(leapYear);

// Max of Three Numbers

let firstnumber = 10;
let secondnumber = 20;
let thirdNumber = 30;

let greater = firstnumber>=secondnumber&& firstnumber>=thirdNumber ? "First Number is Greater" : secondnumber>=firstnumber && secondnumber>=thirdNumber? "Second Number is Greater" : "Third number is Greater"
console.log(greater);


// Bitwise Doubling


const count = 5;
const doubledvalue = count << 1
console.log(doubledvalue);
