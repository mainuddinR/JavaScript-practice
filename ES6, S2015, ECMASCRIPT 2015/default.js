function add(num1,num2){
    // if(num2==undefined) num2=0;
    // //or
     num2=num2||0;// jodi num2 value undefine ashe tahobe default o value sum korbe
    return num1+num2;
}
const total=add(15);
console.log(total);

// default parameter set
function add2(num1, num2=20){
    return num1+num2;
}
const total1=add2(15);//35
console.log(total1);
const total2=add2(15,10) //25 because akhon ar default value assign hobe na 
console.log(total2);