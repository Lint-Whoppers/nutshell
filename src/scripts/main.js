import welcomePage from "./welcomePage/welcomeHtml.js"
import events from "./welcomePage/eventListener.js";
import data from "./welcomePage/data.js";
import eventsCalendar from "./events/events.js"

sessionStorage.setItem("userId", 4);




welcomePage.buildAndAppendWelcomePageHtml();
events.signUpButtonHandler();
events.logInButtonHandler();
import mainPage from "./welcomePage/userMainPage.js";


const startUpApplication = () => {
if (sessionStorage.getItem("activeUser") === null) {
    welcomePage.buildAndAppendWelcomePageHtml();
    events.signUpButtonHandler();
    events.logInFormButtonHandler();
} else
    {mainPage.buildAndAppendUserMainPage()}
}






startUpApplication()
