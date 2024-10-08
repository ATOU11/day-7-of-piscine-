// on definie une fonction qui prend trois paramètres
function findClosestResult(functionsObj, inputNumber, outputNumber) {
     let closestKey = null; // Variable pour stocker la clé du résultat le plus proche
     let closestDifference = Infinity; // Différence la plus proche, initialisée à l'infini
    // Parcours de chaque clé dans l'objet functionsObj
     for (const key in functionsObj) {
         const result = functionsObj[key](inputNumber); // Applique la fonction à inputNumber
         const difference = Math.abs(result - outputNumber); // Calcule la différence
        // Vérifie si cette différence est plus petite que la plus proche trouvée jusqu'à présent
         if (difference < closestDifference) {
             closestDifference = difference; // Met à jour la différence la plus proche
             closestKey = key; // Met à jour la clé la plus proche
         }

     }

    return closestKey;
}
