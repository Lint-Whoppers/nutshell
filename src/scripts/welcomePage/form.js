const forms = {
    buildAndAppendSignUpForm: () => {
        const signUpForm = `
        <div class="signUpForm-popup">
            <form class="form-container">
                <h1>Sign Up</h1>
            
                <label for="firstName"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" name="firstName" required>

                <label for="lastName"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lastName" required>
            
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required>
        
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>

                <label for="psw"><b>Confirm Password</b></label>
                <input type="confirmPassword" placeholder="Confirm Password" name="psw" required>
        
                <button type="submit" class="btn">Create Account</button>
                <button type="submit" class="btn signIn">Log In</button>
            </form>
        </div> 
            `

        const signUpFormContainerDiv = document.querySelector("#popup-container")
        signUpFormContainerDiv.innerHTML = signUpForm
    },

    buildAndAppendLogInForm: () => {
        const logInForm = `
        <div class="logInForm-popup">
            <form class="form-container">
                <h1>Log In</h1>
            
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required>
        
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>
        
                <button type="submit" class="btn signIn">Log In</button>
            </form>
        </div> 
            `

        const logInFormContainer = document.querySelector("#popup-container")
        logInFormContainer.innerHTML = logInForm
    }
}

export default forms