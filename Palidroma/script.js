/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//creo il prompt per l'utente
let parolaUtente = prompt("Inserisci una parola");

//creo una variabile con il risultato della funzione
let risultato = parolePalindrome(parolaUtente);

//logica per determinare se la parola è palindroma
if (risultato) {
    console.log("La parola è palindroma");
}
else {
    console.log("La parola non è palindroma");
}

//creo la funzione
function parolePalindrome(parolaDaTestare) {
    
    //creo un ciclo per invertire la parola inserita dall'utente
    let parolaInvertita = "";
    for (let i = parolaDaTestare.length - 1; i >= 0; i--){
        let carattereIesimo = parolaDaTestare[i];
        parolaInvertita += carattereIesimo;
    }
    return (parolaDaTestare === parolaInvertita); //Restituisce vero se la parola da testare è uguale alla parola invertita
} 





