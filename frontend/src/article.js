class Article{
  constructor(obj){
    this.id = obj.id
    this.topicId = obj.topic_id
    this.url = obj.url
    this.title = obj.title
    this.description = obj.description
    Article.all.push(this)
  }

  static render(topicId){
    const topic = Topic.findArticle(parseInt(topicId))
    document.getElementById("article-box").innerHTML = `<h2>${topic.title} Saved Articles</h2>`
    const articleBox = document.getElementById("article-box")
    let allArticles = Article.all.filter(article =>{
      return article.topicId === parseInt(topicId)
    })
    allArticles.forEach(article =>{
      let newDiv = document.createElement("div")
      newDiv.innerHTML += `<a href=${article.url} target="_blank">${article.title}</a>&nbsp&nbsp&nbsp<button class="btn btn-xs btn-primary" data-value="delete-article-button" data-id=${article.id} type="button">x</button><br>`
      newDiv.innerHTML += `<p>${article.description}</p>`
      // newDiv.innerHTML += `<button data-value="delete-article-button" data-id=${article.id} type="button">Delete Article</button>`
      articleBox.append(newDiv)
    })
  }

}
Article.all = []
