class EventHandler{

  static userExists(){
    let userName = document.getElementsByName("username")[0].value
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
    let userName = document.getElementsByName("username")[0].value
    return Adapter.createUserAPI(userName).then(obj =>{
      return new User(obj)
    })
  }

  static getExistingUser(){
    let userName = document.getElementsByName("username")[0].value;
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
