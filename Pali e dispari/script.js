/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//creo il prompt per far scegliere pari o dispari all'utente
let sceltaUtente = prompt("Scegli 'pari' o 'dispari'");

//creo il prompt per far inserire il numero all'utente
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
while (numeroUtente > 5) {
    alert("Devi inserire un numero tra 1 e 5");
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

//genero un numero random per il computer
let numeroComputer = Math.floor(Math.random() * 5) + 1;
console.log("Il numero del computer è: " + numeroComputer);

//creo una variabile con il risultato della funzione
let risultato = pariDispari(numeroUtente, numeroComputer);

//logica per determinare chi ha vinto
if (risultato == sceltaUtente) {
    console.log("Hai vinto");
}
else {
    console.log("Ha vinto il computer");
}

//creo la funzione con due argomenti
function pariDispari(primoNumero, secondoNumero) {

    //creo la variabile booleana
    let isEven = (primoNumero + secondoNumero) % 2 === 0;
    //creo la condizione
    if (isEven) {
        return "pari";
    }
    else {
        return "dispari";
    }
}