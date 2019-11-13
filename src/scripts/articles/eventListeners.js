const newsEventListeners = {

    clickNewArticleHandler: () => {
        const clickNewArticleButton = document.querySelector("#new-article-button")
        clickNewArticleButton.addEventListener("click", () => {
            console.log("The New Article Button has been clizzicked!!")
        })

    }
}

export default newsEventListeners