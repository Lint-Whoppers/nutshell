import welcomePage from "./welcomePage/welcomeHtml.js"
import events from "./welcomePage/eventListener.js";
import data from "./welcomePage/data.js";

// sessionStorage.setItem("userID", 1)

// console.log(sessionStorage)

welcomePage.buildAndAppendWelcomePageHtml();
events.signUpButtonHandler();
events.logInButtonHandler();

// signUpForm.buildAndAppendSignUpForm();

// events.signUpButtonHandler();

// welcomePageTaco.buildAndAppendUserMainPage();

