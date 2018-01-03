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
      <div class="search-bar">
        <label>SEARCH!</label>
        <input type="text" name="search-bar" data-value="search-input">
        <button type="button" name="search-bar" data-value="search-button">Find that Shiz!</button>
      </div>
    </div>

    <div class="content">

      <div class="google">
      </div>

      <div class="wikipedia">
      </div>

      <div class="stack-overflow" >
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
