// Schrijf een programma dat ee ngebruiker een getal tussen 1 en 10 laat raden.
//Gqebruike een while loop om de gebruiker te  laten raden tot het juiste getal


//variabelen
let teRadenGetal = 7;
let getal = 0;
let teller = 0;
while (getal!== teRadenGetal){
    getal = parseInt(window.prompt("Raad het getal  van 1 tot 10"));
    teller = teller + 1;
}
console.log(`Dit is het getal ${getal} in ${teller} keer geraden`)




