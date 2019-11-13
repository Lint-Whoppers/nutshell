

//*** PURPOSE: TO HOST ALL EVENT LISTENERS FOR THE NEWS SECTION ***


//*************************************************************************
//  New Article Button. When clicked, it takes you to the New Article Form.
//*************************************************************************
const newsEventListeners = {

    clickNewArticleHandler: () => {
        const clickNewArticleButton = document.querySelector("#new-article-button")
        clickNewArticleButton.addEventListener("click", () => {
            document.querySelector("#newArticleContainer").style.display = "block"
        })

    }
}

export default newsEventListeners