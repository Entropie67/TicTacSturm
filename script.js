
grille = document.querySelector("#jeu");



for (let i=1; i<=9; i++){
    grille.innerHTML += `<button id=\"case${i}\" class=\"favorite styled\" type=\"button\"> X </button>`;
}
