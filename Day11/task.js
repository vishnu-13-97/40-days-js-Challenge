// Task 1
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); //output 1 
counter(); //output 2

// Task 2
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());//output 100 because it is an immediatly invoked function.

// Task 3 
//  Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

function countSet(){
    let count = 0 ;

    document.getElementById("task").addEventListener("click",function(){
        alert(`you have clicked ${count++} times`);

    })
}
 countSet();


//  Task 4
//  Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

  function createMultiplier(multiplier,multiplicant){
    let multiplierValue = multiplier;
    let multiplicantValue = multiplicant;

    return multiply=()=>{
        console.log(`you have entered ${multiplierValue},${multiplicantValue}, result is ${multiplicantValue*multiplierValue}`);
    }
  }

const Multiplys = createMultiplier(2,4);
 Multiplys()


// Task 5
// What happens if a closure references an object?
// The object remains in memory as long as the closure exists


// Task 6
// Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function counterFunc(){
    let count = 0;

    return {
        increment:()=>{
            console.log(`You are incrementing, value is  ${count++}`);
            
        },
        decrement:()=>{
            console.log(`you are decrementing , value is ${--count}`);
            
        },
        reset:()=>{
            console.log(`reset ${count=0}`);
            
        }
    }
}

let counts = counterFunc()
counts.increment();
counts.decrement();
counts.reset();