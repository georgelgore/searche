class User{
  consructor(obj){
    this.name = obj.name
    this.username = obj.username
    this.id = obj.id
    User.all.push(this)
  }

}

User.all = []
