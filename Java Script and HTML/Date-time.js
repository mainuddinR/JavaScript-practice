const start=new Date();//object create
let sum=0;
for(let i=0;i<100000000;i++){
   // sum=sum+1;
   sum++;
}

const end=new Date();
console.log('Time elapsed',end-start);//ms

console.log(sum);

console.log(Date());