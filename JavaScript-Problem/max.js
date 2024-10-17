let business=450;
let minister=550;
let sochib=600;
if(business>minister){
    if(business>sochib){
        console.log("Business is bigger");
    }
    else{
        console.log("Sochib is bigger")
    }
    
}
else{
    if(minister>sochib){
        console.log("Minister is bigger");
    }
    else{
        console.log("Sochib is bigger") 
    }  
}

let max=Math.max(business,minister);//max variable value return kore 
console.log(max);
//or
let max1=Math.max(business,minister,sochib);//max variable value return kore 
console.log(max1);
//arrayMax

let marks=[45,81,63,96,68,37,31];
let max2=marks[0];
let total=marks[0];
for(let i=1;i<marks.length;i++){
    total=total+marks[i];
    if(max2<marks[i]){
        max2=marks[i];
        
    }
}
console.log("Max:",max2);
console.log("Sum:",total);

function getArraySum(num){
    var total=0;
    for(let i=0;i<num.length;i++){
        total=total+num[i];
    }
    return total;
}
let result=getArraySum(marks);
console.log(result);