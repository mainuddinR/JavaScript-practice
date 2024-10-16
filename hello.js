console.log(43)
console.log(90)

var price=100;
console.log("price="+price);
var roll=1304;
console.log('Roll='+roll);
console.log(typeof price);
var name="Md Mainuddin";
console.log(name);
console.log(typeof name);
var isHot=true;
console.log(isHot);
console.log(typeof isHot);
var myHouse="Lebukhali, Dumki , Patuakhali, Barishal , Dhaka" ;
console.log(myHouse);
var myname='Atikul';
myname='Mainuddin';
console.log(myname);
var myName='Sadia'; //camel case ak word por second word first letter capital
console.log(myName);

var promise="I promise i will work hard to become a programmer";
var sName='Mst Marjia';

var sisName=`Maria`;

console.log('Lower case='+promise.toLowerCase());
console.log("Upper Case="+promise.toUpperCase());
console.log(promise.indexOf('hard'));
console.log(promise.split(' ')); // ' ' paile alada korbe
console.log(promise.substring(10 , 21)); // 10-21 index projont ja ache ta return kore
console.log(promise.length); //string length return kore
console.log(promise.charAt(22)); // 22 index a character return
console.log(promise.concat(' Hello')); //promise string ses "Hello" string jukto kore
console.log(promise.charCodeAt(22)); //return ASCII valo 22 number index er char.

var num=100;
var num2="102.422";
console.log(num);
console.log(typeof num);
var a=10;
var b=24;
console.log(a+b);
console.log(num+num2);
num2=parseFloat(num2); //102.422
console.log(num+num2);
num2=parseInt(num2); //102
console.log(num+num2);
 //or
 var num3="103.33"
 num3=+num3; //parse Kaz korbe means string numconvert hobe num3=103.33
 console.log(num+num3);
 var c,d=10;
 c=' '+d;
console.log(c); //eta string hobe
console.log(typeof c);//string
c=d;
console.log(c);
console.log(typeof c);

var e=0.1;
var f=0.2;
console.log(e+f);//0.30000000000000004
//solve 0.30000000000000004 eta
var total=e+f;
total=total.toFixed(3); // . er por 3 ghor projonto dekhabe
console.log( total); //eta string convert hoya jay

//basic
var price1=25;
var price2=35;
var total=price1+price2;
console.log(total);
total=price2-price1;
console.log(total);
total=price1*price2;
console.log(total);
total=price2/price1;
console.log(total);
total=price2%price1;
console.log(total);
console.log(++price2);
price2++;
console.log(price2);

//absolute Number
var num5= -5;
var absoluteN=Math.abs(num5); // abs method - sing bad dia absolute value provide kore
console.log("Absolute="+absoluteN);

var num6=5.6908833; 
var roundN=Math.round(num6);// num6 value ta round kore dibe 
console.log("round="+roundN);// ans=6 because .50<=.690__ 

var num7=5.040;
var ceiling=Math.ceil(num7); // ceil jodi point por kisu thake tohne next number result hobe Ex: jodi 5.002 hoy result =6 hobe.
console.log("ceiling="+ceiling);

var num8=5.99;
var floor=Math.floor(num8); // floor point por jto besi thakuk na kano result point bad hobe ex: jodi 5.99 hoy result=5 hobe
console.log("floor="+floor);

console.log("random value="+Math.random());




