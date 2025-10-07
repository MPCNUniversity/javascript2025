// Print de tafel van een gegeven getal: Vraag een getal aan de gebruiker en gebruik een for-loop om de tafel van dat getal te printen.

let getal = parseInt(window.prompt("Geef het getal in waarvan je de tafel afdrukt"));

for( let i =1 ;i<=getal;i++){
    console.log(`${i}x${getal}=${i*getal}`)
}

