import taskRender from "./tasksForm.js";
import randomTask from "./taskDataHandler.js";

let taskEvents = {
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
        })
    },
// This needs to be refactored to fit the example on the
    editTaskListener () {
        const editTaskButon = document.querySelector("#taskDisplay")
        editTaskButon.addEventListener("click", event => {
            if (event.target.id.startsWith("editTask--")) {
                const taskToEdit = event.target.id.split("--")[1]

                updateEditFields(taskToEdit)
            }
        })
    },
    saveButtonListener () {
        saveButtonListener.addeventListener("click", event => {
            const saveButtonId = document.querySelector("#taskId")

            if ( saveButtonId.value !== "") {
                editTask(taskId) }

                }
            }
        })
    }
}

export default taskEvents;