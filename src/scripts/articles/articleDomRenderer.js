import newsEventListeners from "./articles/eventListeners"

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