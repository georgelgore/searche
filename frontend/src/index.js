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
      break;
     default:

   }
 })

})
