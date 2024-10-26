nums=[5,12,89,45,18,8];

function isEven(num){
    if(num%2==0){
        console.log(num,"is even");
        //process.stdout.write('${num} is even');
    }
    else{
        console.log(num,"is odd");
        //process.stdout.write('${num}'+'is odd')
    }
}

for(let i=0;i<nums.length;i++){
    const num=nums[i];
    //console.log(num*2);
    isEven(num);
}

const friends_age=[13, 17,19,20,18];

for(let i=0;i<friends_age.length;i++){
    const age=friends_age[i];
    //console.log(age);
    console.log(isEven(age));
}

//return function

function evenify(num){
    let result=[];
    for(let i=0;i<num.length;i++){
        const age=num[i];
        if(age%2==0){
            result.push(age);
        }
    }
    return result;   //array return
}

console.log(evenify(friends_age));


//
