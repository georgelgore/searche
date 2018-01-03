document.addEventListener('DOMContentLoaded', () => {
 const MAINDIV = document.querySelector("div.main")
 // Using data-value attribute to make selecting elements uniform
 MAINDIV.addEventListener('click', e => {
   e.preventDefault()
   console.log(e.target)
   const clicked = e.target.dataset.value
   switch (clicked) {
     case "username-button":
       EventHandler.userExists().then(boolean =>{
         if(boolean === true){
             EventHandler.getExistingUser().then(obj => {
               obj.render()
             });
         } else {
             EventHandler.createNewUser().then(obj => {
               obj.render()
             });
         }
       })

       break;
     case "search-button":
       const searchInput = document.querySelector("input[data-value='search-input']")
       if (searchInput) {
         console.log(WikipediaAdapter.getWikiDataAPI(searchInput.value))
         WikipediaAdapter.getWikiDataAPI(searchInput.value).then(wikiResults => WikipediaHandler.showResponses(wikiResults))
       }
       break;

     default:

   }
 })

})
