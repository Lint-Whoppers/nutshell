import welcomePage from "./welcomePage/welcomeHtml.js"
import events from "./welcomePage/eventListener.js";
import tasks from "./tasks/tasksForm.js";
import mainPage from "./welcomePage/userMainPage.js";
import eventListener from "./events/eventListeners"
import eventCalendar from "./events/formHtml.js"
import newsHtmlLayout from "./articles/HTMLLayoutforNewsSection"
import messagesHtml from "./messages/htmlMaker"
import messagesData from "./messages/data"
import newsEventListeners from "./articles/eventListeners"

import render from "./events/domRender.js"
import data from "./events/data.js"
import dom from "./messages/domRenderer.js";
import taskEvents from "./tasks/taskEventListeners.js";

const startUpApplication = () => {
    if (sessionStorage.getItem("activeUser") === null) {
        welcomePage.buildAndAppendWelcomePageHtml();
        events.signUpButtonHandler();
        events.logInFormButtonHandler();
    } else {
        mainPage.buildAndAppendUserMainPage()

        //COMPONENT-BUILDING FUNCTIONS GO HERE
        tasks.buildAndAppendTaskContainer();
        newsHtmlLayout.buildAndAppendNewsSectionHtml()
        messagesHtml.buildMessagesHTML()
        dom.renderMessagesContainerToDom()
        messagesData.getAllMessages().then(messages => dom.renderAllMessagesToDom(messages))
        eventCalendar.buildAndAppendEventCalendar()
        data.getAllEvents().then(response => render.renderEvent(response))
        
        // EVENT LISTENERS GO HERE
        eventListener.addEventListenerToAddEventButton()
        newsEventListeners.clickNewArticleHandler()
        newsEventListeners.clickSaveArticleHandler()
        taskEvents.createTaskButtonHandler()
        eventListener.deleteButtonListener()
    }
}

startUpApplication()

