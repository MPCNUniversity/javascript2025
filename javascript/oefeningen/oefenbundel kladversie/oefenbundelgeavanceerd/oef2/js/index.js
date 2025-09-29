// Bereken de faculteit van een getal : Vraag een getal aan de gebruiker en gebruik een for- loop om de faculteit (factorial) van dat getal te berekenen.

let a = parseInt (window.prompt("Geef een getal in om de factorial te berekenen!"));
let factorial = 1

for (let faculteit = 1; faculteit<=a ; faculteit++){
    factorial = (factorial * faculteit);
}
console.log(factorial)
alert(`De factorial van ${a} of !${a} = ${factorial}`)