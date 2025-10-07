//Som van de even getallen : Gebruik een for-loop om de som van de even getallen van 1 tot 100 te berekenen.

let a =1 ;
let som = 0;

for (a;a<=100;a++){
    if (a%2==0) {
        som = som + a;
    }
}
console.log(`De som van de even getallen tussen 1 - 100 = ${som}`)
