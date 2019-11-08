export default {
    buildAndAppendWelcomePageHtml: () => {
    const welcomeHtml =  `     
    <nav id="navBar">
        <ul class="topnav">
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <img class="right" src="src/images/otter1.png">
        </ul>
    </nav>
    <div id="welcome-page">
        <h1>Welcome to Otter</h1>
        <button>Sign Up</button>
        <div id="popup-container"></div>
    </div>
`

const welcomePageContainer = document.querySelector("#page-container")
        welcomePageContainer.innerHTML = welcomeHtml
    }
}

