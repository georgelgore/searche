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
           debugger
             EventHandler.getExistingUser();
         } else {
           debugger 
             let userId = EventHandler.createNewUser();
             // debugger
         }
       })

       break;
     default:

   }
 })

})
