'use strict';


/** Funzioni **/

function createTable(){ //funzione per la creazione della griglia di gioco
    const gameGrid = document.querySelector('div.game-grid'); //seleziono la griglia di gioco
    console.log(gameGrid);
    gameGrid.innerHTML = "";
    const difficultySelected = document.getElementById("difficulty-select").value; //controllo la difficoltà selezionata dall'utente
    console.log("Giochiamo a difficoltà: " + difficultySelected);
    switch (difficultySelected) {
        case "easy": //creazione griglia 10x10
            for(let i = 1 ; i <= 100; i++){
                let myCell = document.createElement('div'); //creo un elemento div per la cella
                myCell.classList.add("cell" , "easy"); //do alla cella le sue relative classi
                myCell.append(i);
                console.log(myCell.innerHTML);
                gameGrid.append(myCell); //appendo la cella all'interno della griglia
            }
            break;

        case "medium": //creazione griglia 9x9
            for(let i = 1 ; i <= 81; i++){
                let myCell = document.createElement('div'); //creo un elemento div per la cella
                myCell.classList.add("cell" , "medium"); //do alla cella le sue relative classi
                myCell.append(i);
                console.log(myCell.innerHTML);
                gameGrid.append(myCell); //appendo la cella all'interno della griglia
            }
            break;

        case "hard": //creazione griglia 7x7
            for(let i = 1 ; i <= 49; i++){
                let myCell = document.createElement('div'); //creo un elemento div per la cella
                myCell.classList.add("cell" , "hard"); //do alla cella le sue relative classi
                myCell.append(i);
                console.log(myCell.innerHTML);
                gameGrid.append(myCell); //appendo la cella all'interno della griglia
            }
            break;
        default:
            console.log("caso di default");
    }
    
}


/** Main **/

const playButton = document.getElementById("play-button"); //seleziono il tasto play
playButton.addEventListener("click", function(){ //evento sul tasto play
    createTable();
})
