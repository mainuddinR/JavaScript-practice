function explain_callback(name,age,task){
    console.log("Hello", name);
    console.log("Your age",age);
    task();
}
function washHand(){
    console.log("wash hand with soap");
}
function takeShower(){
    console.log("take shower");
}
explain_callback("Sogir Uddin",17,washHand);
explain_callback("Kobir Uddin",13,takeShower);