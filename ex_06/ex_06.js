// Exécute le code une fois que toute la page est complètement chargée
window.onload = () => {
  
  // Sélectionne l'élément avec l'ID "robot"
  const robot = document.getElementById("robot");
  
  // Sélectionne l'élément avec l'ID "screen-text" qui affichera des informations
  const screenText = document.getElementById("screen-text");
  
  // Sélectionne l'élément avec l'ID "speech-bubble" qui affiche des messages
  const speechBubble = document.getElementById("speech-bubble");
  
  // Sélectionne l'élément avec l'ID "robot-input" qui est un champ de saisie
  const inputField = document.getElementById("robot-input");

  // Initialise un compteur pour les clics sur les yeux
  let eyeClickCount = 0;
  
  // Sélectionne tous les éléments avec les classes "eye-right-pupil" et "eye-left-pupil"
  const eyes = robot.querySelectorAll(".eye-right-pupil, .eye-left-pupil");

  // Ajoute un écouteur d'événement pour les clics sur l'élément "robot"
  robot.addEventListener("click", () => {
    // Change le texte de la bulle de dialogue en "Ouch, that hurts!"
    speechBubble.textContent = "Ouch, that hurts!";
    
    // Après 2 secondes (2000 millisecondes), remet le texte de la bulle de dialogue à "Hello!"
    setTimeout(() => {
      speechBubble.textContent = "Hello!";
    }, 2000);
  });

  // Ajoute un écouteur d'événement pour le mouvement de la souris sur l'élément "robot"
  robot.addEventListener("mousemove", (event) => {
    // Déstructure les propriétés offsetX et offsetY de l'événement
    const { offsetX, offsetY } = event;
    
    // Met à jour le texte de "screen-text" avec les coordonnées X et Y de la souris
    screenText.textContent = `X: ${offsetX}, Y: ${offsetY}`;
  });

  // Ajoute un écouteur d'événement pour les entrées dans le champ de saisie "robot-input"
  inputField.addEventListener("input", () => {
    // Change le texte de "screen-text" en "Don't worry, I'll take care of it!"
    screenText.textContent = "Don't worry, I'll take care of it!";
    
    // Après 2 secondes, remet le texte de "screen-text" à "Bip bip bip!"
    setTimeout(() => {
      screenText.textContent = "Bip bip bip!";
    }, 2000);
  });

  // Parcourt chaque élément dans la liste "eyes"
  eyes.forEach((eye) => {
    // Ajoute un écouteur d'événement pour les clics sur chaque œil
    eye.addEventListener("click", () => {
      // Incrémente le compteur de clics sur les yeux
      eyeClickCount++;
      
      // Si le compteur atteint ou dépasse 10
      if (eyeClickCount >= 10) {
        // Parcourt à nouveau chaque œil pour changer sa couleur
        eyes.forEach((eye) => {
          // Génère une couleur aléatoire en hexadécimal
          eye.style.fill = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        });
        
        // Réinitialise le compteur de clics
        eyeClickCount = 0;
      }
    });
  });
};

