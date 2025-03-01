// Task 1 Celsius to F calculator fn


function celsiusToFahrenheit(celsius){

  return (celsius*9/5)+32
}

let result = celsiusToFahrenheit(100);

console.log("Faranheit is ", result ,"F");



// Task 2 Max Number

function findMax(num1,num2){
  if(num1>num2){
    console.log("num1 is greater");
    }else
    console.log(("num2 is greater"));
    

}

findMax(-20,-10);

// Task 3 Pallindrome Checker



function Pallindrome (str){
  let as = "";
  for(let i=str.length-1;i>=0;i--){
      as += str.charAt(i);
   }

   if(str === as){
    return "Pallindrome!"
   }
   else{
    return "Not a Pallindrome!"
   }

}

pallindrome =  Pallindrome("malayalam")

console.log(pallindrome);



// Task 4 Factorilal
function factorial(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
    }
  return result;
}

console.log(factorial(5)); 

// Task 5 Vovels Count

function vovelscount(word){
  let count = 0;
  let vowels = "aeiouAEIOU";

for(let i=0;i<=word.length-1;i++){
  let a =vowels.includes(word.charAt(i))
  count +=a
  }
return "Count is " + count

}



console.log(vovelscount("JavaScript"));



// Task 6 Capitalize the First Letter of Each Word in a Sentence

function capitalize (sentence){
let capitalize =true;
let final ="";
for(let i = 0; i<=sentence.length;i++){
  if(sentence.charAt(i)===" "){
      capitalize =true;
      final +=" ";
  }else if(capitalize){
  final += sentence.charAt(i).toUpperCase();
  capitalize=false
  }else{
     final+=sentence.charAt(i)
  }
  // console.log(final);
}
  return final
}

 let sentence = "hello my name is vishnu"
  sd =capitalize(sentence);
 
console.log(sd);


// Task 7 IIFE

(function(word){
  console.log("Hello ,",word);
  
})("javaScript!");


// Task 8 Simple Callback fn

function greet(name,call){
return call()+name
}

gret=greet("Vishnu",call = ()=>"Hello ")
console.log(gret);















  