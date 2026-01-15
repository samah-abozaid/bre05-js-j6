//***Par défaut, le bouton de soumission doit être désactivé (disabled).*
window.addEventListener("DOMContentLoaded", () => {
    
let form =document.querySelector("form");

let ckeckBox = document.querySelector("#check");

form.addEventListener("submit" , (event) =>{
    
   event.preventDefault();
   
   if(ckeckBox.checked){
       alert("formulaire envoyé");
   }else{
       event.preventDefault();
       alert("vous devez accepter lzs conditions générales del'utilisation");
   }

  });

});