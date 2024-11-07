const num=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<num.length;i++){
    console.log(num[i]);
    if(num[i]>5){
        break;
    }
}
console.log("continue");
for(let i=0;i<num.length;i++){
    
    if(num[i]>5){
        continue;
    }
    console.log(num[i]);
}