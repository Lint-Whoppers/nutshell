import data from "../events/data.js"
import render from "../events/domRender.js"


export default {
    addEventListenerToAddEventButton: () => {
        document.querySelector("#addEventButton").addEventListener("click", e => {
            console.log("click")
            const name = document.querySelector("#nameOfEvent").value
            const date = document.querySelector("#eventDate").value
            const location = document.querySelector("#eventLocation").value
            const userId = sessionStorage.getItem("activeUser")
            
            //save journal entry (json-server returns it) then render it
            data.saveEventEntry({ name, date, location, userId})
            
            .then(data.getAllEvents)
            .then(response => render.renderEvent(response))

        })
    },
    makeEventComponent: (eventEntry) => {
        return `
            <section>
                <h3>${eventEntry.name}</h3>
                <p>${eventEntry.date}</p>
                <p>${eventEntry.location}</p>
                <button id="editEvent--${eventEntry.id}">Edit Event</button>
                <button id="deleteEvent--${eventEntry.id}">Delete Event</button>
            </section>
            `
    },
    deleteButtonListener () {
        const deleteEvent = document.querySelector(".eventLog")

        deleteEvent.addEventListener("click", event => {
            console.log("click")
            if (event.target.id.startsWith("deleteEvent--")) {
                // Extract event id from the button's id attribute
                const eventToDelete = event.target.id.split("--")[1]

                // Invoke the delete method, then get all events and render them
                data.deleteEvent(eventToDelete)
                    .then(data.getAllEvents)
                    .then(response => render.renderEvent(response))
            }
        })
    }
}