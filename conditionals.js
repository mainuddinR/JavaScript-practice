var a,b;
a=12;
b=15;
if(a==b)//or ===
{
    console.log("Hello");
}
else if(a>b){
    console.log("A large");
}
else if(a!=b){
    console.log("a and b not equal")
}
else{
    console.log("world");
}

var date = new Date(); //Ajker diner date dekhabe
console.log(date);
var date1=new Date('2003-12-15');
console.log(date1);

//array
var teaLine=['Palam', 'Kalam', 'Salam', 'Balam', 'Jalam', 'talam'];
var part= teaLine.slice(2,5);//arrayName.slice(start, end); new array return kore
console.log(part);
console.log(teaLine);

var friendsage= [13, 15, 18, 19];
console.log(friendsage);
console.log(teaLine[4]);
console.log(friendsage[1]);
console.log(friendsage.indexOf(15));
console.log(teaLine.indexOf('Salam')); //array moddhe khuje na paile -1 return kore 

//array add 
friendsage.push(24); //array te value add kore ses a
console.log(friendsage);
console.log(friendsage.length);
friendsage.pop();// ses value ber korar kheltre
console.log(friendsage);
 // first add 
 teaLine.unshift('Mainuddin', 'Atikul');//teaLine array suru te new elements duita add hoibe

 console.log(teaLine);

 //suru theke value(or elements) removed 
 var removed=teaLine.shift();
 console.log(removed);//Mianuddin removed kore remove variable vitore rakhbe

 console.log(teaLine);
 
 var sub = teaLine.slice(2,5);
 console.log("slice = "+sub);
 console.log(teaLine);
  var sub1=teaLine.splice(2,2);
  console.log("splice = "+sub1);
  console.log(teaLine);
    teaLine.splice(1,0, 'Maria', 'Sadia', 'Marjia');
    console.log(teaLine);

    // teaLine.splice(1,1, 'Maria', 'Sadia', 'Marjia');
    // console.log(teaLine);
