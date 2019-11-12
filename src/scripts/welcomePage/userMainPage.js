<<<<<<< HEAD
import eventCalendar from "../events/form.js"
import html from "../messages/htmlMaker"
=======
import messagesHtml from "../messages/htmlMaker"
import messagesData from "../messages/data"
>>>>>>> master

// This file is responsible for building the main page after user logs in

// This should be the injector for the next page call
const mainPage = {
buildAndAppendUserMainPage: () => {
    const mainPageHtml = `
    <nav id="navBar">
    <ul class="topnav">
        <img class="left" src="src/images/otter1.png">
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>
    <h1>Otter</h1>
    <div id="main-page">
        <div id="friends-container">Friends</div>
        <div id="events-container">Events</div>
        <div id="messages-container"></div>
        <div id="news-container">News</div>
        <div id="toDo-container">ToDo</div>
        <div id="popup-container"></div>
    </div>
    <div class="footer">
        <p>Made By: Charles Jackson, Jeremiah Bell, Michelle Johnson, Sam Pita</p>
    </div>
    `
    const mainPageContainer = document.querySelector("#page-container")
    mainPageContainer.innerHTML = mainPageHtml

<<<<<<< HEAD
    // event
    eventCalendar.buildAndAppendEventCalendar()
    //APPEND NEW THINGS HERE
    html.buildandAppendMessagesHTML()
=======
    //COMPONENT-BUILDING FUNCTIONS GO HERE
    messagesHtml.buildAndAppendMessagesHTML()
    messagesData.getAllMessages()
>>>>>>> master
    }
}


export default mainPage