//PURPOSE: TO HOST THE HTML LAYOUT FOR ALL NEWS SECTION FORMS

const newsFormsObject = {

    buildAndAppendNewArticleForm: () => {
        const formThatAppearsAfterNewArticleButtonisClicked = `

        <form id = "newArticleContainer">
        <h3>New Article</h3>

        <input type = "hidden" id = "newsIdInput">

        <label for="articleTitle"><b>Article Title:</b></label>
        <input type="text" placeholder="Enter News Article Title" id="newsTitleInput" required>

        <label for="articleSynopsis"><b>Article Synopsis:</b></label>
        <input type="textarea" placeholder="Give a brief summary of the article" id="newsSynopsisInput" required rows="3" cols="40">

        <label for="articleURL"><b>Article URL:</b></label>
        <input type="text" placeholder="Place article URL here" id="articleUrlInput" required>

        </form>

        `
        const popUpContainer = document.querySelector("#popup-container")
        popUpContainer.innerHTML = formThatAppearsAfterNewArticleButtonisClicked
    }
}

export default newsFormsObject