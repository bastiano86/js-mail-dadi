/* MAIL */

/* Chiedo i dati all'utente */
let valoreMail = prompt('inserisci la mail');
console.log(valoreMail);
/* Definisco una lista di email */
const listaMail = ["sebastiano@gmail.com","adelaide@gmail.com","mario@gmail.com"];
/* stabilisco una condizione */
if ((valoreMail == "sebastiano@gmail.com") || (valoreMail == "adelaide@gmail.com") || (valoreMail == "mario@gmail.com")) {
  console.log(true);
  document.getElementById('risultato').innerHTML =
/* se non è presente il colore di h2 sarà rosso */
  "<span class=\"text-primary\">è presente</span>";
} else {
  console.log(false);
  document.getElementById('risultato').innerHTML +=
/* se è presente il colore di h2 sarà blu */
  "<span class=\"text-danger\">non è presente</span>";
}

/* GIOCO DEI DADI */

/* Estraggo un numero random per ogni giocatore in un range da 0 a 6 */
let valoreRagazzo = Math.floor(Math.random() * 6);
let valoreRagazza = Math.floor(Math.random() * 6);
let valorePc = Math.floor(Math.random() * 6);

console.log(valoreRagazzo);
console.log(valoreRagazza);
console.log(valorePc);

/* Stabilisco la condizione che definisca chi vince e scriva il risultato in html */
if (valoreRagazzo > valoreRagazza && valoreRagazzo > valorePc) {
document.getElementById('chi-ha-vinto').innerHTML = "ha vinto lui";
} else if (valoreRagazza > valoreRagazzo && valoreRagazza > valorePc) {
document.getElementById('chi-ha-vinto').innerHTML = "ha vinto lei";
} else {
  document.getElementById('chi-ha-vinto').innerHTML = "ha vinto il PC";
}
