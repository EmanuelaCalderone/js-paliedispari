/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//creo il prompt per l'utente
let parolaUtente = prompt("Inserisci una parola");

//invoco la funzione e stampo il risultato
console.log(parolePalindrome());

//creo la funzione
function parolePalindrome() {
    
    //creo un ciclo per invertire la parola inserita dall'utente
    let parolaInvertita = "";
    for (let i = parolaUtente.length - 1; i >= 0; i--){
        let carattereIesimo = parolaUtente[i];
        parolaInvertita += carattereIesimo;
    }

    //creo la condizione per stabilire se la parola è palindroma
    if (parolaUtente === parolaInvertita) {
        return("La parola è palindroma");
    }
    else {
        return("La parola non è palindroma");
    }
} 



