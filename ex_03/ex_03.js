// on définie une fonction map qui prend deux arguments 
function map(array, callback) {
    //  Créer un nouveau tableau pour stocker les résultats
    const result = [];
    
    // Parcourir chaque élément du tableau d'entrée
    for (let i = 0; i < array.length; i++) {
        // Appliquer le callback à l'élément courant et stocker le résultat
        result[i] = callback(array[i]);
    }
    
    // Retourner le nouveau tableau
    return result;
}

// Fonction de rappel pour tester la fonction map
function isEven(number) {
    return number % 2 === 0; // on  Vérifie si le nombre est pair
}

// Exemple d'utilisation de la fonction map
console.log(map([5, 8, 10], isEven)); // Affiche [false, true, true] quand le nombre est impair , pair , pair 
