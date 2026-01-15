///****Exercice 2 : soumettre le formulaire vous-même après traitement***

window.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(event.target.elements.username.value);
    console.log(event.target.elements.password.value);
    event.target.submit();
});
});