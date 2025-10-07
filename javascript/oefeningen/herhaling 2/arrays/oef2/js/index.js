// Oefening 2: Grootste getal in een array vinden
// Schrijf een programma dat het grootste getal in een array van getallen vindt.

let elementen = [5,4,6,7,9];
let teller = 0;
let hoogste = 0;

for( let element of elementen) {
    if (hoogste < element){
        hoogste = element;
    }
}
console.log(`hoogste element is ${hoogste}`)
