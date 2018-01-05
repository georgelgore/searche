class Topic{

  constructor(obj){
    this.id = obj.id
    this.userId = obj.user_id
    this.title = obj.title
    Topic.all.push(this)
  }

  static findArticle(topicId){
    return Topic.all.find(top => {
      return top.id === topicId
    })
  }
  
  static render(){
    const topicDiv = document.getElementById("topic-box")
    console.log(topicDiv)
    topicDiv.innerHTML = "<h2>Existing Topics</h2>"

    Topic.all.forEach(top => {
      let topDiv = document.createElement('a')
      let br = document.createElement('br')
      // topDiv.style = "border:1px solid black;"
      // console.log(item)
      topDiv.setAttribute("data-topic-id", top.id)
      topDiv.setAttribute("data-topic-title", top.title)
      topDiv.setAttribute("data-value", "view-topic-button")
      topDiv.innerHTML = `${top.title}`
      topicDiv.innerHTML += `<button data-value="delete-topic-button" data-id=${top.id} type="button" class='btn btn-xs btn-primary'>x</button>   `
      topicDiv.append(topDiv)
      topicDiv.append(br)
    })
  }
}

Topic.all = []
