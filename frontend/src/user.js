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
    // document.getElementById('secret-header').innerHTML =
    // `
    // <nav class="navbar navbar-default">
    //   <div class="container-fluid">
    //     <div class="navbar-header">
    //       <a class="navbar-brand" href="#">Searche</a>
    //     </div>
    //
    //     <ul class="nav navbar-nav">
    //       <li><a href="#">Saved Topics</a></li>
    //     </ul>
    //   </div>
    // </nav>
    // `
    document.querySelector("div.main").innerHTML = `
    <h1>Welcome, ${this.userName}!</h1>
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

    <div class="content">

      <div class="google">
      </div>

      <div class="wikipedia">
      </div>

      <div class="stack-overflow" >
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
