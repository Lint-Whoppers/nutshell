import messagesData from "./data.js"

// Purpose: This file generates the HTML in the Messages component. Author: Sam Pita

const messagesHtml = {
buildMessagesHTML() {
    return `
    <h3 id="messagesTitle">Messages<h3>
    <section id="messageBoard">
    </section>
    <section id="newMessage">
    <label class="messageLabel">Date / Time</label>
    <input type="datetime-local" class="messageInput" id="newMessageDateTime">
    <label class="messageLabel">Message</label>
    <textarea cols="40" rows="5" class="messageInput" id="newMessageTextInput"></textarea>
    <button type="button" id="newMessageSubmitButton">Submit</button>
    </section>
    `
    },

    createMessageElement(message) {
        return `
        <article id="message--${message.id}">
        <h5 id="messagePostedBy">${message.user.firstName} ${message.user.lastName}</h5>
        `
    }

}

export default messagesHtml