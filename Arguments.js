//parameter Arguments
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

//event delegation

