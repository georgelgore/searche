class User{
  constructor(obj){
    this.userName = obj.username
    this.id = obj.id
    // this.topics = []
    this.populateTopics(obj.topics)
    this.populateArticles(obj.articles)
    User.all.push(this)
  }
  // document.getElementById('secret-header').innerHTML =

  render(){
    document.querySelector('div.main').innerHTML =
    `
    <nav class="navbar navbar-default" data-value="navbar">
        <div class="container">
          <div class="row">
            <div class="col-xs-8 col-xs-offset-2">
              <input type="text" class="form-control size="80" name="search-bar" data-value="search-input" placeholder="Search Google, Wikipedia, and Stack Overflow">
            </div>
          </div>
          <div class="row">
            <div class="col-xs-4 col-xs-offset-5">
              <button type="submit" name="search-bar" data-value="search-button" class="btn btn-primary navbar-btn">Searche</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    `
    // <h1>Welcome, ${this.userName}!</h1>
    document.querySelector("div.main").innerHTML +=
    `

    <div class="topic">
    </div>



    <div class="row">
      <div id="topic-box" style="border:.017px solid black; height:233px; overflow: scroll;" class="col-sm-4">
      </div>
      <div id="article-box" style="border:.017px solid black; height:233px; overflow: scroll;" class="col-sm-8">

      </div>
    </div>

    <div class="row">
      <div id="response-box" style="height:300px; overflow: scroll;" class="col-sm-12">
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
