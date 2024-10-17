let id=[3,6,2,7,3,2,8,1,9,11,56];
let uniqId=[];
for(var i=0;i<id.length;i++){
    let element=id[i];
    let index=uniqId.indexOf(element);
    if(index==-1){
        uniqId.push(element);
    }
}
console.log(uniqId);

