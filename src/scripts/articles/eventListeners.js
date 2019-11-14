//*** PURPOSE: TO HOST ALL EVENT LISTENERS FOR THE NEWS SECTION ***

import API from "./data.js"
import newsDom from "./articleDomRenderer.js"
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
            event.preventDefault()
            console.log("clicked")
            const title = document.querySelector("#newsTitleInput").value
            const synopsis = document.querySelector("#newsSynopsisInput").value
            const url = document.querySelector("#articleUrlInput").value
            const userId = sessionStorage.getItem("activeUser")
            
            //save journal entry (json-server returns it) then render it
            const inputFactory = (title, synopsis, url, userId) => {
                return {
                    "title": title,
                    "synopsis": synopsis,
                    "url": url,
                    "userId": userId
                }
            }
            const articleObject = inputFactory(title, synopsis, url, userId)
            console.log(articleObject)
            
            API.saveArticleEntry(articleObject) //POST
            .then(API.getAllArticles) //GET
            .then(response => newsDom.renderArticle(response)) //RENDER
        })
    },

    makeArticleComponent: (articleEntryTaco) => {
        return `
            <section>
                <h3>${articleEntryTaco.title}</h3>
                <p>${articleEntryTaco.synopsis}</p>
                <p>${articleEntryTaco.url}</p>
                <button id="editArticle--${articleEntryTaco.id}">Edit Article</button>
                <button id="deleteArticle--${articleEntryTaco.id}">Delete Article</button>
            </section>
            `
    }
}

export default newsEventListeners