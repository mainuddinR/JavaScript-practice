//Normal
function adduser(){
    console.log("Mainudiin");
}
adduser();//jodi function lekhar immediate por abar function call deoa hoy tai IIFE (Immediately Invoked Function Expression)

//IIEF
(function addman(){
    console.log("Atikul");
})();

//function declaration
function sum(){
    console.log(13+12);
}

//function Expression
let task="Marjia";
let myTodo=function(task){
    console.log(task);
};
myTodo(task);


//parameter
let array;
function getFullName(firstName,lastName){
    array=arguments;//jto parameter deo na kano sob o receive korbe
    const fullName=firstName+' '+lastName;
    return fullName;
}

let name=getFullName('Mainuddin','Atikul','Sadia','Sumaia','Marjia','Maria');
//jto tai dei na keno sudhu first ta dekhabe
console.log(name);
console.log(array);