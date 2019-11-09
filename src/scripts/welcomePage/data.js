// Purpose: This file is responsible for all fetch calls to the API


const data = {
//POST request to post new user ID to API upon sign up
storeNewUser(newUserObject) {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserObject)
    })
        .then(users => users.json())
    }
}

export default data