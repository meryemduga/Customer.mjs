import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let klant = {
  naam: await userInput.question("Voer uw naam in:"),
  klantnummer: await userInput.question("Voer uw klantnummer in:"),
  leeftijd: Number(await userInput.question("Voer uw leeftijd in:")),
  interesses: []

};
console.log(klant)

let interesse;
while (true) {
  interesse = await userInput.question("Voer een interesse in (typ 'STOP' om te stoppen):");
  if (interesse.toUpperCase() === "STOP") {
    break;
  }
  klant.interesses.push(interesse);
}


function toonKlantInfo(stud) {
  console.log("Naam: " + klant.naam);
  console.log("Opleiding: " + klant.klantnummer);
  console.log("Leeftijd: " + klant.leeftijd);
  console.log("Interesses: " + klant.interesses.join(", "));
}


console.log("\nOutput van de functie:\n");
toonKlantInfo(klant);

