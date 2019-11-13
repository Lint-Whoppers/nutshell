// Purpose: This file handles all API requests for the Messages component. Author: Sam Pita

const messagesData = {
    getAllMessages() {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(response => response.json())
    }
}

export default messagesData