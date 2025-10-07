// Print de Fibonacci-reeks : Gebruik een for-loop om de eerste 10 getallen van de Fibonacci-reeks te printen(bijv. 1, 1, 2, 3, 5, 8, ...).

let limiet = parseInt("Geef een getal op als limiet");
let a = 0, b= 1;

for (let i = 1  ; i<=limiet ; i++ ){
    if(a<=10) {
        console.log(a)
        let volgende = a + b;
        a = b;
        b = volgende;
    }
}