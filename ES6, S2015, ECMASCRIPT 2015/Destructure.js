const person={name:'Mainuddin', age:21, job:'ToT comany',gfName:'UnKnown',address:'Patuakhali', friends:["Rafi","Sifat","Efty"],phone:"01788420***",present:"Dhaka"};

console.log(person.gfName);
console.log(person.age);
console.log(person.name);


const gfName=person.gfName;
const phone=person.phone;

console.log(gfName);
console.log(phone);

//easy way

const name1 =person;// puta structure name variable store hoice

const {name}=person; //ekhane name1 akta object er property; jar moddhe structure er name variable er value assign korbe
//onek gual rakha jay
console.log(name);
 const {age,friends,address}=person;
console.log();
 console.log(age,friends,address);

 //structure nai amon property dey tahole undefined ashbe
 const {salary, present }=person;
 console.log(salary,present);


 //array

 const Khan=['Sakib khan','Amir Khan','Jayed khan','Salman khan','Sharukh khan'];
 const [elemnet1,element2]=Khan;
 console.log(elemnet1,element2);//Sakib khan Amir Khan

 const [first1, first2,...otherValue]=Khan;//... er por je name dibo tai baki gula dia array hobe
 console.log(first1,first2);
 console.log(otherValue);// first 2 ta bade baki gula nia array create korbe jar name otherValue

 //nested Structure
 const complexeObject={
    name:'abc',
    info:{
        address:'Dhaka',
        leader:'Uganda'
    }
 }
 const {leader}=complexeObject.info; //info projonto jaoa lagbe 
 console.log(leader);

