// author:Michelle Johnson (build form)

import data from "../events/data.js"
import { format } from "url"


const eventCalendar = {
    buildAndAppendEventCalendar: () => {
        const calendar = `
            <form>
                <fieldset class="form-fieldset">
                    <label id="name" for="nameOfEvent">Name of Event</label>
                    <input type="text" name="nameOfEvent" id="nameOfEvent">
                </fieldset>
                <fieldset class="form-fieldset">
                    <label id="date" for="eventDate">Date of Event</label>
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
    }
    
}

export default eventCalendar