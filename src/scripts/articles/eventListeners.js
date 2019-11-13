//*** PURPOSE: TO HOST ALL EVENT LISTENERS FOR THE NEWS SECTION ***


//*************************************************************************
//  New Article Button. When clicked, it takes you to the New Article Form.
//*************************************************************************
const newsEventListeners = {

    clickNewArticleHandler: () => {
        const clickNewArticleButton = document.querySelector("#new-article-button")
        clickNewArticleButton.addEventListener("click", () => {
            console.log("The New Article Button has been clizzicked!!")
        })

    }
}

export default newsEventListeners