class Parent{
    constructor(){
        this.fatherName="Robbany";
    }
}
class child extends Parent{

    constructor(name){
        super();
        this.name=name;
    }

    getFullName(){
        return `${this.fatherName} ${this.name}`;
    }
}

let child1=new child('Korim');
const child2=new child("Rohim");
console.log(child1);
console.log(child2);
console.log();
console.log(child1.getFullName());
console.log(child2.getFullName());


