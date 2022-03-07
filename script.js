
grille = document.querySelector("#jeu");



for (let i=1; i<=9; i++){
    grille.innerHTML += `<button id=\"case${i}\" class=\"case\" type=\"button\">  </button>`;
}

boutons = document.getElementsByClassName("case");
b = arr = Array.prototype.slice.call( boutons );
b.forEach(item => {
    item.addEventListener('click', event => {
        // Le code
        console.log(event.target);


    })
});



