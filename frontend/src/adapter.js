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

  static getTopicDataAPI(title){
    return fetch(`http://localhost:3000/api/v1/topics?title=${title}`).then(resp => resp.json())
  }

  static createNewTopicAPI(topic){

    return fetch('http://localhost:3000/api/v1/topics',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(topic)
    }).then(resp => resp.json())

  }

  static getArticleDataAPI(url, topic_id){
    return fetch(`http://localhost:3000/api/v1/articles?url=${url}&topic_id=${topic_id}`).then(resp => resp.json())
  }
  static deleteArticleAPI(id)
  {
    return fetch(`http://localhost:3000/api/v1/articles/${id}`,{
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  static createNewArticleAPI(article)
  {
    return fetch('http://localhost:3000/api/v1/articles',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    }).then(resp => resp.json())

  }

  static updateTopicWithArticle()
  {
    return fetch('http://localhost:3000/api/v1/articles',{
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({url: article.url, description: article.description})
    }).then(resp => resp.json())

  }

}
