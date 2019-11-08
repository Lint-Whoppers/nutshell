export default {
    buildWelcomePageHtml: () => {
    const welcomeHtml =  `     
    <div id="welcome-page">
        <h1>Welcome to Otter</h1>
        <button>Sign Up</button>
    </div>
`

const welcomePageContainer = document.querySelector("#page-container")
        welcomePageContainer.innerHTML = welcomeHtml
    }
}


