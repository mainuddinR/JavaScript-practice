//Callback function

function welComeGest(name,greetHandler){
    greetHandler(name);
}

function greetMornning(name){
    console.log("GoodMornning ",name);
}
function greetEvenning(name){
    console.log("Good Evenning",name);
}

const name1="Mainuddin";
welComeGest(name1,greetMornning);
const name2="Atikul";
welComeGest(name2,greetEvenning);