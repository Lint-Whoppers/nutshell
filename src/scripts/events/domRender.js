import eventEntry from "../events/eventListeners.js"

export default {
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