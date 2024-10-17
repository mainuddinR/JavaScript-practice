const readline=require('readline-sync');
let num=readline.question('Enter checking number:\n');

function checkPrime(num){
    for(let i=2; i<=(num/2); i++){
    if(num%i==0){
        return false;
    }
  }
  return true;
}

if(checkPrime(num)==true){
    console.log("Your number is a prime number");
}
else {
    console.log("Not a prime number");
}


