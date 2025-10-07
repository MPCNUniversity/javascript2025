// Print het omgekeerde van een getal: Vraag een getal aan de gebruiker en gebruike een for-loop om het omgekeerde van dat getal te printen(bijv. 1234 wordt 4321)

// oefening 10 van de middelmatige oefeningen voor de for loop:
 let number = parseInt(prompt("Voer een getal in:"));
 let reversed = 0;
 for (let i = number; i > 0; i = (i - (i % 10)) / 10) {
     let laatsteCijfer = i % 10; // Haal het laatste cijfer
     reversed = reversed * 10 + laatsteCijfer; // Voeg het laatste cijfer toe aan reversed
 }
 console.log(reversed);

 // Wat heb ik hieruit geleerd uit oefening 10 medium.
// Je kan de modulus gebruiken om de laatste cijfers van een getal te isoleren.

// Je hoeft niet telkens window.prompt te tikken. prompt is voldoende

// i = (i-(i%10))/10
// let laatstecijfer = i % 10

// i = (i-(i%100))/100
// let laatstetweecijfers = i % 100

// i = (i-(i%1000))/1000
// let laatstedriecijfers = i % 1000

// per twee cijfers reversed
let laatstetweereversed = 0;
for (let a=number; a > 0; a = (a-(a % 100))/100) {
    let laatstetweeCijfers = a % 100; // Haal de laatste 2 cijfers
    laatstetweereversed = laatstetweereversed * 100 + laatstetweeCijfers; // voeg de laatstetweeCijfers toe aan reversed
}
console.log(laatstetweereversed);





// Uitleg:
//     De initiatiefase in de for-loop begint met let i = number, wat ervoor zorgt dat de loop begint met het ingevoerde getal.
//     De voorwaarde is i > 0, wat betekent dat de loop doorgaat totdat i gelijk is aan 0.
// In de updatefase wordt i verminderd door telkens het laatste cijfer te verwijderen: (i - (i % 10)) / 10. Dit haalt het laatste cijfer weg.
//     Binnen de loop wordt het omgekeerde getal opgebouwd door reversed telkens te vermenigvuldigen met 10 en het laatste cijfer (i % 10) toe te voegen.
//     Op deze manier wordt het omgekeerde van het getal berekend met een volledige for-loop.
//     Start
//     number = 1234
// reversed = 0
// i = 1234
// Iteratie 1
// laatsteCijfer = 1234 % 10 = 4
// reversed = 0 * 10 + 4 = 4
// i = (1234 - 4) / 10 = 1230 / 10 = 123
// Status:
//     reversed = 4
// i = 123
// Iteratie 2
// laatsteCijfer = 123 % 10 = 3
// reversed = 4 * 10 + 3 = 43
// i = (123 - 3) / 10 = 120 / 10 = 12
// Status:
//     reversed = 43
// i = 12
// Iteratie 3
// laatsteCijfer = 12 % 10 = 2
// reversed = 43 * 10 + 2 = 432
// i = (12 - 2) / 10 = 10 / 10 = 1
// Status:
//     reversed = 432
// i = 1
// Iteratie 4
// laatsteCijfer = 1 % 10 = 1
// reversed = 432 * 10 + 1 = 4321
// i = (1 - 1) / 10 = 0 / 10 = 0
// Status:
//     reversed = 4321
// i = 0
// Stop
// De for-loop stopt omdat i > 0 niet meer waar is.
//     Het resultaat is 4321.



// let a = 1;
// let input = parseInt(window.prompt("Geef een getal van meerdere nummers"));


