// author:Michelle Johnson (build form)

import data from "./data.js"
import { format } from "url"


const eventCalendar = {
    buildAndAppendEventCalendar: () => {
        const calendar = `
            <form>
                <fieldset class="form-fieldset">
                    <label id="name" for="nameOfEvent">Name of Event</label>
                    <input type="text" name="nameOfEvent" id="nameOfEvent" placeholder="Name">
                </fieldset>
                <fieldset class="form-fieldset">
                    <label id="date" for="eventDate">Date of Event</label>
                    <input type="date" name="eventDate" id="eventDate">
                </fieldset>
                <fieldset class="form-fieldset">
                    <label id="location" for="eventLocation">Event Location</label>
                    <textarea name="eventLocation" id="eventLocation" placeholder = "Address" cols="20" rows="1"></textarea>
                </fieldset>
            </form>

            <button id="addEventButton">Add Event</button>
            
            <article class="eventLog"></article>
            `

        const eventCalendarContainer = document.querySelector("#events-container")
        eventCalendarContainer.innerHTML = calendar
    }
    
    
}

export default eventCalendar