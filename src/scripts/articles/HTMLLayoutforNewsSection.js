const newsHtmlLayout = {
    buildAndAppendNewsSectionHtml() {
        const newsHtml = `
       <h3>News<h3>
        
        <button id = "new-article-button">New Article</button>

       
        <div id="newArticleForm-PopupContainer"></div>
        
    `
        const newsContainer = document.querySelector("#news-container")
        newsContainer.innerHTML = newsHtml

    }
}

export default newsHtmlLayout