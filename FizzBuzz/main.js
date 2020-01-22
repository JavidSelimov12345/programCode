"use strict"
let variableOne ="Fizz";
let variableTwo = "Buzz";

for(let i=1;i<=100;i++){
    if ((i%3!=0)&&(i%5!=0)){
        console.log(i)
    }
    if(i%3==0&&i%5!=0){
        console.log(variableOne)
    }
    if(i%5==0&&i%3!=0){
        console.log(variableTwo)
    }
    if(i%5==0&&i%3==0){
        console.log(variableTwo+variableOne)
    }
    
}