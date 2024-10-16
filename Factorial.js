//factorial 5!= 5*4*3*2*1
//for use 
function factorial(num){
    let fac=1;
    for(let i=num; i>0; i--){
      fac=fac*i;
    }
    return fac;
}
console.log(factorial(5));
console.log(factorial(10));

//while use
function factorialWithWhile(num){
    let fac=1;
    let i=num;
    while(i>0){
      fac=fac*i;
      i--;
    }
    return fac;
}
let result=factorialWithWhile(10);
console.log(result);

//recursive use 
//f(n)=n*f(n-1)
function factorialRecursive(num)
{
    if(num==0){
        return 1;
    }
    return num*factorialRecursive(num-1);
}
let result1=factorialRecursive(6);
console.log(result1);