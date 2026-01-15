//***À chaque frappe dans le champ texte, mettez à jour le texte à l'intérieur de la div.***
window.addEventListener("DOMContentLoaded", () => {
let nom = document.querySelector("#nom");
 let div =document.querySelector("#div");
 let couleur = document.querySelector("#couleur");
 
 
nom.addEventListener("input" , (event) =>{
    let value =event.target.value;
   div.textContent =value
   console.log(value);
 
});

//À chaque changement de couleur, changez la couleur de fond de la div.
//=== == ====== = = = =
couleur.addEventListener("input" ,(event) =>{
    let divColor = event.target.value;
    div.style.backgroundColor=divColor;
    console.log(divColor);
});
});