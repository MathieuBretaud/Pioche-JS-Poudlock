// Notre variable qui contient le "module" app (un objet)
let app = {
    // Tableau contenant le nom des 4 maisons
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],
    // Méthode appelée au chargement de la page
    init: function () {

        app.bubble = document.querySelector('.speech');
        app.form = document.querySelector('form');
        app.input = document.querySelector('.name');


        app.form.addEventListener('submit', app.handleSubmit);
    },

    handleSubmit: function (evt) {
        evt.preventDefault();
        
        let name = app.input.value.trim();
        let message;

        if (name.length == 0) {
            message = "Ça ne fonctionne qu'avec un nom !";
        } else {
            // Si un nom a été tapé, alors on exécute la méthode sortStudent et on stocke son résultat.
            message = app.sortStudent(name);
        }

        app.writeBubble(message);
    },
    
    // Méthode qui choisit une maison et génère une image d'après le nom de la maison.
    sortStudent: function (name) {
        let house;

        if (name.length == 8) {

            house = 'maxopus';

        } else if (name.charAt(0) == 'l' || name.charAt(name.length - 1) == 'x') {

            house = "lustrix";

        } else if (name.length % 5 == 0 || name.length % 3 == 0) {

            house = "anthorvus";

        } else {

            house = "darioptera";
        }
        let image = '<img src="images/' + house + '.png" />';
        return image;
    },
    // Méthode qui remplace le contenu de la bulle par le contenu passé en argument.
    writeBubble: function (content) {
        app.bubble.innerHTML = content;
    },
}

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);