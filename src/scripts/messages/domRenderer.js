import messagesHtml from "./htmlMaker.js"

//Purpose: This file injects components onto the DOM. Author: Sam Pita

const dom = {
renderMessagesContainerToDom() {
    const messagesContainer = document.querySelector("#messages-container")
    const messagesHTML = messagesHtml.buildMessagesHTML()
    console.log(messagesHTML)
    messagesContainer.innerHTML = messagesHTML
    },

renderAllMessagesToDom(messages) {
    const messageBoard = document.querySelector("#messageBoard")

    messages.forEach(message => {
        let contactElementHTML = contactElement.createContactElement(contact)
        listContainer.innerHTML += contactElementHTML
        // const messagesFromApi = document.createElement("article")
        messagesData.getAllMessages().then(response => console.log(response))
    })
    }
}

export default dom