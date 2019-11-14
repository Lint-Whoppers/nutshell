import randomTaskData from "./taskDataHandler.js";
import taskEvents from "./taskEventListeners.js";

// import mainPage from "./welcomePage/userMainPage.js";

const taskRender = {
buildAndAppendTaskContainer: () => {
    const taskContainerHtml = `
    <fieldset clas=""form-container">
    <div id="toDoListContainer" class="taskForm-popup">
      <h2>ToDo List</h2>
      
      <label for="taskName"><b>Task Name</b></label>
      <input type="text" placeholder="Enter Task Name"
      name="taskName" id="taskNameInput" required>

      <label for="taskExpectedDate"><b>Due Date</b></label>
      <input type="date" placeholder="Enter Due Date"
      name="taskDate" id="taskDateInput" required>
      
      
      <button id="addTaskButton" class="addBtn"
      >Add Task</button>
      </div>
      <section id="taskDisplay"></section>
    </fieldset>
    `

const taskPageContainer = document.querySelector("#toDo-container")
taskPageContainer.innerHTML = taskContainerHtml;

},

// This allows me to grab the data from inputs and save it
getTaskAndSendToDisplay() {
  // const taskName = document.querySelector("taskNameInput").value
  // randomTaskData.getTaskAndSendToDisplay(taskName)
  const name = document.querySelector("#taskNameInput").value
  const date = document.querySelector("#taskDateInput").value
  const userId = sessionStorage.getItem("activeUser")
  const completed = false

  return randomTaskData.storeNewTask({name, date, userId, completed})
},

displayTasksFunction: (taskEntries) => {
  // This for Each loop allows the computer to understand that my builder needs to go through Each object on the array instead of tring to get all of them and then seperate them. SO if you delete this it will return only undefined.
  taskEntries.forEach(task => {
    // I had to refactor this and declare this function as a variable so I could call it properly down the line.
    const displayTasks = `<article>
    <h2>${task.name}</h2>
    <p>${task.date}</p>
    <p>${task.completed}</p>
    <button id="editTask--${task.id}">Edit Task</button>
    <button id="deleteTask--${task.id}">Delete Task</button>
    </article>
    `
    
    const displayTaskContainer = document.querySelector("#taskDisplay")
    displayTaskContainer.innerHTML += displayTasks;
  });// debugger
    
  }

}


// mainPage.buildAndAppendTaskContainer()
export default taskRender;