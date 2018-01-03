class Article{
  consructor(obj){
    this.topicId = obj.topic_id
    this.url = obj.url
    this.description = obj.description
    Article.all.push(this)
  }

}
Article.all = []
