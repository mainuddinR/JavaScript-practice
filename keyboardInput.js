const readline=require('readline-sync');
var name=readline.question('What is your Name?\n');
console.log("Hi "+name+" !");

// How many ways can a frog go from 1 to 6 by changing its position from one position to  1 2 3 4 5 6 position 1 or 2?
function f(n){
    if(n==1)
    {
        return 1;
    }
    else if(n==2){
        return 2;
    }

   return f(n-1)+f(n-2);;
}
console.log(f(6));
