class StackHandler
{
  static unpackResponse()
  {

  }

  static showResponses(responses, searchTerm)
  {
    const STACKDIV = document.querySelector("div.stack-overflow")
    STACKDIV.innerHTML ='<h2 data-toggle="collapse" data-target="#text2">Stack Overflow</h2>'
    let holder = document.createElement('div')
    holder.className = "collapse"
    holder.setAttribute("id", "text2")

    responses.items.forEach(function(item){
      // console.log(item)
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = item.body;
      const description = tempDiv.textContent || div.innerText || "";


      let responseCard = document.createElement('div')
      responseCard.setAttribute("data-article-title", item.title)
      responseCard.setAttribute("data-article-link", item.link)
      responseCard.setAttribute("data-article-description", description )
      responseCard.setAttribute("data-topic-title", searchTerm)


      responseCard.innerHTML += `<a href=${item.link} target="_blank">${item.title}</a>&nbsp&nbsp&nbsp<button data-value="add-article-button" type="button" class="btn btn-xs btn-primary">Add Me</button><br>`
      responseCard.innerHTML += `<p>${description}</p>`
      // responseCard.innerHTML += `<button data-value="add-article-button" type="button">Add Me</button>`
      holder.append(responseCard)
      STACKDIV.append(holder)
    })
  }
}
