//*Vérifier si les mots de passe sont identiques***
//Ajouter la classe .invalid aux champs si les mots de passe ne sont pas identiques
//Afficher la classe .valid aux champs si les mots de passe sont identiques

//==== ======  ======= ====== ======= 
window.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Récupérer les valeurs des deux mots de passe
        let password = event.target.elements.password.value;
        let passwordConfirm = event.target.elements.confirm_password.value;

        let champ1 = document.querySelector("#password");
        let champ2 = document.querySelector("#confirm_password");

        // Réinitialiser les classes
        champ1.classList.remove("valid", "invalid");
        champ2.classList.remove("valid", "invalid");

        if (password === passwordConfirm && password !== "") {
            champ1.classList.add("valid");
            champ2.classList.add("valid");
        } else {
            champ1.classList.add("invalid");
            champ2.classList.add("invalid");
        }
    });
});
