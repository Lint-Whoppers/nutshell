// *** Purpose: create event listeners for each button ***
import forms from "./form.js"

// Event listener for Sign Up button

const events = {            //  Declare object and create method
    createAccountButtonHandler () {
    const createAccountButton = document.querySelector("#createAccountButton")
    createAccountButton.addEventListener("click", () => {
        forms.getUserInputAndSendToMain()
    })
    },

    signUpButtonHandler () {
    const signUpButton = document.querySelector("#signUpButton")
    signUpButton.addEventListener("click", () => {
        forms.buildAndAppendSignUpForm()
        document.querySelector(".signUpForm-popup").style.display = "block"
        this.createAccountButtonHandler()
    })
},

    logInButtonHandler () {
    const logInButton = document.querySelector("#logInButton")
    logInButton.addEventListener("click", () => {
        forms.buildAndAppendLogInForm()
        document.querySelector(".logInForm-popup").style.display = "block"
    })
}

}

export default events