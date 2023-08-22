//chiediamo all'utente il nome
const userName = prompt("scrivi il tuo nome");
console.log(userName);
//chiediamo il cognome
const userSurname = prompt("scrivi il tuo cognome");
//chiediamo il colore preferito
const userColor = prompt("Scrivi il tuo colore preferito");
//stampa il risultato in console
console.log(userName + userSurname + userColor + "23");
//stampa il risultato in pagina
const userAnswers = document.getElementById("answers");
userAnswers.innerHTML = userName + userSurname + userColor + "23";
