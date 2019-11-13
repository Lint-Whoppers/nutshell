import eventEntry from "../events/eventListeners.js"

export default {
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
                const eventHtml = render.makeEventComponent(event)
                HtmlForAllEvents += eventHtml
            })
            const logArticle = document.querySelector(".entryLog")
            logArticle.innerHTML = HtmlForAllEvents
            console.log(render)
        }
    }
}