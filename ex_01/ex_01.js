// on definie une Fonction pour réduire l'opacité
function reduceOpacity() {
    const square = document.getElementById('square');// 
    square.style.opacity = 0.5;  // On réduit l'opacité à 0.5 pour que sa soit visible a 50%
}

//  on definie une Fonction pour réinitialiser l'opacité
function resetOpacity() {
    const square = document.getElementById('square');
    square.style.opacity = 1;  // On réinitialise l'opacité à 1 pour que sa soit visible a 100%
}

// On récupère l'élément 'square'
const square = document.getElementById('square'); // on sélectionne l'élément dans l'Id 

// On ajoute un écouteur d'événement pour la souris qui entre dans le carré (mouseover)
square.addEventListener('mouseover', reduceOpacity);

// On ajoute un écouteur d'événement pour la souris qui quitte le carré (mouseout)
square.addEventListener('mouseout', resetOpacity);
