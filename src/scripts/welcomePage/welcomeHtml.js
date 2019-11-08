export default {
    buildAndAppendWelcomePageHtml: () => {
    const welcomeHtml =  `     
    <nav id="navBar">
        <ul class="topnav">
        <img class="left" src="src/images/otter1.png">
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <div id="welcome-page">
        <h1>Welcome to Otter</h1>
        <button id = "signUpButton">Sign Up</button>
        <p class="hyperlink" id="logInButton">Already have an account? Click here to login.</p>
        <div id="popup-container"></div>
    </div>
    <div class="footer">
        <p>Made By: Charles Jackson, Jeremiah Bell, Michelle Johnson, Sam Pita</p>
    </div>
`

// const welcomePageContainer = document.querySelector("#page-container")
//         welcomePageContainer.innerHTML = welcomeHtml
    },

    // THis should be the injector for the next page call
    buildAndAppendUserMainPage: () => {
        const mainPageHtml = `
        <nav id="navBar">
        <ul class="topnav">
            <img class="left" src="src/images/otter1.png">
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
        <div id="main-page">
            <h1>Otter</h1>
            <div id="Friends">Friends</div>
            <div id="Events">Events</div>
            <div id="Messages">Messages</div>
            <div id="News">News</div>
            <div id="ToDo">ToDo</div>
            <div id="popup-container"></div>
        </div>
        <div class="footer">
   <p>Made By: Charles Jackson, Jeremiah Bell, Michelle Johnson, Sam Pita</p>
</div>
        `
const mainPageContainer = document.querySelector("#page-container")
        mainPageContainer.innerHTML = mainPageHtml
    }
}

