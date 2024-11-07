let golobal=30;
function sum(first,second){
    let result=first+second;
    console.log("Global: ",golobal);
    return result;
}
const output=sum(6,3);
console.log(output);
//console.log(result);//error because function vitore declare kora hoice

console.log("Global: ",golobal);
if(output>10){
    const mood="happy";
}
else{
    var mood1="bad";
}
//console.log(mood); // error block vitore
//but var jonno ashbe
console.log(mood1);
//hosting ....var dia variable decleare korle scope baire parent scope access deo.


console.log(day);//undefind dekhbe var karone ,but let and const a error provide korbe
var day="thursday";