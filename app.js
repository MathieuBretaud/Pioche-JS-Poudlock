
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
    init: function() {
     let formulaire = document.querySelector('form');
     let formulaires = formulaire.addEventListener('click', app.Handlerformulaire)
    },

    Handlerformulaire : function (evt){
        evt.preventDefault();
        let moninput = document.querySelector('input');
        let moniputValeur = moninput.value;
        let maDiv = document.querySelector('.speech');
        const img = document.createElement('img');
        let maphoto = "images/anthorvus.png";
        

        if(moniputValeur.length ===  8){
            
            maDiv.innerHTML = '<img src="images/maxopus.png" /> ';
            
        }else if(moniputValeur.charAt(0)=== 'l' || moniputValeur.substr(moniputValeur.length - 1) === 'x'){

            maDiv.innerHTML = '<img src="images/lustrix.png" /> ';
            
        }else if(moniputValeur.length % 5 || moniputValeur.length % 3){

            maDiv.innerHTML = '<img src="images/anthorvus.png" /> ';
        } else if (moniputValeur.length >0) {

            maDiv.innerHTML = '<img src="images/darioptera.png" /> ';
        }
    },
}

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);
