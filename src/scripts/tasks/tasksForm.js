import randomTaskData from "./taskDataHandler.js";

// import mainPage from "./welcomePage/userMainPage.js";

const taskRender = {
buildAndAppendTaskContainer: () => {
    const taskContainerHtml = `
    <fieldset clas=""form-container">
    <div id="toDoListContainer" class="taskForm-popup">
      <h2>ToDo List</h2>
      <input type="text" id="taskInputField" placeholder="ToDo"/>
      
      
      <label for="taskName"><b>Task Name</b></label>
      <input="text" placeholder="Enter Task Name"
      name="taskName" id="taskNameInput" required>
      
      <input type="Date" id="taskDateInputField">

      <label for="taskExpectedDate"><b>Task Date</b></label>
      <input="text" placeholder="Enter Task Date"
      name="taskDate" id="taskDateInput" required>
      
      
      <button id="addTaskButton" class="addBtn"
      >Add Task</button>
      </div>
    </fieldset>
    `

const taskPageContainer = document.querySelector("#toDo-container")
taskPageContainer.innerHTML = taskContainerHtml;

},

// This allows me to grab the data from inputs and save it
getTaskAndSendToDisplay() {
  const taskName = document.querySelector("taskNameInput").value
  randomTaskData.getTaskAndSendToDisplay(taskName)
}

}


// mainPage.buildAndAppendTaskContainer()
export default taskRender;