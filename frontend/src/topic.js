class Topic{

  constructor(obj){
    this.id = obj.id
    this.userId = obj.user_id
    this.title = obj.title
    Topic.all.push(this)
  }

  static render(){
    const topicDiv = document.querySelector("div.topic")
    topicDiv.innerHTML = "<h2>Existing Topics</h2>"

    Topic.all.forEach(top => {
      let topDiv = document.createElement('div')
      // console.log(item)
      topDiv.setAttribute("data-topic-id", top.id)
      topDiv.setAttribute("data-topic-title", top.title)
      topDiv.innerHTML = `
      <a href="#">${top.title}</a><br>`
      topicDiv.append(topDiv)
    })
  }
}

Topic.all = []
