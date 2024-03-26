// Test link
console.log("Hello World!");

// 1. Rilevazione del pulsante in pagina
const userBtnElem = document.getElementById("send-btn"); // object | null
console.log(userBtnElem);

// 2. Aggiunta event listener al bottone
userBtnElem.addEventListener("click", function () {
document.querySelector(".banner-message").classList.add("d-none");  
document.querySelector(".result-container").classList.remove("d-none");  
console.log("CLICK BUTTON");

    // 1. Raccolta dati
    // Input dell'utente
    const userKm = parseInt((document.getElementById("user-km")).value); // (string parsed to) number | null
    console.log("input km", userKm, typeof userKm);

    const userAge = (document.getElementById("user-age")).value; // string | null
    console.log("input age",userAge, typeof userAge);

    const userName = (document.getElementById("user-name")).value; // string | null
    console.log("input name",userName, typeof userName);

    // Dichiarazione delle variabili sconto, prezzo netto e prezzo lordo
    let discount = 0; // number
    let net = 0; // number
    let gross = 0; // number
    const price = 0.21; // number
    const discountUnder18 = 0.20; // number
    const discountOver65 = 0.40; // number
    let bannerMessage = " "; // string

    // 2. Logica
    // Calcolo del prezzo lordo
    gross = userKm * price; // number | null
    console.log("gross: ", gross);

    // Controllo del tipo di sconto da applicare
    if (userAge === "under18") {
        discount = gross * discountUnder18; // number
        console.log("discount: ", discount);
        bannerMessage = document.getElementById("banner").innerHTML = "Hai diritto allo sconto del 20%";
        document.querySelector(".banner-message").classList.remove("d-none");
    } else if (userAge === "over65") {
        discount = gross * discountOver65; // number
        console.log("discount: ", discount);
        bannerMessage = document.getElementById("banner").innerHTML = "Hai diritto allo sconto del 40%";
        document.querySelector(".banner-message").classList.remove("d-none");
    }

    // Calcolo del prezzo netto (prezzo lordo - sconto)
    net = gross - discount; // number | null
    console.log("net: ", net);

    // 3. Output
    // Preparazione del messaggio con il totale
    const resultMessage = `${net.toFixed(2)} €` // string | null
    console.log(resultMessage);

    // Stampo i dati in pagina
    document.getElementById("result").innerHTML = resultMessage;
    document.getElementById("name").innerHTML = userName;
})