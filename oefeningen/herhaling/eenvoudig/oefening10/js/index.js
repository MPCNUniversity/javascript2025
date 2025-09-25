// Print de tafel van een gegeven getal: Vraag een getal aan de gebruiker en gebruik een for-loop om de tafel van dat getal te printen.

let a= 1;
let getal = parseInt(window.prompt("van welk getal wil je de tafel?"));

for (a;a<=10;a++){
    console.log(`${a} * ${getal} = ${a*getal}`)
}

