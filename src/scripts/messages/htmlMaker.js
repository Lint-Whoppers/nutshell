import messagesData from "./data.js"

// Purpose: This file generates the HTML in the Messages component. Author: Sam Pita

const messagesHtml = {
buildMessagesHTML() {
    return `
    <h3 class="componentTitle" id="messagesTitle">Messages<h3>
    <section id="messageBoard">
    </section>
    <section id="newMessage">
    <label class="messageLabel">Message</label>
    <textarea cols="40" rows="2" class="messageInput" id="newMessageTextInput"></textarea>
    <button type="button" id="newMessageSubmitButton">Submit</button>
    </section>
    `
    },

createMessageElementHTML(message) {
    return `
    <article class="messageElement" id="message--${message.id}">
    <h5 id="messagePostedBy">${message.user.firstName} ${message.user.lastName}</h5>
    <p>${message.message}</p>
    <p>${message.timestamp}</p>
    </article>
    `
    }

}

export default messagesHtml