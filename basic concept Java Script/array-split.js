const num=[1,2,3,4,5,6,7,8,9,10];
const part=num.slice(2,6);
//slice(firstIndex,sesIndex) //kotha theke kon projonto slice korbe
console.log(part);
console.log(num);//change hobe na

const removed=num.splice(5,2); //5 number index theke next 2 ta value delete korbe 
//splice(index, DeleteCount)
console.log(removed);
console.log(num);
const removedAndInject=num.splice(2,2,20,30,40);
//splice(index ,deleteCount,pushingValue...)
console.log(removedAndInject);
console.log(num);

//join()
const together=num.join(" ami "); //array element gula join kore dibe and string provide korbe
//join(" ki dara join thakbe element gula");
console.log(together);