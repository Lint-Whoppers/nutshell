// Purpose: This file generates the HTML in the Messages component. Author: Sam Pita

const html = {
buildAndAppendMessagesHTML() {
    const messagesHTML = `
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
    const messagesContainer = document.querySelector("#messages-container")
    messagesContainer.innerHTML = messagesHTML
}


}

export default html