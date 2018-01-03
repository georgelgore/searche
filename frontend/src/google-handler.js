class GoogleHandler{
  static renderGoogle(responses, searchTerm)
  {
      const googleDiv = document.querySelector("div.google")
      googleDiv.innerHTML = "<h2> Google </h2>"

      responses.forEach(function(item){
        let responseCard = document.createElement('div')
        responseCard.setAttribute("data-article-title", item.title)
        responseCard.setAttribute("data-article-link", item.link)
        responseCard.setAttribute("data-topic-title", searchTerm)
        responseCard.innerHTML += `
        <a href=${item.link}>${item.title}</a><br>`
        responseCard.innerHTML += `<p> ${item.snippet} </p>`
        responseCard.innerHTML += `<button data-value="add-article-button" type="button">Click Me </button>`
        googleDiv.append(responseCard)
      })
    }


  static makeGoogleRequest(searchTerm){
    let search = encodeURI(searchTerm.toLowerCase())
    GoogleAdapter.makeRequest(search).then(obj => {
        GoogleHandler.renderGoogle(obj.items, search)
      })
  }
}





 // let x = 0
 //   static renderGoogle(item, searchTerm){
   //   let title = item.title
   //   let description = item.snippet
   //   let url = item.formattedUrl
   //   document.getElementById("search-holder").innerHTML +=
   //   `
   //   <div data-id="google-${x++} data-name='google-search-${x}'>
   //     <a href=${url} target="_blank" >${title}</a>
   //     <button type="submit" class="button" data-id=${x}>add me</button>
   //   </div>
   //   `
   // }
