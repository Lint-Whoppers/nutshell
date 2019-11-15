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
import messagesEvents from "./messages/eventListeners.js";
import randomTask from "./tasks/taskDataHandler";
import API from "./articles/data.js";

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

        //DATA-RETRIEVING AND APPENDING FUNCTIONS GO HERE
        messagesData.getAllMessages().then(messages => dom.renderAllMessagesToDom(messages))
        eventCalendar.buildAndAppendEventCalendar()
        data.getAllEvents().then(response => render.renderEvent(response))
        randomTask.getAllTasks().then(response => tasks.displayTasksFunction(response))
       

        // EVENT LISTENERS GO HERE
        eventListener.addEventListenerToAddEventButton()
        newsEventListeners.clickNewArticleHandler()
        newsEventListeners.clickSaveArticleHandler()
        taskEvents.createTaskButtonHandler()
        taskEvents.taskDeleteListener()
        eventListener.deleteButtonListener()
        messagesEvents.createNewMessageButtonHandler()
        messagesEvents.attachMessageElementBttnHandlers()
    }
}

startUpApplication()

