
// Task 1
for (i = 1; i <= 5; i++) {
    let r=""
    for(j=1;j<=i;j++){
        r+="*"
      }
    console.log(r);
    }
  


// Task 2
let n = 3;
for (i=1;i<=10;i++){
  console.log("3 * ",i, "=" , n*i)
  
}

// Task 3
let sum =0;
for(let i = 1;i<=500;i++){
  if(i%2!==0){
    sum+=i
 }
  }
  console.log("sum of all odd numbers between 1-500 is",sum)


// Task 4


for (i=1;i<=20;i++){
  if(i%3===0) continue
  console.log(i);
  
}


// // Task 5

 let numbers = "12345";
 let result = ""
 let i = numbers.length
 while(i>=0){
    result += numbers.charAt(i)
    i--
 }
 console.log(result);


