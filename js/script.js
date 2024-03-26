// Test link
console.log("Hello World!");

// 1. Raccolta dati
// Richiesta del numero di chilometri e relativa conversione in type number
const userKm = parseInt(prompt("Indica il numero dei chilometri da percorrere")) // number | null
console.log("km: ", userKm, typeof userKm);

// Richiesta dell'età del passeggero e relativa conversione in type number
const userAge = parseInt(prompt("Indica l'età del passeggero")) // number | null
console.log("age: ", userAge, typeof userAge);

// Dichiarazione delle variabili sconto, prezzo netto e prezzo lordo
let discount = 0; // number
let net = 0; // number
let gross = 0; // number
const price = 0.21; // number
const discountUnder18 = 0.20; // number
const discountOver65 = 0.40; // number

// 2. Logica
// Calcolo del prezzo lordo
gross = userKm * price; // number
console.log("gross: ", gross);

// Controllo del tipo di sconto da applicare
if (userAge < 18) {
    discount = gross * discountUnder18;
    console.log("discount: ", discount);
} else if (userAge >= 65) {
    discount = gross * discountOver65;
    console.log("discount: ", discount);
}

// Calcolo del prezzo netto (prezzo lordo - sconto)
net = gross - discount;
console.log("net: ", net);

// 3. Output
// Preparazione del messaggio con il totale
const resultMessage = `L'importo da pagare è: ${net.toFixed(2)} €` // string
console.log(resultMessage);

// Stampa in pagina
document.getElementById("age").innerHTML = userAge;
document.getElementById("km").innerHTML = userKm;
document.getElementById("message").innerHTML = resultMessage;