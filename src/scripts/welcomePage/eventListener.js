// *** Purpose: create event listeners for each button ***


// Event listener for Sign Up button

const events = {            //  Declare object and create method
    signUpButtonHandler () {
    const signUpButton = document.querySelector("#signUpButton")
    signUpButton.addEventListener("click", () => {
        document.querySelector(".form-popup").style.display = "block"
    })
}
}

export default events