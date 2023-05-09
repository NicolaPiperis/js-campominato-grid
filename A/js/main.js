// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

    // DICHIARAZIONI VARIABILI GLOBALI
    let container = document.getElementById("container");
    console.log(container);

    // CREO UN ARRAY DOVE INCLUDERO' I NUMERI IN MANIERA CASUALE
    let arrayNumber = createRandomPosition(1,100);
    console.log(arrayNumber);


    // SELEZIONIAMO DA JS IL BOTTONE PLAY
    let play = document.getElementById("play");
    console.log(play);

    // AGGIUNGO AL CLICK DELLA VARIABILE PRECEDENTEMENTE SELEZIONATA UNA SERIE DI COMPORTAMENTI comportamenti 
    play.addEventListener("click",
        function(){

            // GENERAZIONE CELLE / ATTRAVERSO UN CICLO PER RIPETERE LA CREAZIONE DELLE CELLE QUANTE VOLTE BASTA
            for (let i = 0; i < 100 ; i++) {

                let squareElement = createElement("div", "square") ;
                container.append(squareElement);

                squareElement.append(arrayNumber);

                // FUNZIONE DI BACKGROUND COLOR AL CLICK DELLE CELLE
                squareElement.addEventListener("click",
                    function(){
                        squareElement.classList.add("cell_clicked")
                    }
                )
            }


        }
    )

    



// Ogni cella ha un numero progressivo, da 1 a 100.


// Ci saranno quindi 10 caselle per ognuna delle 10 righe.


// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata





// FUNZIONI

// CREO ELEMENTO E AGGIUNGO UNA CLASSE
function createElement (tag, addClass){

    let newElement = document.createElement(tag);
    newElement.classList.add(addClass);
    return newElement;

}

// CREO NUMERI RANDOM
function createNumberRandom (numMin, numMax){

    let newNumber = Math.floor(Math.random() * (numMax - numMin + 1) - numMin);
    return newNumber;
}

// CREO UN ORDINE RANDOM

function createRandomPosition (min, max) {

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