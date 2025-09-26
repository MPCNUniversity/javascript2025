// let input = parseFloat(window.prompt("Tot welk getal wil je de oneven getallen afdrukken"))
// for (let a =1;a<=input;a++){
//     if (a%2==0) {
//     } else {
//         console.log(a)
//     }
// }
//
// // while
// let a = 1;
// while (a<=input){
//     if (a%2!=0){
//         console.log(a)
//     }
//     a++;
// }

// Oefening 1: Som van alle elementen in een array
// Schrijf een programma dat een array van getallen neemt en de som van alle getallen in de array berekent.
let elementen =[2,6,4,6];
let som =0;
let teller = 0;
for(let element of elementen){
    som = som + elementen[teller];
    teller = teller + 1;
}
console.log(som)
alert(`de totale som van ${elementen.lenght} elementen = ${som}`)