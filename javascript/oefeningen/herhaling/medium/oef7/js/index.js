// som van de oneven getallen: Gebruik een for-loop om de som van de oneven getallen van 1 tot 100 te berekenen.

let a=1;
let som = 0;

for (a;a<=100;a++){
    if (a%2!=0) {
        som=som+a
    }
}
console.log(`De som van alle oneven getallen onder 100 is ${som}`)