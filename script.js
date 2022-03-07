
grille = document.querySelector("#jeu");



for (let i=1; i<=9; i++){
    grille.innerHTML += `<button id=\"case${i}\" class=\"case\" type=\"button\">  </button>`;

}

bouton1 = document.getElementById('case1');
bouton1.addEventListener("click", (e) => {
    alert("click");
});
