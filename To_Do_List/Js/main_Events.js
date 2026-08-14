const month_year = document.getElementById("month_year");
let date1 = new Date();
let month = date1.getMonth();
let year = date1.getFullYear();
 let monthName = date1.toLocaleString("default",{
      month : "long"
    })

let print_month_year = monthName +" "+ year;
month_year.innerHTML += print_month_year;
