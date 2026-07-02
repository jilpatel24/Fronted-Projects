let num = 1234;
let rev=0;
console.log("num : "+num);

while(num != 0){
 digit = num % 10;
 rev = rev * 10 + digit;
 num =Math.floor(num/10);
}
console.log("reverse "+rev)



