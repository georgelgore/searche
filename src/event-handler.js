class EventHandler{

  static userExists(){
    let userName = document.querySelector("input[data-value='username-input']").value.toLowerCase()
    let backendObj = Adapter.getUserDataAPI(userName).then(obj => {
      if (obj.length === 0){
        return false
      }
      else {
        return true
      }
    })
    return backendObj
  }

  static createNewUser(){
    let userName = document.querySelector("input[data-value='username-input']").value.toLowerCase()
    return Adapter.createUserAPI(userName).then(obj =>{
      return new User(obj)
    })
  }

  static deleteArticle(id)
  {
    return Adapter.deleteArticleAPI(id).then(resp =>{
      console.log(resp)
    })

  }

  static deleteTopic(id)
  {
    return Adapter.deleteTopicAPI(id).then(resp =>{
      console.log(resp)
    })

  }

  static getExistingUser(){
    let userName = document.querySelector("input[data-value='username-input']").value.toLowerCase()
    return Adapter.getUserDataAPI(userName).then(obj => {
        return new User(obj[0])
    })
  }

  static topicExists(topic){
    let backendObj = Adapter.getTopicDataAPI(topic.title).then(obj => {
      if (obj.length === 0){
        return false
      }
      else {
        return true
      }
    })
    return backendObj
  }

  static createNewTopic(topic){
    return Adapter.createNewTopicAPI(topic).then(obj => {
      return new Topic(obj)
    })
  }

  static getExistingTopic(title){
    return Topic.all.find(top => top.title === title)
  }

  static articleExists(article){
    let backendObj = Adapter.getArticleDataAPI(article.url, article.topic_id).then(obj => {
      if (obj.length === 0){
        return false
      }
      else {
        return true
      }
    })
    return backendObj
  }

  static createNewArticle(article)
  {
    return Adapter.createNewArticleAPI(article).then(obj => {
      return new Article(obj)
    })

  }

  static updateTopicWithArticle()
  {
    return Adapter.updateTopicWithArticle()

  }


}
