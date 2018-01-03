class User{
  constructor(obj){
    this.username = obj.username
    this.id = obj.id
    // this.topics = []
    this.populateTopics(obj.topics)
    this.populateTopics(obj.articles)
    User.all.push(this)
  }

  render(){
    document.querySelector("div.main").innerHTML = `
    <h1>Welcome User</h1>
    <div class="topic">
      <h2>Topics</h2>
    </div>

    <div class="search">
      <h2>Search</h2>
    </div>

    <div class="content">
      <div class="google">
        <h2>Google</h2>
      </div>

      <div class="wikipedia">
        <h2>Wikepedia</h2>
      </div>

      <div class="stack-overflow" >
        <h2>stack-overflow</h2>
      </div>

    </div>
    `
  }

  populateTopics(arr){
    if (arr.length > 0) {
      arr.forEach(a => new Topic(a))
    }
  }

  populateArticles(arr){
    if (arr.length > 0) {
      arr.forEach(a => new Article(a))
    }
  }


}

User.all = []
