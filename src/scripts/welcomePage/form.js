export default {
    buildAndAppendSignUpForm: () => {
        const signUpForm = `
        <div class="form-popup" id="myForm">
            <form action="/action_page.php" class="form-container">
            <h1>Sign Up</h1>
        
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>

            <label for="psw"><b>Password</b></label>
            <input type="confirmPassword" placeholder="Confirm Password" name="psw" required>
        
            <button type="submit" class="btn">Login</button>
            <button type="submit" class="btn cancel" onclick="closeForm()">Close</button>
            </form>
        </div> 
            `

        const signUpFormContainerDiv = document.querySelector("#page-container")
        signUpFormContainerDiv.innerHTML = signUpForm
    }
}