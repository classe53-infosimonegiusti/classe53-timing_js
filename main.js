/* 
//Timer a seguito di un prompt
let secondi = prompt('Quanti secondi mancano alla cottura della pasta?');

function pastaPronta() {
    alert('La pasta è pronta!');
}

setTimeout(pastaPronta, secondi * 1000);

*/

/*

// conteggio alla rovescia

let secondi = 10;

let clockID = setInterval(aggiornaContatore, 1000);

function aggiornaContatore() {

    document.getElementById('contatore').innerHTML = secondi;

    if (secondi == 0) {

        fermaContatore();

        //WORKAROUND - aggiunto un ulteriore timeout alla alert, per consentire al codice
        //document.getElementById('contatore').innerHTML = secondi; 
        //di finire la sua esecuzione

        setTimeout(function() {
            alert('Buon anno nuovo!');
        }, 250);

    } else {

        secondi--;

    }
}

function fermaContatore() {
    clearInterval(clockID);
}
*/


// cronometro

let clock; //salvo l'id di setInterval
let cronometro = 0;
const elemCronometro = document.getElementById('cronometro');

document.getElementById('start').addEventListener('click',
    function() {
        clock = setInterval(function() {
            elemCronometro.innerHTML = cronometro;
            cronometro++;
        }, 1000);
    }
);

document.getElementById('stop').addEventListener('click', 
    function() {
        clearInterval(clock);
        cronometro = 0;
    }
);

document.getElementById('pause').addEventListener('click', 
    function() {
        clearInterval(clock);
    }
);