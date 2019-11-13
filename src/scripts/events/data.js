// Use `fetch` with the POST method to add your entry to your API
export default {
    saveEventEntry: (event) => { //rename variable
        return fetch("http://localhost:8088/events", { // Replace "url" with your API's URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
        .then(response => response.json())
    },
    getAllEvents() {
        return fetch("http://localhost:8088/e")
            .then(response => response.json())
    }
}