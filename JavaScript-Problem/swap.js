let a=5;
let b=7;
console.log("before swap: a=",a,"\nb=",b);
let temp;
temp=a;
a=b;
b=temp;
console.log("After swap: a=",a,"\nb=",b);

//not use temp variable
let x=5;
let y=7;
console.log("before swap: x=",x,"\ny=",y);
x=x+y;
y=x-y;
x=x-y;
console.log("After swap: x=",x,"\ny=",y);

//programming language specific
var p=5;
var q=7;
console.log("before swap: p=",p,"\nq=",q);
[p,q]=[q,p];
console.log("After swap: p=",p,"\nq=",q);