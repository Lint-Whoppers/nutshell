import randomTaskData from "./taskDataHandler.js";

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

displayTasksFunction: (taskEntry) => {
  return `
  <article>
    <h2>${taskEntry.name}</h2>
    <p>${taskEntry.date}</p>
    <p>${taskEntry.completed}</p>
    <button id="editTask--${taskEntry.id}">Edit Task</button>
    <button id="deleteTask--${taskEntry.id}">Delete Task</button>
  </article>
  `
}

}


// mainPage.buildAndAppendTaskContainer()
export default taskRender;