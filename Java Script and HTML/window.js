let name1='Trump'
function add(num1 ,num2)
{
     result=num1+num2;
   // window.resultSqure=result*result;
    console.log("result: "+result);
    console.log("inside name:",name1);
    function double(num){
        return num*2;
    }
    let total=double(result);
    //console.log("Double: ",total);
    return total;

}
//console.log("outsize result:",result);//error ashbe because eta inside function
console.log("Outside name:",name1);
let sum=add(12,13);
console.log(sum);
console.log("not define variable: ",result);
//console.log("Window result:"+resultSqure);
