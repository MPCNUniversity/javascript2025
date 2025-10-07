// let som = 0
// for(let i=1;i<=10;i=i++){
//     console.log(i);
// }
//
// for(let i=1;i<=10;i++){
//     alert(i);
// }

var som = 0;
for(let teller=1;teller<=10;teller = teller +1 ) {
    let getal = parseInt(window.prompt(`geef getal ${teller} in`));
    som = som + getal;
    console.log(som)
}

console.log(`de totale som van de tien getallen is ${som}`)
alert(`de totale som van de tien getallen is ${som}`)

