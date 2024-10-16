
function isLeapYear(year){
    const remainder=year%4

    if(remainder==0){
        return true;
    }
    else{
        return false;
    }
}
function finalCheck(year){
      if(isLeapYear(year)){
        // if(year%400==0&&year%100==0){
        //     console.log("Is a leap Year");
        // }
        if(year%400!=0&&year%100==0){
            console.log("Is not leap year");
        }
        else {
            console.log("Is a leap Year");
        }
      }
      else{
        console.log("Is not leap year");
      }
}

finalCheck(2000);
finalCheck(1700);
finalCheck(1800);
finalCheck(1600);
finalCheck(2024);
