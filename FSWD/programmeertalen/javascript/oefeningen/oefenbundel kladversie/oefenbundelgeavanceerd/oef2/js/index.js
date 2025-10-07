// Bereken de faculteit van een getal : Vraag een getal aan de gebruiker en gebruik een for- loop om de faculteit (factorial) van dat getal te berekenen.

let getal = parseInt (window.prompt("Geef een getal in om de factorial te berekenen!"));
let factorial = 1

for (let faculteit = 1; faculteit<=getal ; faculteit++){
    factorial = (factorial * faculteit);
}
console.log(factorial)
alert(`De factorial van ${getal} of !${getal} = ${factorial}`)


//