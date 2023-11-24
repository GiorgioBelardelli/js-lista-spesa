const listaIngredienti = ["Pollo", "Uova", "Hamburger", "Insalata"];
const lista = document.querySelector("#lista");
const inputIngredient = document.getElementById("addedIngredient");
const addButton = document.getElementById("addButton");


let i=0; 
let ingredienteAggiunto;

while(i<listaIngredienti.length){

    const ingredienti = document.createElement("li");
    ingredienti.append(listaIngredienti[i]);
    lista.append(ingredienti);
    i++;

}

addButton.addEventListener("click",

    function() {

        
        const ingredienti = document.createElement("li");
        ingredienteAggiunto = inputIngredient.value;
        ingredienti.append(ingredienteAggiunto);
        lista.append(ingredienti);
        

    }
)