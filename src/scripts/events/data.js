const API = {
    // Use `fetch` with the POST method to add your entry to your API
    saveEvent: (entry) => { //rename variable
        return fetch("http://localhost:8088/events", { // Replace "url" with your API's URL
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    getEvent: function () {
        return fetch("http://localhost:8088/events")
            .then(response => response.json())
    },
    getAllEvents() {
        return fetch("http://localhost:8088/events")
            .then(response => response.json())
    }


}

export default API