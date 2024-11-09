function temp(){
    console.log(444);
}
console.log(222);
console.log(333);
temp(); //synchronized way kaz kore
function temp1(){
    console.log(4455);
}

setTimeout(temp1);// sobar ses run hobe
//amar serial onujai sto kaz ache sob ses ai kaz korbe
//chaile  ami time o set korte pari
setTimeout(temp1,3000) //time ms ney 1000ms=1s
setTimeout(function(){
    console.log('Lazy and waiting');
},2000)
setTimeout(()=>{
    console.log('see you late.');
},5000);//eta minimum 5s por run hobe but onno code run hoite jodi 10s lage tahole 10s por run hobe
console.log(555);
console.log(666);
console.log(777);
//setTimeout synchronized break kore...

//setInterval
setInterval(function(){
    console.log("Doing it!");
},1000); // setInterval set kora time por bar bar run hobe  , eta 1000ms por por run hoite thakbe eta bondho korte ctrl+c dite hobe