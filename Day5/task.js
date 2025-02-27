
// Task 1 Pyramid Pattern 
for (i = 1; i <= 5; i++) {
    let r=""
    for(j=1;j<=i;j++){
        r+="*"
      }
    console.log(r);
    }
  


// Task 2 Multiplication Table (Using for loop)
let n = 3;
for (i=1;i<=10;i++){
  console.log("3 * ",i, "=" , n*i)
  
}

// Task 3 summation of all odd numbers between 1 to 500
let sum =0;
for(let i = 1;i<=500;i++){
  if(i%2!==0){
    sum+=i
 }
  }
  console.log("sum of all odd numbers between 1-500 is",sum)


// Task 4  Skipping Multiples of 3


for (i=1;i<=20;i++){
  if(i%3===0) continue
  console.log(i);
  
}


// // Task 5 Reverse Digits of a Number (Using while loop)

 let numbers = "12345";
 let result = ""
  i = numbers.length
 while(i>=0){
    result += numbers.charAt(i)
    i--
 }
 console.log(result);



 

// Task 6 understanding on the difefrences between for, while, and do-while loop. Create their flow charts.

// for loop used for the number of iteration is known

// whileloop used for the number of iteration is unknown but want to iterate on a condition

// do while loop used for whether the conditon is true or false , one iteration will execute 

