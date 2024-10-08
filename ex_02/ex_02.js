//   on créer une Variable pour suivre l'angle de rotation actuel a chaque clic 
let currentRotation = 0;

// on définie une  Fonction pour faire pivoter le cercle
function rotateCircle(step) {
    currentRotation += step; // Met à jour l'angle de rotation actuel de l'angle 
    circle.style.transform = `rotate(${currentRotation}deg)`; //  Applique la rotation au cercle , 
}

//  on Récupére le cercle et les boutons
const circle = document.getElementById('circle'); // Récupère l'élément du cercle
const buttons = document.querySelectorAll('.rotate-button'); // Récupère tous les boutons de rotation

// Ajouter des écouteurs d'événements à chaque bouton
buttons.forEach(button => { // exécute une fonction pour chaque élement du tableau button 
    button.addEventListener('click', () => {
        const step = parseInt(button.value); // Récupère l'angle de rotation du bouton et le convertit en un entier 
        rotateCircle(step); // Appelle la fonction de rotation avec cet angle
    });
});




