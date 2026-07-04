let a = prompt("Enter a : ")
let operation = prompt("Enter operation : ")
let b = prompt("Enter b : ")
let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}
let random = Math.random();
if(random > 0.1){
    operation = obj[operation];
}//all things write in eval function 
   alert(`Result : ${eval(`${a} ${operation} ${b}`)}`);

