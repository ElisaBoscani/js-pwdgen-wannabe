//chiediamo all'utente il nome
const userName = prompt("scrivi il tuo nome");
console.log(userName);
//chiediamo il cognome
const userSurname = prompt("scrivi il tuo cognome");
console.log(userSurname);
//chiediamo il colore preferito
const userColor = prompt("Scrivi il tuo colore preferito");
console.log(userColor);
//chiediamo chiave
const userKey = prompt("Scrivi un numero");
//stampa il risultato in console
console.log(userName + userSurname + userColor + (Number(userKey) + 23));
//stampa il risultato in pagina
const userAnswers = document.getElementById("answers");
userAnswers.innerHTML =
  userName + userSurname + userColor + (Number(userKey) + 23);
