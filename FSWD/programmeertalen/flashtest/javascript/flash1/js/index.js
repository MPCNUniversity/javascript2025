// 1. vraag aan de gebruiker om x aantal getallen in te geven en deze in een array te pushen.
// console.log(array) is je resultaat.

//eigen oplossing

// let array = "";
// for (let i=1; i<=5;i++) {
//     let nummer = window.prompt(`Geef nummer ${i} in`)
//     array = array + nummer
// }
// console.log(array)

// oplossing

const aantal =  parseInt(prompt("hoeveel getallen wil je invoeren?"));
const getallen =[];
const getallen2 =[];
const som = [];


for (let i = 0 ; i < aantal;i++){
    const input = parseFloat(prompt(`Geef getal ${i + 1}:`));
    getallen.push(input);
    getallen2.push(input);
    som.push(input + input);
    som.push(getallen[i] + getallen2[i]);
}

console.log("Je array is ", getallen);
console.log("je array is ", getallen2);
console.log("je array is ", som);
