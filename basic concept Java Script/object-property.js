const strudents=[
    {id:101,name: 'Rifat'},
    {id:102,name: 'Shuvro'},
    {id:103,name: 'Mainuddin'},
    {id:104,name: 'Atikul'}
]; //array vitore onek object ache
const nameArray=[];

for(let i=0;i<strudents.length;i++){
    const {name}=strudents[i];
    nameArray.push(name);
   // nameArray[i]=name;
    //nameArray.push(strudents[i].name);
}
console.log(nameArray);

//map maddhome
const  names=strudents.map(s=>s.name);
console.log("Map Use=",names);
const nameAndId=strudents.map((x)=>`${x.id} ${x.name}`);

console.log("Id with Name: ",nameAndId);

const kharapStudent=strudents.filter(y => y.id>=103);
console.log(kharapStudent);

const exaclyOneBadStudent=strudents.find(x=>x.id>=103);
console.log(exaclyOneBadStudent);

