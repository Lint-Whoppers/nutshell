import welcomePage from "./welcomePage/welcomeHtml.js"
import events from "./welcomePage/eventListener.js";
import data from "./welcomePage/data.js";

sessionStorage.setItem("userId", 4)

// console.log(sessionStorage)

welcomePage.buildAndAppendWelcomePageHtml();
events.signUpButtonHandler();
events.logInButtonHandler();

// signUpForm.buildAndAppendSignUpForm();

// events.signUpButtonHandler();

// welcomePageTaco.buildAndAppendUserMainPage();

