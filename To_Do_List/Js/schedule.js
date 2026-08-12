const add_task = document.getElementById("add_task");
const tasks = document.getElementById("tasks");

add_task.addEventListener("click",function(){
   let input=document.createElement("input");
   input.type="text";
   input.placeholder="Enter New Task";

   tasks.appendChild(input);
   input.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        let label = document.createElement("label");
        let checkbox = document.createElement("input");
        checkbox.type="checkbox";

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(input.value));

        tasks.insertBefore(label,add_task);//for adding new task before + Add Other
        input.remove();
    }
   })
})
