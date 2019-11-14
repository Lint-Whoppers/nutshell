// Purpose: This file generates the HTML in the Messages component. Author: Sam Pita

const messagesHtml = {
buildMessagesHTML() {
    return `
    <h3 class="componentTitle" id="messagesTitle">Messages<h3>
    <section id="messageBoard">
    </section>
    <form id="newMessage">
    <textarea cols="40" rows="4" class="messageInput" id="newMessageTextInput" placeholder="Compose new message here..."></textarea>
    <i class="far fa-envelope" id="newMessageSubmitButton"></i>
    </form>
    `
    },

createMessageElementHTML(message) {
    return `
    <article class="messageElement" id="message--${message.id}">
    <div id="messageBody">
        <h5 id="messagePostedBy">${message.user.firstName} ${message.user.lastName}</h5>
        <p id="messageElementText">${message.message}</p>
        <p id="messageTimestamp">${message.timestamp}</p>
    </div>
    <div class="messageElementButtons">
        <i class="fas fa-pen" id="editMessage--${message.id}"></i>
        <i class="fas fa-trash-alt" id="deleteMessage--${message.id}"></i>
    </div>
    </article>
    `
    },

createReadOnlyMessageElementHTML(message) {
    return `
    <article class="messageElement" id="message--${message.id}">
    <h5 id="messagePostedBy">${message.user.firstName} ${message.user.lastName}</h5>
    <p id="messageElementText">${message.message}</p>
    <p id="messageTimestamp">${message.timestamp}</p>
    </article>
    `
    }
}

export default messagesHtml