import taskRender from "./tasksForm.js";

const taskEvents = {
    createTaskButtonHandler () {
        const createTaskButton = document.querySelector("#addTaskButton")
        createTaskButton.addEventListener("click", () => {
            taskRender.buildAndAppendTaskContainer()
        })
    },
}