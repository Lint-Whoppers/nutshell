import data from "../events/data.js"

const eventCalendar = {
    buildAndAppendEventCalendar: () => {
        const calendar = `
            <form>
                <fieldset class="form-fieldset">
                    <label id="name" for="nameOfEvent">Name of Event</label>
                    <input type="text" name="nameOfEvent" id="nameOfEvent">
                </fieldset>
                <fieldset class="form-fieldset">
                    <label id="date" for="eventDate">Date of Evetn</label>
                    <input type="date" name="eventDate" id="eventDate">
                </fieldset>
                <fieldset class="form-fieldset">
                    <label id="location" for="eventLocation">Event Location</label>
                    <textarea name="eventLocation" id="eventLocation" cols="20" rows="1"></textarea>
                </fieldset>
            </form>

            <button id="addEventButton">Add Event</button>
            
            <article class="eventLog"></article>
            `

        const eventCalendarContainer = document.querySelector("#events-container")
        eventCalendarContainer.innerHTML = calendar
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
    },
    render: {
        renderEvent: (events) => {
            let HtmlForAllEvents = ""
            events.forEach(event => {
                const eventHtml = make.makeJournalEntryComponent(event)
                HtmlForAllEvents += eventHtml
            })
            const logArticle = document.querySelector(".eventLog")
            logArticle.innerHTML = HtmlForAllEvents
        }
    },
    addEventListeneeEventButton: () => {
        document.querySelector("#addEventButton").addEventListener("click", e => {
            const date = document.querySelector("#eventDate").value
            const name = document.querySelector("#eventName").value
            const location = document.querySelector("#eventLocation").value

            //save event entry (json-server returns it) then render it
            data.API.saveEvent({ date, name, location })
                .then(data.API.getEvent)
                .then(response => render.renderEvent(response))
        })
    }
}

export default eventCalendar