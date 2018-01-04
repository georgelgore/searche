document.addEventListener('DOMContentLoaded', () => {
 const MAINDIV = document.querySelector("div.main")
 // Using data-value attribute to make selecting elements uniform
 MAINDIV.addEventListener('click', e => {
   e.preventDefault()
   console.log(e.target)
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
       const searchInput = document.querySelector("input[data-value='search-input']")
       if (searchInput) {
         GoogleHandler.makeGoogleRequest(searchInput.value)
         StackXAdapter.getStackDataAPI(searchInput.value).then(response => StackHandler.showResponses(response, searchInput.value))
         WikipediaAdapter.getWikiDataAPI(searchInput.value).then(wikiResults => WikipediaHandler.showResponses(wikiResults, searchInput.value))

       }
       break;

     case "add-article-button":
       const topicTitle = e.target.parentNode.getAttribute("data-topic-title");
       const articleDescription = e.target.parentNode.getAttribute("data-article-description")
       const articleLink = e.target.parentNode.getAttribute("data-article-link")
       const articleTitle = e.target.parentNode.getAttribute("data-article-title")

      //  console.log(articleTitle)
       const topic = {user_id: User.all[0].id, title: topicTitle}

       EventHandler.topicExists(topic).then(boolean =>{
         if(boolean){
           const topicId = EventHandler.getExistingTopic(topic.title).id
          //  console.log(topicId)
           const article = {topic_id: topicId, title: articleTitle, url: articleLink, description: articleDescription}
           EventHandler.articleExists(article).then(boolean =>{
             if (boolean) {
             }else {
               EventHandler.createNewArticle(article)
             }
           })
         } else {
           EventHandler.createNewTopic(topic).then(top => {
             const topicId = EventHandler.getExistingTopic(topic.title).id
             const article = {topic_id: topicId, title: articleTitle, url: articleLink, description: articleDescription}
             EventHandler.createNewArticle(article)
             console.log(Topic.all)
             console.log(Article.all)
             Topic.render()
           })
         }
       })
       console.log(Topic.all)
       console.log(Article.all)
       break;

   }
 })

})
