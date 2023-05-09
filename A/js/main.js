// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

    // DICHIARAZIONI VARIABILI GLOBALI
    let container = document.getElementById("container");
    console.log(container);

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

                console.log(i);
                console.log(squareElement);
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