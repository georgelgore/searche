class WikipediaHandler {
  static renderWikipedia(responses) {
    const wikipediaDiv = document.querySelector("div.wikipedia")
    responses[1].forEach((response, index) => {
      wikipediaDiv.innerHTML +=
      `<div data-id=${x++} data-name=‘google-search-${x}’>
     <a href=${url} target=“_blank” >${title}</a>
   </div>`
    })

  }

  static showResponses(responses, searchTerm){
   const wikipediaDiv = document.querySelector("div.wikipedia")
   wikipediaDiv.innerHTML = '<h2 data-toggle="collapse" data-target="#text1">Wikipedia</h2>'

   let holder1 = document.createElement('div')
   holder1.className = "collapse"
   holder1.setAttribute("id", "text1")

   responses[1].forEach((response, index) => {

     let responseCard = document.createElement('div')
     responseCard.setAttribute("data-article-title", response)
     responseCard.setAttribute("data-article-link", responses[3][index])
     responseCard.setAttribute("data-article-description", responses[2][index])
     responseCard.setAttribute("data-topic-title", searchTerm)

     responseCard.innerHTML += `<a href=${responses[3][index]}>${response}</a><br>`
     responseCard.innerHTML += `<p>${responses[2][index]}>${response}</p>`
     responseCard.innerHTML += `<button data-value="add-article-button" type="button">Add Me</button>`

     holder1.append(responseCard)
     wikipediaDiv.append(holder1)
   })
 }
}
