let scissor = document.getElementById("scissor");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let choice = document.getElementById("choice");

scissor.addEventListener("click",()=>{
  choice.innerHTML="scissor";
}) 
rock.addEventListener("click",()=>{
  choice.innerHTML="rock";
})
paper.addEventListener("click",()=>{
  choice.innerHTML="paper";
})
let user_score = 0;
let comp_score = 0;
//winning possibilities 
//we store into list where value store in key:value pair  
const beats = {
    rock : "scissor",
    paper : "rock",
    scissor : "paper" 
  };
//generate computer
let random_choice = ()=>{
  const option = ["rock","paper","scissor"
  ]
 return Math.floor(Math.random()*3);
 

}
//actual game logic
const play = (user_choice)=>{
  console.log("User choice :",user_choice);

  let comp_choice = random_choice();
   console.log("computer choice :",comp_choice);

  if(user_choice === comp_choice){
    console.log("It's tie!..");
  }

  if(beats[user_choice] === comp_choice){
    console.log("You are win..");
    user_score++;
  }else{
    console.log("computer is win");
    comp_score++;
  }
  
}
 const option = ["rock","paper","scissor"]
 for(let i = 0;i<5;i++){
  const userChoice = option[Math.floor(Math.random()*3)];
  play(userChoice);
 }
  
