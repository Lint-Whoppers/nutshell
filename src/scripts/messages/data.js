// Purpose: This file handles all API requests for the Messages component. Author: Sam Pita

const messagesData = {
    getAllMessages() {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(response => response.json())
    },

    storeNewMessage(newMessageObject) {
        return fetch("http://localhost:8088/messages", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newMessageObject)
                })
                    .then(contacts => contacts.json())
    }
}

export default messagesData