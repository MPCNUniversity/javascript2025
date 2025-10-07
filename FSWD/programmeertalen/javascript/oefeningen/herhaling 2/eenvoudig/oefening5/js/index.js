// Print de tafel van 5 : Gebruik een for-loop om de tafel van 5 te genereren.

let getal = parseInt(window.prompt("van welk getal wil je de tafel?"));
for (let i = 1;i<=getal;i++){
    console.log(`${i} x ${getal} = ${i*getal}`)
}