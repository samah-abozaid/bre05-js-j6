  //**Ecoutez les modifications de chaque champ individuellement***
  
  window.addEventListener("DOMContentLoaded", () => {
      let nom = document.querySelector("#nom");
      nom.addEventListener("change" , (event) =>{
          console.log(event.target.value);
      });
         let message = document.querySelector("#message");
         message.addEventListener("change" , (event)=>{
              console.log(event.target.value);
         });
         
         let categorie = document.querySelector("#categorie");
         categorie.addEventListener("change" , (event)=>{
              console.log(event.target.value);
         });
      
  });