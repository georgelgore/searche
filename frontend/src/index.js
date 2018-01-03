document.addEventListener('DOMContentLoaded', () => {
 const MAINDIV = document.querySelector("div.main")
 // Using data-value attribute to make selecting elements uniform
 MAINDIV.addEventListener('click', e => {
   e.preventDefault()
   console.log(e.target)
   const clicked = e.target.dataset.value
   console.log(clicked)
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
           StackXAdapter.getStackDataAPI(searchInput.value).then(response => StackHandler.showResponses(response, searchInput.value))

         }
       break;

       case "add-article-button":

          // e.target.parentNode.getAttributes("data-title")
          // e.target.parentNode.getAttributes("data-link")
          // e.target.parentNode.getAttributes("data-topic")
          //check if topic is in local
            //if it is get that topic,
                //create new article object with data-title and link and save it on the topic
            //else
                //create the new topic, and then create a new article and save it




       break;
     default:

   }
 })

})
