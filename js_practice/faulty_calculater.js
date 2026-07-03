let a = prompt("Enter a : ")
let b = prompt("Enter b : ")
 console.log("1. Addition")
 console.log("2. subtration")
 console.log("3. Multiplication")
 console.log("4. Division")
let random = Math.random();


 let choice = 3;
if(random < 0.1){
    switch(choice){
        case 1:
            console.log("Sum : "+(a-b))
            break;
        case 2:
            console.log("Sub : "+(a/b))
            break;
        case 3:
            console.log("Mul : "+(a+b))
            break;  
        case 4:
            console.log("Div : "+(a**b))
            break;  
    }
}else{
    switch(choice){
        case 2:
            console.log("Sub : "+(a-b))
            break;
        case 4:
            console.log("Div : "+(a/b))
            break;
        case 1:
            console.log("Sum : "+(a+b))
            break;  
        case 3:
            console.log("mul : "+(a*b))
            break;  
    }
}
