// tel van 1 tot 10: gebruik een for loop om de getallen van 1 tot 10 op het scherm te schrijven

const getal = parseInt(window.prompt("Tot welk getal gaan we tellen?"))

for (let i=1;i<=getal;i++){
    console.log(`we hebben al ${i}`);
}
alert(`We hebben in de console samen tot ${getal} geteld.`)


//  de console. log  Om het aantal stappen te tonen drukken we i af per iteratie.