const firstName='Justin';
const lastName="TimberLake";
const fullName=firstName+" "+lastName+" is a good boy";
console.log(fullName);
//ES6 bikalpo
const fullName2=`${firstName} ${lastName} is a good boy`;
console.log(fullName2);
const fullName3=`${firstName} ${20+20+12-4} is a good boy`;
console.log(fullName3);

//multiLine
//normal
const multiLine="I love you\nI hate you\nI not accept you";
console.log(multiLine);
//ES6
const multiLine2=`
Multiple ES6:
I love you
I hate you
I don't accept`;
console.log(multiLine2);