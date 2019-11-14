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

    taskDeleteListener () {
        const deleteTaskButton = document.querySelector("#taskDisplay")
        deleteTaskButton.addEventListener("click", event => {
            if (event.target.id.startsWith("deleteTask--")) {
                const taskToDelete = event.target.id.split("--")[1]
                randomTask.deleteTaskEntries(taskToDelete)
                .then(randomTask.getAllTasks)
                .then(taskRender.displayTasksFunction);
            }
        });
    }
}

export default taskEvents;

