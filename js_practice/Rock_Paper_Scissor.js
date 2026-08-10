//store all html id into js variable
let scissor = document.getElementById("scissor");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let user_count = document.getElementById("user_score");
let comp_count = document.getElementById("comp_score");//store html id
let result = document.getElementById("result");
let u_choice="";
let user_score = 0;
let comp_score = 0; 


//store user choice 
function getUser_choice(userChoice){
   u_choice = userChoice;
   console.log("user choice : ",u_choice);
}
scissor.addEventListener("click",()=>{
  getUser_choice("scissor");
  random_choice();          //u_choice store user choice
  play(u_choice,compChoice)//compChoice store generated computer choice

});

rock.addEventListener("click",()=>{
  getUser_choice("rock");
random_choice();
play(u_choice,compChoice)

});

paper.addEventListener("click",()=>{
  getUser_choice("paper");
  random_choice();
  play(u_choice,compChoice)
 
});


//generate computer choice
function random_choice(){
let choice = ["scissor","rock","paper"];
  let computer_choice = Math.floor(Math.random(choice)*3);
  compChoice = choice[computer_choice];
  console.log("comp choice :",compChoice);
  return compChoice;
}
//compare both

function play(user_Choice,comp_Choice){

  if(user_Choice === comp_Choice){
    console.log("It's draw");
    result.innerHTML="It's draw";
  }
  //winning possibility
  else if(user_Choice == "scissor" && comp_Choice == "paper" || user_Choice == "rock" && comp_Choice == "scissor" || user_Choice == "paper" && comp_Choice == "rock"){
    user_score++;
    console.log("User is win");
    result.innerHTML="You win";
  }else{
     comp_score++;
    console.log("Comp is win");
     result.innerHTML="comp win";
  }
  user_count.innerHTML = user_score;
  comp_count.innerHTML = comp_score;
}
