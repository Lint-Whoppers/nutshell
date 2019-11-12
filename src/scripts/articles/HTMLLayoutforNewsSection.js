const newsHtmlLayout = {
    buildAndAppendNewsSectionHtml () {
       return `
       <h3>News<h3>
        <p> Test </p>
    <button id = "new-article-button">New Article</button>

    `
    const welcomePageContainer = document.querySelector("#news-container")
    welcomePageContainer.innerHTML = welcomeHtml

    }
}

export default newsHtmlLayout