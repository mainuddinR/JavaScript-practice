const speech="I am      a good person . I     don't    snore at night";
console.log(speech.length);
let str=speech.split(' ');
console.log(str);
//let arr=str.filter(word=>word!='');
//let arr=str.filter(hello=>hello!='');
let arr=str.filter(item=>item!=''&&item!='.');
console.log(arr);
console.log("Counting word:",arr.length);


//loop use 
let count=0;
for(let i=0;i<speech.length;i++){
    let char=speech[i];
    if(char==' '&&speech[i-1]!=' '){
        count++;
    }
}
count++;
console.log("counting word:",count);// . count korse