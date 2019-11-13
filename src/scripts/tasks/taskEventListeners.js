import taskRender from "./tasksForm.js";
import randomTask from "./taskDataHandler.js";

const taskEvents = {
    createTaskButtonHandler () {
        const createTaskButton = document.querySelector("#addTaskButton")
        createTaskButton.addEventListener("click", () => {
            const newTaskObject = document.querySelector("#taskInputField");
            randomTask.storeNewTask(newTaskObject)
            // console.log("click")
        })
    },
}

export default taskEvents;