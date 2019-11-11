import { runInNewContext } from "vm"

// Purpose: This file is responsible for all fetch calls to the API


const data = {
//GET request to get user data and store id to sessionStorage
/* getUserData() {
        
    }, */
    
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
        .then(console.log(newUserObject))
    }
}

export default data