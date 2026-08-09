const dates = document.getElementById("dates");
const print_month = document.getElementById("monthName");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let date = new Date();//new Date() return today's date

//all months start with 0 = january and 11 = december
function createCalendar(){ //display calender dates
   dates.innerHTML=""; //when we swap the month values should be empty ex. july nd swap to august then 
   let year = date.getFullYear();//return today's year
   let month = date.getMonth();//returns month number
   

   let first_day = new Date(year,month,1).getDay();//take this values as argument and first day is always start with 1 date .getDay() => DAY
   let last_date = new Date(year,month+1,0).getDate();//for finding total days in month ex. 7 = august after calling this function month = 7
   //+1 = 8 = september ; 0 gives day before 1st september ;last_date stores 31,august

   //for printing month name
   let monthName = date.toLocaleString("default",{
      month : "long"
    })
    print_month.textContent = `${monthName} ${year}`
   // console.log(monthName);
   // console.log(year);

     
   //empty space before 1st date of the month
   for(let i = 0;i<first_day;i++){
      dates.innerHTML += "<span></span>";
   }
   //for printing dates
   for(let i = 1;i < last_date ;i++){
      let day = document.createElement("span");
      day.textContent = i;
      dates.appendChild(day);
      day.style.fontSize="15px";
   }
   
}
createCalendar();
//previous month logic
prev.addEventListener("click",function(){
   date.setMonth(date.getMonth()-1);
   createCalendar();
})
//next month logic
next.addEventListener("click",function(){
   date.setMonth(date.getMonth()+1);
   createCalendar();
})
