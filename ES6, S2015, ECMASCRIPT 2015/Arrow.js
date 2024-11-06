function doubleIt(num)
{
    return num*2;
}

const result=doubleIt(23);
console.log(result);


// const threepleIT=function(num){
//     return num*3;
// }
// const result1=threepleIT(3);
// console.log(result1);
//or
const threepleIT=function que(num){
        return num*3;
    }
    const result1=threepleIT(3);
    console.log(result1);


    //arrow function
const doubleIT2=num => num*2;

const total3=doubleIT2(49);
console.log(total3);

const add=(x,y,z)=>x+y+z;

console.log(add(5,3,8));

const giveValue=() => 4;//4 return korbe

//multile arrow function
const calculate=(x,y) =>{
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}

const result4=calculate(7,3);
console.log(result4);
