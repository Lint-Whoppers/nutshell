import save from "../events/data.js"

export default {
    addEventListenerToAddEventButton: () => {
        document.querySelector("#addEventButton").addEventListener("click", e => {
            console.log("click")
            const name = document.querySelector("#nameOfEvent").value
            const date = document.querySelector("#eventDate").value
            const location = document.querySelector("#eventLocation").value
            
            //save journal entry (json-server returns it) then render it
            save.saveEventEntry({ name, date, location})
            
            // .then(API.API.getJournalEntries)
            // .then(response => render.render.renderJournalEntry(response))

        })
    },
    makeEventComponent: (eventEntry) => {
        return `
            <section>
                <h3>${eventEntry.name}</h3>
                <p>${eventEntry.date}</p>
                <p>${eventEntry.location}</p>
                <button id="editEntry--${eventEntry.id}">Edit Event</button>
                <button id="deleteEntry--${eventEntry.id}">Delete Event</button>
            </section>
            `
    }
}