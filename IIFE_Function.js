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
