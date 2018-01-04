class Article{
  constructor(obj){
    this.id = obj.id
    this.topicId = obj.topic_id
    this.url = obj.url
    this.title = obj.title
    this.description = obj.description
    Article.all.push(this)
  }

}
Article.all = []
