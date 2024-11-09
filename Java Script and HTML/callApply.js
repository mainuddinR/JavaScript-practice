const normalPerson={
    firstName:'Rahim',
    lastName:'Uddin',
    salary:150000,
    getFullName:function(){
        console.log(this.firstName+" "+this.lastName);
    },
    chargeBill:function(amount,tax,tips){
        
        this.salary=this.salary-amount-tax-tips;
        console.log(this);
    }
    //function name na thakle take anonimus function bole
};
console.log(normalPerson);
console.log(normalPerson.firstName);


normalPerson.chargeBill(1500,100,50);
// normalPerson.chargeBill(2455);
// console.log(normalPerson.salary);
// normalPerson.getFullName();// eta function call proper way
// console.log(normalPerson.getFullName);//function name dekhabe

const heroPerson={
    firstName:"hero",
    lastName:'Balam',
    salary:250000
}
const heroPerson1={
    firstName:"hero",
    lastName:'Kalam',
    salary:270000
}

// //bind less efficient
// console.log('Bind');
// const heroBillCharge=normalPerson.chargeBill.bind(heroPerson); //bind function return kore
// //normalPerson.chargeBill();
// heroBillCharge(2000);
// heroBillCharge(3000);
// console.log(heroPerson);
// console.log(normalPerson);

// const herochargeBill=normalPerson.chargeBill.bind(heroPerson1);
// herochargeBill(5330);


//call
console.log('Call');

normalPerson.chargeBill.call(heroPerson,1500,1000,200);
//ownObjectName.functionName.call(objectname,parameter)
normalPerson.chargeBill.call(heroPerson1,500,200,300);

console.log('Apply');

normalPerson.chargeBill.apply(heroPerson,[10000,500,500]);
console.log(heroPerson.salary);
//ownObjectName.functionName.apply(ObjectName,Parameter er Array akare pass korte hoibe)
