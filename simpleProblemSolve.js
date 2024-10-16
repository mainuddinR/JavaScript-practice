var inch=67;
var foot;
function feetCalculate(inch){
    foot=inch/12;
    var mod=inch%12;
    console.log(Math.floor(foot)+"ft "+mod+" inch.");
}
feetCalculate(inch);

// var inch=prompt("How mach tall? ");
// feetCalculate(inch);
// Define the feetCalculate function
// function feetCalculate(inch) {
//     var feet = inch / 12;
//     console.log(feet + " feet");
//   }
  
//   // Get input from the user
//   var inch = readline("How tall are you in inches?");
  
//   // Convert the input to a number (in case the user inputs a string)
//   inch = parseFloat(inch);
  
//   // Call the feetCalculate function
//   feetCalculate(inch);

//not worked
//import { ask } from 'stdio';
// const color = ask('What is your keyboard color?');
// console.log("color: "+color);

var name='Javed Akbar';
console.log("length:"+name.length);
if(name.length>5){
    name='Mainu'
}
console.log("Name:"+name);

//variable constant korar jonno const
const id =1304;
//jodi variable change hoite pare takhon let use korbe
let age=13;
