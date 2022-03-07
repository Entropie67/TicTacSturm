
grille = document.querySelector("#jeu");



for (let i=1; i<=9; i++){
    grille.innerHTML += `<button id=\"case${i}\" class=\"case\" type=\"button\"> X </button>`;
}
