// Purpose: This file handles all API requests for the Messages component

const messagesData = {
    getAllMessages() {
        return fetch("http://localhost:8088/messages")
            .then(response => response.json())
            .then(response => console.log(response.json))
    }
}

export default messagesData