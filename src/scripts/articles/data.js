const API = {
saveArticleEntry: (article) => {    //article is a taco variable
    return fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(article)
    })
    .then(response => response.json())
},

getAllArticles() {
    return fetch("http://localhost:8088/articles")
        .then(response => response.json())
}
}

export default API