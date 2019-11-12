const newsHtmlLayout = {
    buildAndAppendNewsSectionHtml () {
        const newsHtml = `
       <h3>News<h3>
        <p> Test </p>
    <button id = "new-article-button">New Article</button>

    `
    const newsContainer = document.querySelector("#news-container")
    newsContainer.innerHTML = newsHtml

    }
}

export default newsHtmlLayout