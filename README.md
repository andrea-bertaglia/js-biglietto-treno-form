# Calcolo del prezzo del biglietto del treno ver. 2.0

---

## Testo dell'esercizio

Il programma dovrà chiedere all'utente:

- il numero di chilometri che vuole percorrere
- l'età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

> Il prezzo è determinato secondo queste regole:
>
> - il prezzo del biglietto è definito in base ai km (0.21 € al km)
> - va applicato uno sconto del 20% per i minorenni
> - va applicato uno sconto del 40% per gli over 65

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

---

## Svolgimento

### 1. Raccolta dati

- [ ] Chiedere all'utente il numero dei km da percorrere
- [ ] Chiedere all'utente l'età del passeggero
- [ ] Dichiarazione delle variabili con le percentuali di sconto
- [ ] Dichiarazione della variabile sconto
- [ ] Dichiarazione della variabile prezzo netto
- [ ] Dichiarazione della variabile prezzo lordo

### 2. Logica

- [ ] Calcolo del prezzo lordo
      Prezzo lordo = 0.21 x km inseriti
- [ ] Controllo del tipo di sconto da applicare
    Se (l'età inserita è < 18)
    calcolo sconto = prezzo lordo x 20 / 100
    Altrimenti se (l'età inserita è > 65)
    calcolo sconto = prezzo lordo x 40 / 100
<!-- Altrimenti
    calcolo sconto = prezzo lordo * 0 / 100 -->
- [ ] Calcolo del prezzo netto (prezzo lordo - sconto)

### 3. Output

- [ ] Preparazione del messaggio con il totale (trasformato in formato con 2 decimali)
- [ ] Stampa in pagina del totale
