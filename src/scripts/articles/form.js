//PURPOSE: TO HOST THE HTML LAYOUT FOR ALL NEWS SECTION FORMS

const newsFormsObject = {

    buildAndAppendNewArticleForm: () => {
        const formThatAppearsAfterNewArticleButtonisClicked = `

        <form id = "newArticleContainer">
        <h3>New Article</h3>

        <input type = "hidden" id = "newsIdInput">

        <label for="articleTitle"><b>Article Title:</b></label>
        <input type="text" placeholder="Enter News Article Title" id="newsTitleInput" required>

        <label for="articleSynopsis"><b>Article Synopsis:</b></label>
        <input type="textarea" placeholder="Give a brief summary of the article" id="newsSynopsisInput" required rows="3" cols="40">

        <label for="articleURL"><b>Article URL:</b></label>
        <input type="text" placeholder="Place article URL here" id="articleUrlInput" required>

        </form>

        `
    }
}


































// const forms = {
//     buildAndAppendSignUpForm: () => {
//         const signUpForm = `
//         <div class="signUpForm-popup">
//             <form class="form-container">
//                 <h1>Sign Up</h1>

//                 <input type="hidden" id="idInput">

//                 <label for="firstName"><b>First Name</b></label>
//                 <input type="text" placeholder="Enter First Name" name="firstName" id="firstNameInput" required>

//                 <label for="lastName"><b>Last Name</b></label>
//                 <input type="text" placeholder="Enter Last Name" name="lastName" id="lastNameInput" required>
            
//                 <label for="email"><b>Email</b></label>
//                 <input type="text" placeholder="Enter Email" name="email" id="emailInput" required>
        
//                 <label for="psw"><b>Password</b></label>
//                 <input type="password" placeholder="Enter Password" name="psw" id="passwordInput" required>

//                 <label for="psw"><b>Confirm Password</b></label>
//                 <input type="confirmPassword" placeholder="Confirm Password" name="psw" id="confirmPasswordInput" required>
        
//                 <button type="submit" class="btn" id="createAccountButton">Create Account</button>
//             </form>
//         </div> 
//             `

//         const signUpFormContainerDiv = document.querySelector("#popup-container")
//         signUpFormContainerDiv.innerHTML = signUpForm
//     },

//     //Captures Sign Up form inputs to save new user information
// getUserInputAndSendToMain() {
//     event.preventDefault()
//     const firstName = document.querySelector("#firstNameInput").value
//     const lastName = document.querySelector("#lastNameInput").value
//     const email = document.querySelector("#emailInput").value
//     const password = document.querySelector("#passwordInput").value
//     const id = document.querySelector("#idInput").value

//     /* The below argument is shorthand for:
//     {
//         "firstName": firstName,
//         "lastName": lastName,
//         "email": email,
//         "password": password
//         "userID" userID
//     } */
   
//     // THis returns the new USER object from the database.json
//     return data.storeNewUser({firstName, lastName, email, password, id})
//     .then(() => data.getUserByEmail(email))
//     .then((user) => sessionStorage.setItem("activeUser", user[0].id))
//     // sessionStorage.setItem("activeuser", user.id))
//     .then(mainPage.buildAndAppendUserMainPage)
// },