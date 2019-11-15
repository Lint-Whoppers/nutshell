import newsEventListeners from "./eventListeners.js"

const newsDom = {
        renderArticle: (articleTaco) => {
            let HtmlForAllArticles = ""
            articleTaco.forEach(articleTaco => {
                const articleHtml = newsEventListeners.makeArticleComponent(articleTaco)
                HtmlForAllArticles += articleHtml
            })
            const postArticle = document.querySelector("#newArticleContainer")
            postArticle.innerHTML = HtmlForAllArticles
        }
}

export default newsDom