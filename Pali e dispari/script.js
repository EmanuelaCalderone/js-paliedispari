/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//creo il prompt per far scegliere pari o dispari all'utente
let sceltaUtente = prompt("Scegli 'pari' o 'dispari'").toLocaleLowerCase();

//creo il prompt per far inserire il numero all'utente
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
if (numeroUtente > 5) {
    alert("Devi inserire un numero tra 1 e 5");
}

//genero un numero random per il computer
let numeroComputer = Math.floor(Math.random() * 5) + 1;

console.log("Il numero del computer è: " + numeroComputer);

//invoco e stampo il risultato della funzione
console.log(pariDispari(sceltaUtente, numeroUtente, numeroComputer));


//creo la funzione con due argomenti
function pariDispari(sceltaUtente, numeroUtente, numeroComputer) {
    //creo la condizione per stabilire se la somma dei due numeri è pari o dispari
    if ((numeroUtente + numeroComputer) % 2 === 0) {
        console.log("la somma dei due numeri è pari");
        if (sceltaUtente === "pari") {
            return ("Ha vinto l'utente");
        }
        else {
            return ("Ha vinto il computer");
        }
    }
    else {
        console.log("la somma dei due numeri è dispari");
        if (sceltaUtente === "dispari") {
            return ("Ha vinto l'utente");
        }
        else {
            return ("Ha vinto il computer");
        }
    }
    }