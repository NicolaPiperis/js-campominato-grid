// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

    // DICHIARAZIONI VARIABILI GLOBALI
    let container = document.getElementById("container");
    console.log(container);
   
    // SELEZIONIAMO DA JS IL BOTTONE PLAY
    let play = document.getElementById("play");
    console.log(play);

    // AGGIUNGO AL CLICK DELLA VARIABILE PRECEDENTEMENTE SELEZIONATA UNA SERIE DI COMPORTAMENTI 
    play.addEventListener("click",
        function(){

            // GENERAZIONE CELLE / ATTRAVERSO UN CICLO PER RIPETERE LA CREAZIONE DELLE CELLE QUANTE VOLTE BASTA
            for (let i = 1; i < 101 ; i++) {

                // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
                let squareElement = createElement("div", "square") ;
                container.append(squareElement);

                // Ogni cella ha un numero progressivo, da 1 a 100.
                squareElement.append(i);

                // FUNZIONE DI BACKGROUND COLOR AL CLICK DELLE CELLE
                squareElement.addEventListener("click",
                    function(){
                        // Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata
                        squareElement.classList.add("cell_clicked")
                        console.log(i);
                    }
                )
            }

            
        }
    )

    















// FUNZIONI

// CREO ELEMENTO E AGGIUNGO UNA CLASSE
function createElement (tag, addClass){

    let newElement = document.createElement(tag);
    newElement.classList.add(addClass);
    return newElement;

}











// FUNZIONI CHE NON SERVONO :)
// CREO NUMERI DA 1 A 100
function numberGenerator (min, max) {
    let intArray = [];
    for (i = 0 ; i < max ;i++) {
        intArray.push(i);
    }
    return intArray;

}

// CREO NUMERI RANDOM
function createNumberRandom (numMin, numMax){

    let newNumber = Math.floor(Math.random() * (numMax - numMin + 1) - numMin);
    return newNumber;
}

// CREO UN ORDINE RANDOM

function createRandomPosition (min, max) {

    // CREO UN ARRAY INTERNO CHE SARA' IL RISULTATO DELLA FUNZIONE
    let intArray = [];
    
    // CREIAMO UN CICLO PER GENERARE I NUMERI TANTE VOLTE QUANTO L'ARGOMENTO "MAX"
    while (intArray.lenght > max) {
        let newNumber = createNumberRandom (1, 100);
        
        // SE IL NUMERO GENERATO NON E' ANCORA STATO INTRODOTTO NELL'ARRAY, VERRA' FATTO, ALTRIMENTI GLI VERRA' NEGATO L'ACCESSO
        if(!intArray.includes(newNumber)) {
            intArray.push(newNumber);
        }
    }
    return intArray;

}