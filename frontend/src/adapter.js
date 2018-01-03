class Adapter{

  static getUserDataAPI(userName){
    return fetch(`http://localhost:3000/api/v1/users?username=${userName}`).then(resp => resp.json())
  }

  static createUserAPI(userName){
    return fetch('http://localhost:3000/api/v1/users',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: userName})
    }).then(resp => resp.json())
  }

  static createNewTopic(topic){

    return fetch('http://localhost:3000/api/v1/users',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userId: topic.userId, title: topic.title})
    }).then(resp => resp.json())

  }

  static createNewArticle(article)
  {
    return fetch('http://localhost:3000/api/v1/users',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({url: article.url, description: article.description})
    }).then(resp => resp.json())

  }

  static updateTopicWithArticle()
  {
    return fetch('http://localhost:3000/api/v1/users',{
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({url: article.url, description: article.description})
    }).then(resp => resp.json())

  }

}
