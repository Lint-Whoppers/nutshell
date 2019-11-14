//*** PURPOSE: TO HOST ALL EVENT LISTENERS FOR THE NEWS SECTION ***

import API from "./data.js"
//*************************************************************************
//  New Article Button. When clicked, it takes you to the New Article Form.
//*************************************************************************
const newsEventListeners = {

    clickNewArticleHandler: () => {
        const clickNewArticleButton = document.querySelector("#new-article-button")
        clickNewArticleButton.addEventListener("click", () => {
            document.querySelector("#newArticleContainer").style.display = "block" //<-- block ???
        })

    },

    clickSaveArticleHandler: () => {
        const clickSaveArticleButton = document.querySelector("#save-article-button")
        .addEventListener("click", () => {
            console.log("clicked")
            const title = document.querySelector("#newsTitleInput").value
            const synopsis = document.querySelector("#newsSynopsisInput").value
            const url = document.querySelector("#articleUrlInput").value
            const userId = sessionStorage.getItem("activeUser")
            
            //save journal entry (json-server returns it) then render it
            API.saveArticleEntry({ title, synopsis, url, userId})
            
            .then(API.getAllArticles)
            .then(response => render.renderArticleTaco(response))
        })
    },

    makeArticleComponent: (articleEntryTaco) => {
        return `
            <section>
                <h3>${articleEntryTaco.newsTitle}</h3>
                <p>${articleEntryTaco.synopsis}</p>
                <p>${articleEntryTaco.articleUrl}</p>
                <button id="editArticle--${articleEntryTaco.id}">Edit Article</button>
                <button id="deleteArticle--${articleEntryTaco.id}">Delete Article</button>
            </section>
            `
    }
}

export default newsEventListeners