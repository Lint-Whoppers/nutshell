import welcomePageTaco from "./welcomePage/welcomeHtml.js"
import events from "./welcomePage/eventListener.js";


// welcomePageTaco.buildAndAppendWelcomePageHtml();

// signUpForm.buildAndAppendSignUpForm();

// events.signUpButtonHandler();

welcomePageTaco.buildAndAppendUserMainPage();
events.signUpButtonHandler();
events.logInButtonHandler();
