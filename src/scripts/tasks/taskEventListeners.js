import taskRender from "./tasksForm.js";
import randomTask from "./taskDataHandler.js";

const taskEvents = {
    createTaskButtonHandler () {
        const createTaskButton = document.querySelector("#addTaskButton")
        createTaskButton.addEventListener("click", () => {
            // const newTaskObject = document.querySelector("#taskInputField").value;
            // console.log(newTaskObject)
            taskRender.getTaskAndSendToDisplay()
            // console.log("click")
        })
    },
}

export default taskEvents;