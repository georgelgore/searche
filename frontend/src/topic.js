class Topic{

  constructor(obj){
    this.userId = obj.user_id
    this.title = obj.title
    Topic.all.push(this)
  }
}

Topic.all = []
