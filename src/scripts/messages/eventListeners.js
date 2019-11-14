import messagesForm from "./formManager.js"

// Purpose: This file contains all of the event listeners within the Messages component. Author: Sam Pita

const messagesEvents = {
    createNewMessageButtonHandler() {
        const createNewMessageButton = document.querySelector("#newMessageSubmitButton")
        createNewMessageButton.addEventListener("click", () => {
        messagesForm.getNewMessageInput()
        })
    }
}

export default messagesEvents