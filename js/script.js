// Test link
console.log("Hello World!");

// 1. Rilevazione del pulsante in pagina
const userBtnElem = document.getElementById("send-btn"); // object | null
console.log(userBtnElem);

// 2. Aggiunta event listener al bottone
userBtnElem.addEventListener("click", function () {
console.log("CLICK BUTTON");

    // 1. Raccolta dati
    // Input dell'utente
    const userKm = parseInt((document.getElementById("user-km")).value); // (string parsed to) number | null
    console.log("input km", userKm, typeof userKm);

    const userAge = parseInt((document.getElementById("user-age")).value); // (string parsed to) number | null
    console.log("input age",userAge, typeof userAge);

    // Dichiarazione delle variabili sconto, prezzo netto e prezzo lordo
    let discount = 0; // number
    let net = 0; // number
    let gross = 0; // number
    const price = 0.21; // number
    const discountUnder18 = 0.20; // number
    const discountOver65 = 0.40; // number

    // 2. Logica
    // Calcolo del prezzo lordo
    gross = userKm * price; // number | null
    console.log("gross: ", gross);

    // Controllo del tipo di sconto da applicare
    if (userAge < 18) {
        discount = gross * discountUnder18; // number
        console.log("discount: ", discount);
    } else if (userAge >= 65) {
        discount = gross * discountOver65; // number
        console.log("discount: ", discount);
    }

    // Calcolo del prezzo netto (prezzo lordo - sconto)
    net = gross - discount; // number | null
    console.log("net: ", net);

    // 3. Output
    // Preparazione del messaggio con il totale
    const resultMessage = `L'importo da pagare è: ${net.toFixed(2)} €` // string | null
    console.log(resultMessage);

})