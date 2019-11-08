export default {
    buildAndAppendWelcomePageHtml: () => {
    const welcomeHtml =  `     
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


