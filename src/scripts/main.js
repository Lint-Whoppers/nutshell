import welcomePageTaco from "./welcomePage/welcomeHtml.js"
import events from "./welcomePage/eventListener.js";


welcomePageTaco.buildAndAppendWelcomePageHtml();

events.signUpButtonHandler();
events.logInButtonHandler();