let adjective;
let Shop_name;
let Another_word; 
//gives 10 random name
for(i=0;i<10;i++){
//creating random number for adjective
let random = Math.floor(Math.random()*3);
if (random == 0){
    adjective = "Crazy";
}else if(random == 1){
    adjective = "Amazing";
}else{
    adjective = "fire";
}

//creating random number for Shop_name
random = Math.floor(Math.random()*3);
if (random == 0){
    Shop_name = "Engine";
}else if(random == 1){
    Shop_name = "Foods";
}else{
    Shop_name = "fire";
}

//creating random number for Another_word
random = Math.floor(Math.random()*3);
if (random == 0){
    Another_word = "Bros";
}else if(random == 1){
    Another_word = "Limited";
}else{
    Another_word = "Hub";
}

console.log(`${adjective} ${Shop_name} ${Another_word}`)
}
