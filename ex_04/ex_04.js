// Attendre que le DOM soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {

    // Sélectionner tous les boutons "+" (plus-btn) et les stocker dans une variable
    const plusButtons = document.querySelectorAll('.plus-btn');

    // Sélectionner tous les boutons "-" (minus-btn) et les stocker dans une variable
    const minusButtons = document.querySelectorAll('.minus-btn');

    // Sélectionner tous les boutons de suppression (delete-btn) et les stocker dans une variable
    const deleteButtons = document.querySelectorAll('.delete-btn');

    // Sélectionner tous les boutons de favori (like-btn) et les stocker dans une variable
    const likeButtons = document.querySelectorAll('.like-btn');

    // Fonction pour augmenter la quantité
    plusButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Trouver l'élément input adjacent au bouton "+"
            const input = button.parentElement.querySelector('input');
            // Convertir la valeur actuelle en nombre entier
            let currentValue = parseInt(input.value);
            // Incrémenter la valeur de 1
            input.value = currentValue + 1;
        });
    });

    // Fonction pour diminuer la quantité
    minusButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Trouver l'élément input adjacent au bouton "-"
            const input = button.parentElement.querySelector('input');
            // Convertir la valeur actuelle en nombre entier
            let currentValue = parseInt(input.value);
            // Décrémenter la valeur de 1 si elle est supérieure à 1
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        });
    });

    // Fonction pour supprimer un produit du panier
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Trouver l'élément parent avec la classe "item" et le supprimer du DOM
            const item = button.closest('.item');
            if (item) {
                item.remove();
            }
        });
    });

    // Fonction pour basculer l'état favori (cœur)
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Basculer la classe "is-active" sur le bouton de favori
            button.classList.toggle('is-active');
        });
    });

});
