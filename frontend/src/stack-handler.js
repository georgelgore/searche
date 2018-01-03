class StackHandler
{
  static unpackResponse()
  {

  }
  static showResponses(responses, searchTerm)
  {
    const STACKDIV = document.querySelector("div.stack-overflow")
    STACKDIV.innerHTML ="<h2>Stack Overflow</h2>"
    responses.items.forEach(function(item){
      let description = item.body.slice(3, 100)
      let responseCard = document.createElement('div')
      responseCard.setAttribute("data-article-title", item.title)
      responseCard.setAttribute("data-article-link", item.link)
      responseCard.setAttribute("data-article-description", description )
      responseCard.setAttribute("data-topic-title", searchTerm)
      responseCard.innerHTML += `<a href=${item.link}>${item.title}</a><br>`
      responseCard.innerHTML += `<p>${description}</p>`
      responseCard.innerHTML += `<button data-value="add-article-button" type="button">Click Me </button>`
      STACKDIV.append(responseCard)
    })
  }
}
