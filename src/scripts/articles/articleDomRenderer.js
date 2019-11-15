import newsEventListeners from "./eventListeners.js"
import newsHtmlLayout from "./HTMLLayoutforNewsSection.js"

const newsDom = {
        renderArticle: (articleTaco) => {
            let HtmlForAllArticles = ""
            articleTaco.forEach(articleTaco => {
                const articleHtml = newsHtmlLayout.makeArticleComponent(articleTaco)
                HtmlForAllArticles += articleHtml
            })
            const postArticle = document.querySelector("#articlesDisplayContainer")
            postArticle.innerHTML = HtmlForAllArticles
        }
}

export default newsDom