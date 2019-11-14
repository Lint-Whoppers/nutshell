import messagesForm from "./formManager.js"
import messagesData from "./data.js"
import messagesHtml from "./htmlMaker.js"

// Purpose: This file contains all of the event listeners within the Messages component. Author: Sam Pita

const messagesEvents = {
    createNewMessageButtonHandler() {
        const createNewMessageButton = document.querySelector("#newMessageSubmitButton")
        createNewMessageButton.addEventListener("click", () => {
        messagesForm.getNewMessageInput()
        })
    },

    handleMessageBoardEvent() {
        // const messageBoard = document.querySelector("#messageBoard")
        const idAttribute = event.target.id
        const messageId = idAttribute.split("--")[1]
        if (idAttribute.includes("editMessage--")) {
            //fetch request to GET single message
            messagesData.getSingleMessage(messageId)
                .then(response => {
                    const messageElementRef = document.querySelector(`#message--${message.id}`)
                    messageElementRef.innerHTML = messagesHtml.buildEditForm(response)
                })
        } else if (idAttribute.includes("updateMessage--")) {
            const updatedMessage = {
                // "userId":
                message: document.querySelector("#text-edit").value
                // "timestamp":
            }
        }
       

    }
}

export default messagesEvents