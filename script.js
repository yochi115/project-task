
import Task from "./classes/Task.js";
import TaskManager from "./classes/Taskmanager.js";

let manager = new TaskManager();

window.click1 = function click1() {
  let ad=document.getElementById("add").value;
  manager.addTask(new Task(ad));
  showTaskesInList();
}

function showTaskesInList() {
  document.getElementById("myul").innerHTML = "";
  document.getElementById("mycom").innerHTML = "";
  
  for (let task of manager.taskArr) {
    if(task.completed==false){

    
    document.getElementById("myul").innerHTML += `
       <div class="row">
                <div class="col-6">
                    <ul>
                        <li class="list-group-item">
                            <label for="">${task.get("description")}</label>
                        </li>
                    </ul>
                </div>
                <div class="col-6">
                    <div onclick="clickcheck(${task.get("id")})" class="btn text-white bg-success"><i class="fa-solid fa-check "></i></div>
                    <div onclick="clickedit(${task.get("id")})" class="btn text-white bg-primary"><i class="fa-solid fa-pen "></i></div>
                    <div onclick="clickdell(${task.get("id")})" class="btn text-white bg-danger "><i onclick="clickdell()" class="fa-solid fa-trash "></i></div>
                </div>
            </div>
                     `;
  document.getElementById("add").value="";
  }else{ 
  
    document.getElementById("mycom").innerHTML += `
       <div class="row">
                <div class="col-6">
                    <ul >
                        <li  class="list-group-item">
                            <label  class = "text-decoration-line-through"  for="">${task.get("description")}</label>
                        </li>
                    </ul>
                </div>
                <div class="col-6">
                    <button disabled onclick="clickcheck()" class="btn text-white bg-success"><i class="fa-solid fa-check-double text-''white''"></i></button>
                    <button disabled onclick="clickedit()" class="btn text-white bg-primary"><i class="fa-solid fa-pen "></i></button>
                    <button disabled onclick="clickdell()" class="btn text-white bg-danger "><i  class="fa-solid fa-trash "></i></button>
                </div>
            </div>
                     `;
  }
 let myTaskList = [JSON.parse( localStorage.getItem("taskArr"))];
 myTaskList.push(manager);
 localStorage.setItem("taskArr", JSON.stringify(myTaskList)) ;
  }

window.clickdell = function clickdell(id) {
  manager.deleteTask(id);
  showTaskesInList();
}
window.clickedit = function clickedit(id) {
  let edittask = prompt("Enter new Task:");
  if (edittask != null && edittask !== "")
    manager.updateTaskDescription(id, edittask);
  showTaskesInList();
}

window.clickcheck = function clickcheck(id) {
manager.completeTask(id);
showTaskesInList(); 
}
}






