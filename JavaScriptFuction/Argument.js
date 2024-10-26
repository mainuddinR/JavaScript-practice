function addNumber(num1, num2){
    console.log(arguments);
    //console.log(arguments[3]);
    for(let i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
    return num1+num2;
}
let sum=addNumber(3,5);
console.log(sum);

let sum1=addNumber(11,12,3,4,5);
console.log(sum1);