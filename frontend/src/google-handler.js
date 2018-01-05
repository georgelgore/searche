class GoogleHandler{
  static renderGoogle(responses, searchTerm)
  {
      const googleDiv = document.querySelector("div.google")
      googleDiv.innerHTML = '<h2 data-toggle="collapse" data-target="#text3"> Google </h2>'

      let holder3 = document.createElement('div')
      holder3.className = "collapse"
      holder3.setAttribute("id", "text3")

      responses.forEach(function(item){
        let responseCard = document.createElement('div')
        // console.log(item)
        responseCard.setAttribute("data-article-title", item.title)
        responseCard.setAttribute("data-article-link", item.link)
        responseCard.setAttribute("data-article-description", item.snippet)
        responseCard.setAttribute("data-topic-title", searchTerm)
        responseCard.setAttribute("data-toggle", "collapse")
        responseCard.innerHTML += `
        <a href=${item.link}>${item.title}</a><br>`
        responseCard.innerHTML += `<p> ${item.snippet} </p>`
        responseCard.innerHTML += `<button data-value="add-article-button" type="button">Add Me</button>`
        holder3.append(responseCard)
        googleDiv.append(holder3)
      })
    }


  static makeGoogleRequest(searchTerm){
    let search = encodeURI(searchTerm)
    GoogleAdapter.makeRequest(search).then(obj => {
        GoogleHandler.renderGoogle(obj.items, decodeURI(search))
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
