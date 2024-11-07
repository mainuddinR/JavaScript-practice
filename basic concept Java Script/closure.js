function stopWatch(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const clock1=stopWatch();
console.log(clock1);//function dekhabe
//clouser  : kono akta function theke aro akta function return kori 

//console.log(clock1.count);

console.log("clock 1:");
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2=stopWatch();
console.log("clock 2:");
console.log(clock2());
console.log(clock2());
console.log(clock2());

console.log("clock 1:");
console.log(clock1());
console.log(clock1());
console.log(clock1());


