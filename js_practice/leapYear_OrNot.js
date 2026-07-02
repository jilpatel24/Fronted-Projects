console.log("Namste India!...");
let year = prompt("Enter Number");


if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
    console.log("Leap year")
}
else{
   console.log("Not Leap year") 
}
