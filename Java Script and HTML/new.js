class person{
    constructor(firstName,lastName,Salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.Salary=Salary;
    }
}
const heroPerson=new person("hero","Balam",12020);
const heroPerson1=new person("hero","kalam",19000);
console.log(heroPerson);
console.log(heroPerson1);
//age function er vitore this use korto and new keyword dia call korto

function person1(firstName,lastName,salary){
    this.firstName=firstName;
    this.lastName=lastName;
    this.salary=salary;
}
const personF=new person1("Hero","Ambani",100000);
console.log(personF);//age use hoito aljon use hoy na