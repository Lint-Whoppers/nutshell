// Purpose: This file handles all API requests for the Messages component. Author: Sam Pita

const messagesData = {
    getAllMessages() {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(response => response.json())
    },

    getSingleMessage(message) {
        return fetch(`http://localhost:8088/messages/${message.id}?_expand=user`)
        .then(response => response.json())
    }

    storeNewMessage(newMessageObject) {
        return fetch("http://localhost:8088/messages", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newMessageObject)
                })
                    .then(messages => messages.json())
    },

    updateMessageFields() {

    },

    updateSingleMesage(message, editedMessage) {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedMessage)
        })
    }
}

export default messagesData