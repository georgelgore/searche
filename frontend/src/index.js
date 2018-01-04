document.addEventListener('DOMContentLoaded', () => {
 const MAINDIV = document.querySelector("div.main")
 // Using data-value attribute to make selecting elements uniform
 MAINDIV.addEventListener('click', e => {
   // e.preventDefault()
  //  console.log(e.target)
   const clicked = e.target.dataset.value
   switch (clicked) {
     case "username-button":
       EventHandler.userExists().then(boolean =>{
         if(boolean === true){
             EventHandler.getExistingUser().then(obj => {
               obj.render()
             });
         } else {
             EventHandler.createNewUser().then(obj => {
               obj.render()
             });
         }

       })

       break;
     case "search-button":
       const searchInput = document.querySelector("input[data-value='search-input']").value.toLowerCase()
       if (searchInput) {
         GoogleHandler.makeGoogleRequest(searchInput)
         StackXAdapter.getStackDataAPI(searchInput).then(response => StackHandler.showResponses(response, searchInput))
         WikipediaAdapter.getWikiDataAPI(searchInput).then(wikiResults => WikipediaHandler.showResponses(wikiResults, searchInput))
        //  searchInput.value = ""
       }
       break;

    case "view-topic-button":
        Article.render(e.target.dataset.topicId)
      break;

    case "delete-article-button":
        // debugger
        EventHandler.deleteArticle(parseInt(e.target.dataset.id)).then(resp => {
          e.target.parentNode.outerHTML = ''
          Article.all = Article.all.filter(article => {
            return article.id !== parseInt(e.target.dataset.id)
          })
          // console.log(Article.all)
        })
      break;

    case "delete-topic-button":
        // debugger
        const articleBox = document.getElementById("article-box")

        EventHandler.deleteTopic(parseInt(e.target.dataset.id)).then(resp => {
          articleBox.innerHTML = ''
          Topic.all = Topic.all.filter(topic => {
            return topic.id !== parseInt(e.target.dataset.id)
          })
          Article.all = Article.all.filter(article => {
            return article.topicId !== parseInt(e.target.dataset.id)
          })

          // console.log(Topic.all)
          // console.log(Article.all)
          Topic.render()
        })
      break;

     case "add-article-button":
       const topicTitle = e.target.parentNode.getAttribute("data-topic-title");
       const articleDescription = e.target.parentNode.getAttribute("data-article-description")
       const articleLink = e.target.parentNode.getAttribute("data-article-link")
       const articleTitle = e.target.parentNode.getAttribute("data-article-title")

      //  console.log(articleTitle)

       const topic = {user_id: User.all[0].id, title: topicTitle}
      //  topicTitle.charAt(0).toUpperCase() + topicTitle.slice(1)
       EventHandler.topicExists(topic).then(boolean =>{
         if(boolean){
           const topicId = EventHandler.getExistingTopic(topic.title).id
          //  console.log(topicId)
           const article = {topic_id: topicId, title: articleTitle, url: articleLink, description: articleDescription}
           EventHandler.articleExists(article).then(boolean =>{
             if (boolean) {
             }else {
               EventHandler.createNewArticle(article).then(resp => Article.render(topicId))
             }
           })
         } else {
           EventHandler.createNewTopic(topic).then(top => {
             const topicId = EventHandler.getExistingTopic(topic.title).id
             const article = {topic_id: topicId, title: articleTitle, url: articleLink, description: articleDescription}
             Topic.render()
             EventHandler.createNewArticle(article).then(resp => Article.render(topicId))
           })
         }
       })
       break;

   }
 })

})
