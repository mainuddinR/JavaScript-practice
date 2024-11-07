function add(num1,num2){
    const array=[...arguments];// array te convert korte 3 dot and [] use kore
    let sum=0;
    for(let i=0;i<array.length;i++ ){
        sum=sum+array[i];
    }
    return sum;
}
const result=add(4,7,8,9,4);
console.log(result);
//Arguments array noy eta array like object (array o na ,object o na)

