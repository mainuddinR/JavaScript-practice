//iterative
let fibonacci=[];
const readline=require('readline-sync');
let num=readline.question('Up to how many terms do you want to calculate the Fibonacci serise?\n');
fibonacci[0]=0;
fibonacci[1]=1;
for(let i=2;i<=num ; i++){
    fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
}
console.log(fibonacci);


//recursive
function fibonacciF(num){
    //stoping condition
    if(num==1){
        return 1;
    }
    else if(num==0){
        return 0;
    }

    if (fibonacci[num] !== undefined) {
        return fibonacci[num];
    }
    
    fibonacci[num]=fibonacciF(num-1)+fibonacciF(num-2);
    return fibonacci[num];
}

console.log("Recursive:")
fibonacciF(15);
console.log(fibonacci);
