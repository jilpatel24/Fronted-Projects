JS CODE :-
let btn = document.querySelectorAll(".box");
let winner = document.getElementById("msg");

let is_O_Turn = true;//if true = o else false=x
let is_game= false;

const winConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

let boxes = ["","","","","","","","",""];

btn.forEach((box,index)=>{
  box.addEventListener('click',()=>{
  if(boxes[index] !== "" || is_game ){
    return;
  }
  let currentSymbol = is_O_Turn ? "O" : "X";

  box.innerText = currentSymbol;
  boxes[index] = currentSymbol;

  if(check_win()){
    is_game=true;
    winner.innerHTML =` winner is ${currentSymbol}`;
  }
  is_O_Turn = !is_O_Turn;
});
});

function check_win(){
  for(let condition of winConditions){
    const [a,b,c] = condition;

    if(
      boxes[a] !== "" &&
      boxes[a] === boxes[b] &&
      boxes[a] === boxes[c]
    ){
      console.log(`player ${boxes[a]} is winn!.. `);
      return true;
    }
  }
 
  return false;
}
  
