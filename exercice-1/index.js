//***Récupérez les valeurs des champs lors de la soumission du formulaire.****
//**Affichez les valeurs dans la console***
// ==== ===== ===== ============= ========


window.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(event.target.elements.username.value);
    console.log(event.target.elements.password.value);
});
});

