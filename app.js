
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
    let form = document.querySelector('form').addEventListener('click', app.HandleForm)
    },

    HandleForm : function (evt){
        evt.preventDefault();
        let myInput = document.querySelector('input');
        let myInputValue = myInput.value;
        let myDiv = document.querySelector('.speech');
        

        if(myInputValue.length ===  8){
            
            myDiv.innerHTML = '<img src="images/maxopus.png" /> ';
            
        }else if(myInputValue.charAt(0)=== 'l' || myInputValue.substring(myInputValue.length - 1) === 'x'){

            myDiv.innerHTML = '<img src="images/lustrix.png" /> ';
            
        }else if(myInputValue.length % 5 || myInputValue.length % 3){

            myDiv.innerHTML = '<img src="images/anthorvus.png" /> ';
        } else if (myInputValue.length >0) {

            myDiv.innerHTML = '<img src="images/darioptera.png" /> ';
        }
    },
}

// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);
