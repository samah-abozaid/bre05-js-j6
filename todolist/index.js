window.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const ul = document.querySelector("#todo-list");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const todoValue = event.target.elements.todo.value;

        if (todoValue === "") {
            return;
        }

        // Création du li
        const li = document.createElement("li");
        li.classList.add("todo-item");

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("todo-checkbox");

        // Texte
        const span = document.createElement("span");
        span.classList.add("todo-text");
        span.textContent = todoValue;

        // Bouton supprimer
        const button = document.createElement("button");
        button.classList.add("delete-btn");
        button.textContent = "Supprimer";

        // Suppression de la tâche
        button.addEventListener("click", (event) => {
            li.remove();
        });

        // Assemblage
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(button);

        ul.appendChild(li);

       
        
        //Lorsque la case de cette liste est cochée, son texte devient barré.
        checkbox.addEventListener("change" , (event) =>{
             if (checkbox.checked) {
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
        });
      
         // Réinitialiser le champ
        form.reset();
    });
    
    
    
    
    
});
