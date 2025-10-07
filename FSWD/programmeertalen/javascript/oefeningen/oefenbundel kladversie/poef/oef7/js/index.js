/* Je vraagt drie getallen aan de gebruiker.  antwoord is het gemiddelde van de drie getallen.
 */


var getalEen = parseFloat(window.prompt("Geef het eerste getal in: "));
var getalTwee = parseFloat(window.prompt("Geef het tweede getal in: "));
var getalDrie = parseFloat(window.prompt("Geef het derde getal in: "));

console.log(`U gaf ${getalEen}, ${getalTwee}, ${getalDrie}in! De Gemiddelde waarde daarvan is ${(getalEen+getalTwee+getalDrie)/3}!`);
alert(`U gaf ${getalEen}, ${getalTwee} en ${getalDrie}in! De Gemiddelde waarde daarvan is ${(getalEen+getalTwee+getalDrie)/3}!`);
