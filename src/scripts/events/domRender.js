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