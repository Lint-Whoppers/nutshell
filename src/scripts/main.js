import welcomePage from "./welcomePage/welcomeHtml.js"
import events from "./welcomePage/eventListener.js";
import data from "./welcomePage/data.js";
import tasks from "./tasks/domInjector";

sessionStorage.setItem("userId", 4);




welcomePage.buildAndAppendWelcomePageHtml();
events.signUpButtonHandler();
events.logInButtonHandler();
tasks.makeTaskEntryComponent();



