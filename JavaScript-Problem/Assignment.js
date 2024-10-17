//question 1
//feetToMile
function feetToMile(feet)
{
 let mile;
 mile=feet/5280;
 return mile;
}
const readline=require('readline-sync');
let feet=readline.question('Enter your Feet:\n');
console.log(feetToMile(feet),"Mile");


//question 2
//woodCalculator
//chair need 1qf
//table need 3qf
//bed need 5qf
let needCh ,needT ,needB;
 function woodCalculator(cheNo,tableNo,bedNo){
     needCh=cheNo*1;
     needT=tableNo*3;
     needB=bedNo*5;
    return 0;
 }
 woodCalculator(3,3,2);
 console.log("Wood need :\n Chair:",needCh,"\nTable:",needT,"\nBed:",needB);

//Question 3
//Brick calculator
//first 10tola 15feet next(11-20) tola 12feet next all 10feet.
//1feet jonno 1000 brick.  
function brickCalculate(tola){ 
    let needBrick;
    let tola=Math.abs(tola);
    if(tola<=10){
        needBrick=tola*15*1000;
    }
    else if(tola<=20&&10<tola){
        needBrick=(10*15 +(tola-10)*12)*1000;
    }
    else{
        needBrick=(10*15+10*12+(tola-20)*10)*1000;
    }
    return needBrick;
}

console.log("Needed Brick:",brickCalculate(13));
console.log("Needed Brick:",brickCalculate(23));
console.log("Needed Brick:",brickCalculate(10));


//Question 4

function tinyFriend(friend)
{
    let name=friend[0];
    let min=friend[0].length;
    for(let i=1;i<friend.length;i++){
        if(min>friend[i].length){
            min=friend[i].length;
            name=friend[i];
        }
    }
    return name;
}

let friend=['Marjia','Mainuddin','Maria','Sadia','Sumaia','Niaj','Salma','Altaf','Atikul'];
console.log("Small Name: ",tinyFriend(friend));
