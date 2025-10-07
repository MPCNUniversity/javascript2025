// functie printtafel : output 1x 5 = 10

// function printTafel(tafel){
// //     console.log(`${i} * ${nummer} = ${i*nummer}`)
// // }
//
//
// let nummer = parseInt(prompt("Geef een getal in!"));
//
// for (let i = 1; i <=10;i++){
//    document.querySelector("#resultaat").innerHTML += '<li>${i} * ${nummer} = ${i*nummer}`
// }

function printTafel(tafel) {
    for(let i = 1;i<=10;i++){
        document.querySelector("#resultaat").innerHTML += `<li>${i} * ${tafel} = ${i*tafel}</li>`
    }
}

let tafel = parseInt(prompt("Geef een nummer in aub!"));
printTafel(tafel)
