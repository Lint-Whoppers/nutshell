import welcomePage from "./welcomePage/welcomeHtml.js"
import events from "./welcomePage/eventListener.js";
import data from "./welcomePage/data.js";
import tasks from "./tasks/tasksForm.js";
import mainPage from "./welcomePage/userMainPage.js";
import eventListener from "./events/eventListeners"



// sessionStorage.setItem("userId", 4);
// welcomePage.buildAndAppendWelcomePageHtml();
// events.signUpButtonHandler();
// events.logInFormButtonHandler();


const startUpApplication = () => {
    if (sessionStorage.getItem("activeUser") === null) {
        welcomePage.buildAndAppendWelcomePageHtml();
        events.signUpButtonHandler();
        events.logInFormButtonHandler();
    } else {
        mainPage.buildAndAppendUserMainPage()
        tasks.buildAndAppendTaskContainer();
        // event
        eventCalendar.buildAndAppendEventCalendar()
    }
}


startUpApplication()

eventListener.addEventListenerToAddEventButton()
