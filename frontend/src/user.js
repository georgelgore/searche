class User{
  constructor(obj){
    this.userName = obj.username
    this.id = obj.id
    // this.topics = []
    this.populateTopics(obj.topics)
    this.populateArticles(obj.articles)
    User.all.push(this)
  }

  render(){
    document.getElementById('secret-header').innerHTML =
    `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Searche</a>
        </div>

        <ul class="nav navbar-nav">
          <li><a href="#">Saved Topics</a></li>
        </ul>
      </div>
    </nav>
    `
    // <h1>Welcome, ${this.userName}!</h1>
    document.querySelector("div.main").innerHTML = `

    <div class="topic">
    </div>

    <div class="search">

    <h2>Search</h2>
      <div class="search-bar">
        <label>SEARCH!</label>
        <input type="text" name="search-bar" data-value="search-input">
        <button type="button" name="search-bar" data-value="search-button">Find that Shiz!</button>
      </div>
    </div>

    <div class="row">
      <div id="topic-box" style="border:1px solid black; min-height:200px; overflow: scroll;" class="col-sm-4">
      </div>
      <div id="article-box" style="border:1px solid black; min-height:200px;" class="col-sm-8">

      </div>
    </div>

    <div class="row">
      <div id="response-box" style="border:1px solid black; min-height:200px; overflow: scroll;" class="col-sm-12">
        <div class="content">

          <div class="google">
          </div>

          <div class="wikipedia">
          </div>

          <div class="stack-overflow" >
          </div>

        </div>
      </div>

    </div>


    `
    Topic.render()
  }

  populateTopics(arr){
    if (arr.length > 0) {
      arr.forEach(a => new Topic(a))
    }
  }

  populateArticles(arr){
    // debugger
    if (arr.length > 0) {
      arr.forEach(a => new Article(a))
    }
  }


}

User.all = []
