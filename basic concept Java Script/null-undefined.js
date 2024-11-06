let birds;
console.log(birds);//undefined

function add(num1,num2){
    console.log(num1+num2);
}

const result=add(12,54);//undefined dekhabe because function not returned value
console.log(result);


function add1(num1,num2){
    console.log(num1+num2);
    return;
}
console.log(add1(63,32));//undefined dekhabe

console.log(add1(23));//undefined dekhabe parameter pass kori nai tai

const person={name:"mainuddin",phone:'01788****'};
console.log(person.gf);//undefined dekhabe because gf property nai

let fun=undefined;
console.log(fun);//undefined

//null means empty
