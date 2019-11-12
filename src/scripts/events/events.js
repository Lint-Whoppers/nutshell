import form from "../events/form.js"
import data from "../events/data.js"

data.API.getEvent().then((event) => data.render.renderJournalEntry(event))

// renderJournalEntries.renderJournalEntries()
form.eventCalendar.addEventListeneeEventButton()

data.API.getAllEvents().then(render)