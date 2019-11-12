

const eventCalendar = {
    buildAndAppendEventCalendar: () => {
        const calendar = `
            <div id="caleandar"></div>
            `

        const eventCalendarContainer = document.querySelector("#events-container")
        eventCalendarContainer.innerHTML = calendar
    }
}

export default eventCalendar