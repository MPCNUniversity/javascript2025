// Print getallen die een bepaald patroon volgen : Print de getallenreeks 1, 2, 4, 8, 16, 32, ...,
// totdat de waarde groter is dan een door de gebruiker opgegeven getal.
let a = parseInt(window.prompt("Geef een getal op tussen 100 en 1000"));
let getallenreeks = 1;

for (let b =1;getallenreeks<=a;b++){
    console.log(getallenreeks);
    getallenreeks = getallenreeks+getallenreeks;
}
console.log(getallenreeks);