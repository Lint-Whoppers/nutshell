import messagesHtml from "./htmlMaker.js"
import messagesData from "./data.js"
//Purpose: This file injects components onto the DOM. Author: Sam Pita

const dom = {
renderMessagesContainerToDom() {
    const messagesContainer = document.querySelector("#messages-container")
    const messagesHTML = messagesHtml.buildMessagesHTML()
    messagesContainer.innerHTML = messagesHTML
    },

renderAllMessagesToDom(messages) {
    const messageBoard = document.querySelector("#messageBoard")
    messages.forEach(message => {
        const messageElementHTML = messagesHtml.createMessageElementHTML(message)
        messageBoard.innerHTML += messageElementHTML
    })
    }
}

export default dom