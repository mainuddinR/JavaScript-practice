const number=[2,3,4,5,6,7,8,9];
const output=[];
for(let i=0;i<number.length;i++){
    const result=number[i]*number[i];
    //console.log(result);
    output.push(result);
}
console.log(output);

function fivetimes(x,y){
    console.log(y ,x);
    return x*5;
}
number.map(function(element,index,array){// ekhane map 3 ta parameter ney {ak array element,index, pura array}
    console.log(element,index,array);
});
//parameter name x ,y dite paro
//map first parameter element thake second index ,third pura array
const result1=number.map(function(element){
    return element*element;
});

console.log(result1);

const result2=number.map(fivetimes);
console.log(result2);

const result3=number.map(x=>x*x*x);//arrow function pass korci
console.log(result3);//number array element qube dibe

//Filter

const result4=number.filter(x => x>=6);
console.log(result4); //6 bro o equals gula print korbe

const result5=number.filter(x => x*5);//akhane Array sudhu return korbe calculate korbe na 
//filter sudhu condition kaz kore
console.log(result5);

//find

const smaller=number.find(x=>x<5);//o sudhu akta element dibe 
//but fillter conditon fill kora sob element er array dibe
console.log(smaller);// 5 theke suto element er first element ta return kore

const bigger=number.find(x=>x>5);
console.log(bigger); //5 theke bro first element dibe

///for-each
//reduace
